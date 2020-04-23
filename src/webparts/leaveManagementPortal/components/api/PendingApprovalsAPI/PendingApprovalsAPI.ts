import LeaveRequestModel from "../../Global/LeaveRequestModel";
import ListFactory from "../Factory/ListFactory/list.factory";
import { LeaveRequestState } from "../../Global/LeaveRequestState";

export default class PendingApprovalsAPI {
    public static async updatePendingRequest(RequestID: number, UpdatedState: LeaveRequestState): Promise<boolean> {
        try {
            const response = await ListFactory.updateListItem("LeaveBalanceSheet", RequestID, { Status: UpdatedState });
            if (response.data && response.item) {
                return true;
            } else {
                return false;
            }
        }
        catch (error) {
            return false;
        }

    }
    
    public static async getPendingApprovals(userId: number): Promise<any> {
        try {
            const response = await ListFactory.getListItems("LeaveBalanceSheet", ["ID", "UserNameId", "ApproverIdId", "Status", "LeaveDate","Created"], "", "");
            let pendingApprovals: LeaveRequestModel[] = [];
            response.forEach(pendingRequest => {
                if (pendingRequest.ApproverIdId === userId) {
                    let request = new LeaveRequestModel();
                    request.RequestID = pendingRequest.ID;
                    request.RequesterEmail = pendingRequest.UserNameId;
                    request.ApplicationDate = new Date(pendingRequest.LeaveDate);
                    request.Status = pendingRequest.Status;
                    request.ApproverEmail = pendingRequest.ApproverIdId;
                    request.RequestedOn= new Date(pendingRequest.Created);
                    pendingApprovals.push(request);
                }
            });
            return pendingApprovals;
        }
        catch (error) {
            return [];
        }
    }
}