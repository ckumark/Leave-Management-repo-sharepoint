import { IWebPartContext } from '@microsoft/sp-webpart-base';
import UserDetails from '../Global/UserModel';
import { InfoState } from '../Global/InfoState';
export interface ILeaveApplicationProps {
    digest: string;
    context: IWebPartContext;
    hrUsers: UserDetails[];
    userId: string;
    setMessage: (message: string, actionResponseState: InfoState) => void;
    switchState: (event: any) => any;
}
//# sourceMappingURL=ILeaveApplicationProps.d.ts.map