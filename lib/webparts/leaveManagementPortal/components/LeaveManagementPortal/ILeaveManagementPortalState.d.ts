import { PageState } from "../Global/PageStateEnum";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import User from "../Global/UserModel";
import ActionInfo from "../Global/ActionInfo";
export interface ILeaveManagementPortalState {
    currentState: PageState;
    digest: string;
    context: IWebPartContext;
    IsUserSelected: boolean;
    User: User;
    AvailableUsers: User[];
    ActionInfo: ActionInfo;
}
//# sourceMappingURL=ILeaveManagementPortalState.d.ts.map