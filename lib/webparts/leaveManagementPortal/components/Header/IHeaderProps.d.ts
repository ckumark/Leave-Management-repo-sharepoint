import UserDetails from "../Global/UserModel";
import ActionInfo from "../Global/ActionInfo";
import { InfoState } from "../Global/InfoState";
export interface IHeaderProps {
    switchState: (event: any) => any;
    User: UserDetails;
    IsUserSelected: Boolean;
    ActionInfo: ActionInfo;
    setMessage: (message: string, actionResponseState: InfoState) => void;
}
//# sourceMappingURL=IHeaderProps.d.ts.map