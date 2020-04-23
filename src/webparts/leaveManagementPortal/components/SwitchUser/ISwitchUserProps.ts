import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';
import UserDetails from '../Global/UserModel';
import { InfoState } from '../Global/InfoState';

export interface ISwitchUserProps {
  digest: string;
  context: IWebPartContext;
  switchUser: (event: any) => any;
  AvailableUsers: UserDetails[];
  SearchUsers: (Event: any) => any;
  switchState: (event: any)=>any;
  setMessage: (message: string, actionResponseState: InfoState) => void; 
}
