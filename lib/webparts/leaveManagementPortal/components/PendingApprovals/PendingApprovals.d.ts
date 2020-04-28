import * as React from "react";
import { IPendingApprovalsProps } from "./IPendingApprovalsProps";
import LeaveRequestModel from "../Global/LeaveRequestModel";
export default class PendingApprovals extends React.Component<IPendingApprovalsProps, {}> {
    pendingApprovals: LeaveRequestModel[];
    constructor(props: any);
    RetrievePendignApprovals(): void;
    RejectRequest(RequestID: number): void;
    ApproveRequest(RequestID: number): void;
    componentDidMount(): void;
    componentWillReceiveProps(): void;
    render(): React.ReactElement<IPendingApprovalsProps>;
}
//# sourceMappingURL=PendingApprovals.d.ts.map