import { LeaveRequestState } from "./LeaveRequestState";

export default class LeaveRequestModel {
  public RequestID: number;
  public RequesterEmail: string;
  public ApproverEmail: string;
  public ApplicationDate: Date;
  public Status: LeaveRequestState;
  public RequestedOn: Date;
}
