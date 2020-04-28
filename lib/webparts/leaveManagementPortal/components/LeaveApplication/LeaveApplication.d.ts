import * as React from "react";
import { ILeaveApplicationProps } from "./ILeaveApplicationProps";
export default class LeaveApplication extends React.Component<ILeaveApplicationProps, {}> {
    leaveDateRef: React.RefObject<HTMLInputElement>;
    approverId: React.RefObject<HTMLSelectElement>;
    /**
     *
     */
    constructor(props: any);
    applyLeave(): void;
    render(): React.ReactElement<ILeaveApplicationProps>;
}
//# sourceMappingURL=LeaveApplication.d.ts.map