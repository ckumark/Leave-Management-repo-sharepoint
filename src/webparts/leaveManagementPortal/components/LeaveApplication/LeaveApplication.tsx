import * as React from 'react';
import { ILeaveApplicationProps } from './ILeaveApplicationProps';
import LeaveApplicationAPI from '../api/LeaveApply.API/LeaveApplicationAPI';
import { InfoState } from '../Global/InfoState';
import { PageState } from '../Global/PageStateEnum';

export default class LeaveApplication extends React.Component<ILeaveApplicationProps, {}>{

    public leaveDateRef: React.RefObject<HTMLInputElement>;
    public approverId: React.RefObject<HTMLSelectElement>;

    /**
     *
     */
    constructor(props) {
        super(props);
        this.leaveDateRef = React.createRef();
        this.approverId = React.createRef();
        this.applyLeave = this.applyLeave.bind(this);

    }
    public applyLeave(): void {
        let leaveDate = this.leaveDateRef.current.value;
        let approverId = parseInt(this.approverId.current.value);

        LeaveApplicationAPI.applyLeave(this.props.userId, approverId, new Date(leaveDate)).then(response => {
            if (response === true) {
                this.props.setMessage("Leave request has been forwarded. Please check your request status for more information.", InfoState.Informational);
                this.props.switchState(PageState.WelcomePage);
            } else {
                this.props.setMessage("Failed to request for leave. Please try again", InfoState.Error);
            }
        });
    }

    public render(): React.ReactElement<ILeaveApplicationProps> {
        let currentDate = new Date();
        let minDate = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate();
        let maxDate = (currentDate.getFullYear() + 1) + "-" + currentDate.getMonth() + "-" + currentDate.getDate();
        return (
            <main>
                <div className="container">
                    <div className="row mt-5 pt-5">
                        <div className="col text-center">
                            <h2>Leave Application</h2>
                            <div>
                                <div>
                                    Required Leave On: <input id="leaveDate" ref={this.leaveDateRef} type="Date" min={minDate} max={maxDate}></input>
                                </div>
                                <div>
                                    Available approvers: <select id="Approver" ref={this.approverId}>
                                        {this.props.hrUsers.map(user => {
                                            return (
                                                <option value={user.ID}>{user.FullName}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <button onClick={() => { this.applyLeave(); }}>Apply Leave</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}