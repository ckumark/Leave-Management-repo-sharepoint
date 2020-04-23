import LeaveRequestModel from "../../Global/LeaveRequestModel";
import ListFactory from "../Factory/ListFactory/list.factory";

export default class LeaveApplicationAPI {
    public static async cancelLeaveRequest(requestId: number):Promise<any> {
        const results = await ListFactory.deleteListItem("LeaveBalanceSheet", requestId);
        return results;
    }
    public static async getLeaveRequests(userID: string): Promise<LeaveRequestModel[]> {
        try {
            const results = await ListFactory.getListItems("LeaveBalanceSheet", ["ID", "UserNameId", "ApproverIdId", "Status", "LeaveDate", "Created"], "", "");
            let leaveRequests: LeaveRequestModel[] = [];
            results.forEach((leaveRequest: any) => {
                if (leaveRequest.UserNameId === userID) {
                    let request = new LeaveRequestModel();
                    request.RequestID = leaveRequest.Id;
                    request.RequesterEmail = userID;
                    request.ApplicationDate = new Date(leaveRequest.LeaveDate);
                    request.Status = leaveRequest.Status;
                    request.ApproverEmail = leaveRequest.ApproverIdId;
                    request.RequestedOn = new Date(leaveRequest.Created);
                    leaveRequests.push(request);
                }
            });
            return leaveRequests;
        }
        catch (e) {
            return [];
        }
    }
}