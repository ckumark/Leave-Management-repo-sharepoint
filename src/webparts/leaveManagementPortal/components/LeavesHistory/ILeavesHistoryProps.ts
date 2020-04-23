import {
    IWebPartContext
  } from '@microsoft/sp-webpart-base';
import { InfoState } from '../Global/InfoState';

export interface ILeavesHistoryProps {
    digest:string;
    context:IWebPartContext;
    userId:string;    
    getApproverEmail: (event: any) => any;    
    IsAdmin: (event: any) => any;
    setMessage: (message: string, actionResponseState: InfoState) => void; 

}
