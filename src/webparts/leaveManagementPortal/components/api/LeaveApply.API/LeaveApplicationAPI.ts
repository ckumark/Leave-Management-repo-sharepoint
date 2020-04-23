import ListFactory from "../Factory/ListFactory/list.factory";
import { LeaveRequestState } from "../../Global/LeaveRequestState";

export default class LeaveRequestAPI {

    public static applyLeave(userId:string, approverId: number, leaveDate:Date):Promise<boolean>{
        let leaveRequest:Object={
            UserNameId: userId,
            ApproverIdId: approverId,
            LeaveDate: leaveDate,
            Status: LeaveRequestState.Pending
        };
        return ListFactory.addListItem("LeaveBalanceSheet", leaveRequest).then(response=>{
            return true;
        }).catch(error=>{
            return false;
        });

    }
}