import * as React from 'react';
import { ILeaveManagementPortalProps } from './ILeaveManagementPortalProps';
import { ILeaveManagementPortalState } from './ILeaveManagementPortalState';
import { PageState } from '../Global/PageStateEnum';
import UserDetails from '../Global/UserModel';
import ResponseModel from '../Global/ResponseModel';
import { InfoState } from '../Global/InfoState';
export default class LeaveManagementPortal extends React.Component<ILeaveManagementPortalProps, ILeaveManagementPortalState> {
    constructor(props: ILeaveManagementPortalProps, state: ILeaveManagementPortalState);
    IsAdmin(): boolean;
    switchState(newState: PageState): void;
    getApproverEmail(userId: number): string;
    selectUser(user: UserDetails): ResponseModel;
    SearchUsers(): void;
    setMessage(message: string, actionResponseState: InfoState): void;
    render(): React.ReactElement<ILeaveManagementPortalProps>;
}
//# sourceMappingURL=LeaveManagementPortal.d.ts.map