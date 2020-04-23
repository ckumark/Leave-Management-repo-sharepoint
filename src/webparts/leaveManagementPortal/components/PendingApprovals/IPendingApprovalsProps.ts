import {
    IWebPartContext
  } from '@microsoft/sp-webpart-base';
import { InfoState } from '../Global/InfoState';

export interface IPendingApprovalsProps {  
    digest:string;
    context:IWebPartContext;
    userId:number;
    setMessage: (message: string, actionResponseState: InfoState) => void; 
}
