import * as React from "react";
import { ILeavesHistoryProps } from "./ILeavesHistoryProps";
import LeaveRequestModel from "../Global/LeaveRequestModel";
export default class LeavesHistory extends React.Component<ILeavesHistoryProps, {}> {
    leaveRequests: LeaveRequestModel[];
    /**
     *
     */
    constructor(props: any);
    GetLeaveRequests(): void;
    cancelLeaveRequest(requestId: number): void;
    componentDidMount(): void;
    render(): React.ReactElement<ILeavesHistoryProps>;
}
//# sourceMappingURL=LeavesHistory.d.ts.map