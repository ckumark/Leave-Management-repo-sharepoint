import LeaveRequestModel from "../../Global/LeaveRequestModel";
export default class LeaveApplicationAPI {
    static cancelLeaveRequest(requestId: number): Promise<any>;
    static getLeaveRequests(userID: string): Promise<LeaveRequestModel[]>;
}
//# sourceMappingURL=LeaveRequestAPI.d.ts.map