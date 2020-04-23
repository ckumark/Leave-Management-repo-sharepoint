import {
    IWebPartContext
  } from '@microsoft/sp-webpart-base';
import UserDetails from '../Global/UserModel';

export interface IWelcomeNoteProps {  
    digest:string;
    context:IWebPartContext;
    User:UserDetails;
}
