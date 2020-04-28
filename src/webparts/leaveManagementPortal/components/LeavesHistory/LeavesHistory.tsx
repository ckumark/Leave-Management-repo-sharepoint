import * as React from "react";
import { ILeavesHistoryProps } from "./ILeavesHistoryProps";
import LeaveRequestModel from "../Global/LeaveRequestModel";
import LeaveApplicationAPI from "../api/LeaveRequests.API/LeaveRequestAPI";
import { LeaveRequestState } from "../Global/LeaveRequestState";
import { InfoState } from "../Global/InfoState";
import Util from "../Global/util";

export default class LeavesHistory extends React.Component<
  ILeavesHistoryProps,
  {}
> {
  public leaveRequests: LeaveRequestModel[] = [];
  /**
   *
   */
  constructor(props) {
    super(props);
  }

  public GetLeaveRequests(): void {
    LeaveApplicationAPI.getLeaveRequests(this.props.userId)
      .then((requests) => {
        this.props.setMessage("", InfoState.Informational);
        this.leaveRequests = requests;
        if (requests.length > 0) {
          this.leaveRequests.forEach((request) => {
            request.ApproverEmail = this.props.getApproverEmail(
              request.ApproverEmail
            );
          });
          this.forceUpdate();
        }
      })
      .catch((error) => {
        this.props.setMessage(
          "Failed to retrieve leave requests",
          InfoState.Error
        );
      });
  }

  public cancelLeaveRequest(requestId: number): void {
    LeaveApplicationAPI.cancelLeaveRequest(requestId);
    this.props.setMessage(
      "Leave request has been successfully cancelled",
      InfoState.Informational
    );
    this.GetLeaveRequests();
  }

  public componentDidMount() {
    this.GetLeaveRequests();
  }

  // public componentWillReceiveProps() {
  //     this.GetLeaveRequests();
  // }

  public render(): React.ReactElement<ILeavesHistoryProps> {
    return (
      <main>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col text-center">
              <h2>View leave application history</h2>
              {(this.leaveRequests === null ||
                this.leaveRequests.length <= 0) && (
                <div>No Leave requests found for the user</div>
              )}
              {this.leaveRequests != null && this.leaveRequests.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <td>Request ID</td>
                      <td>ApproverEmail</td>
                      <td>Requested Leave for</td>
                      <td>Request Raised on</td>
                      <td>Status</td>
                      <td>Cancel</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.leaveRequests.map((request) => {
                      return (
                        <tr>
                          <td>{request.RequestID}</td>
                          <td>{request.ApproverEmail}</td>
                          <td>
                            {Util.localDateFormat(request.ApplicationDate)}
                          </td>
                          <td>{Util.localDateFormat(request.RequestedOn)}</td>
                          <td>{request.Status}</td>
                          {request.Status.toLowerCase() ===
                          LeaveRequestState.Pending.toLowerCase() ? (
                            <td>
                              <button
                                onClick={(event) =>
                                  this.cancelLeaveRequest(request.RequestID)
                                }
                              >
                                Cancel Request
                              </button>
                            </td>
                          ) : (
                            <td> Action not available</td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
