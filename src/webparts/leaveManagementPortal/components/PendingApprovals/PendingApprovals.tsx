import * as React from 'react';
import { IPendingApprovalsProps } from './IPendingApprovalsProps';
import PendingApprovalsAPI from '../api/PendingApprovalsAPI/PendingApprovalsAPI';
import { InfoState } from '../Global/InfoState';
import LeaveRequestModel from '../Global/LeaveRequestModel';
import { LeaveRequestState } from '../Global/LeaveRequestState';
import Util from '../Global/util';

export default class PendingApprovals extends React.Component<IPendingApprovalsProps, {}>{

    public pendingApprovals: LeaveRequestModel[];

    constructor(props) {
        super(props);
        this.pendingApprovals = [];
    }

    public RetrievePendignApprovals(): void {
        PendingApprovalsAPI.getPendingApprovals(this.props.userId).then(requests => {
            // this.props.setMessage("", InfoState.Informational);
            this.pendingApprovals = requests;
            this.forceUpdate();
        }).catch(error => {
            this.props.setMessage("Failed to retrieve leave requests", InfoState.Error);
            this.pendingApprovals = [];
            this.forceUpdate();
        });
    }

    public RejectRequest(RequestID: number): void {
        PendingApprovalsAPI.updatePendingRequest(RequestID, LeaveRequestState.Rejected).then(response => {
            if (response === true) {
                this.props.setMessage("Leave Request Rejected Succesfully", InfoState.Informational);
                this.RetrievePendignApprovals();
            }
        }).catch(error => {
            this.props.setMessage("Failed to reject leave request please try again later", InfoState.Error);
        });
    }
    public ApproveRequest(RequestID: number): void {
        PendingApprovalsAPI.updatePendingRequest(RequestID, LeaveRequestState.Approved).then(response => {
            if (response === true) {
                this.props.setMessage("Leave Request Approved Succesfully", InfoState.Success);
                this.RetrievePendignApprovals();
            }
        }).catch(error => {
            this.props.setMessage("Failed to approve leave request please try again later", InfoState.Error);
        });
    }

    public componentDidMount() {
        this.RetrievePendignApprovals();
    }

    public componentWillReceiveProps() {
        this.RetrievePendignApprovals();
    }

    public render(): React.ReactElement<IPendingApprovalsProps> {
        return (
            <main>
                <div className="container">
                    <div className="row mt-5 pt-5">
                        <div className="col text-center">
                            <h2>View Pending Approvals</h2>

                            {this.pendingApprovals.length > 0 &&
                                <table>
                                    <thead>
                                        <tr><td>Requester</td>
                                            <td>To take leave on</td>
                                            <td>Request Raised on</td>
                                            <td>Leave Status</td>
                                            <td>Action</td></tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.pendingApprovals.map(pendingRequest => {
                                                return (
                                                    <tr>
                                                        <td>{pendingRequest.RequesterEmail}</td>
                                                        <td>

                                                            {Util.localDateFormat(pendingRequest.ApplicationDate)}}
                                                        </td>
                                                        <td>
                                                            {Util.localDateFormat(pendingRequest.RequestedOn)}}
                                                        </td>
                                                        <td>{pendingRequest.Status}</td>
                                                        {pendingRequest.Status.toLowerCase() === LeaveRequestState.Pending.toLowerCase() &&
                                                            <td>

                                                                <button onClick={() => this.ApproveRequest(pendingRequest.RequestID)}>Approve</button>
                                                                <button onClick={() => this.RejectRequest(pendingRequest.RequestID)}> Reject</button>
                                                            </td>
                                                        }
                                                        {pendingRequest.Status.toLowerCase() === LeaveRequestState.Pending.toLowerCase() &&
                                                            <td>{pendingRequest.Status}</td>
                                                        }
                                                    </tr>
                                                );
                                            })
                                        }
                                        <tr></tr>
                                    </tbody>
                                </table> 
                            }
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}