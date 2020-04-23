import { LeaveRequestState } from "../../Global/LeaveRequestState";
export default class PendingApprovalsAPI {
    static updatePendingRequest(RequestID: number, UpdatedState: LeaveRequestState): Promise<boolean>;
    static getPendingApprovals(userId: number): Promise<any>;
}
//# sourceMappingURL=PendingApprovalsAPI.d.ts.map