import * as React from 'react';
import { ILeaveManagementPortalProps } from './ILeaveManagementPortalProps';
import { ILeaveManagementPortalState } from './ILeaveManagementPortalState';
import { PageState } from '../Global/PageStateEnum';
import Header from "../Header/Header";
import LeavesHistory from "../LeavesHistory/LeavesHistory";
import PendingApprovals from "../PendingApprovals/PendingApprovals";
import PolicyUpload from '../PolicyUpload/PolicyUpload';
import SwitchUser from "../SwitchUser/SwitchUser";
import WelcomeNote from '../WelcomeNote/WelcomeNote';
import LeaveApplication from '../LeaveApplication/LeaveApplication';
import UserDetails from '../Global/UserModel';
import ResponseModel from '../Global/ResponseModel';
import ListFactory from '../api/Factory/ListFactory/list.factory';
import ActionInfo from '../Global/ActionInfo';
import { InfoState } from '../Global/InfoState';
import styles from "./LeaveManagementPortal.module.scss";

export default class LeaveManagementPortal extends React.Component<ILeaveManagementPortalProps, ILeaveManagementPortalState> {

  constructor(props: ILeaveManagementPortalProps, state: ILeaveManagementPortalState) {
    super(props, state);
    this.state = {
      currentState: PageState.SwitchUser,
      digest: this.props.digest,
      context: this.props.context,
      IsUserSelected: false,
      User: new UserDetails(),
      AvailableUsers: [],
      ActionInfo: new ActionInfo()
    };
    this.switchState = this.switchState.bind(this);
    this.SearchUsers = this.SearchUsers.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.getApproverEmail = this.getApproverEmail.bind(this);
    this.IsAdmin = this.IsAdmin.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  public IsAdmin(): boolean {
    return this.state.User.IsAdmin;
  }

  public switchState(newState: PageState): void {
    this.setState({ currentState: newState });
  }

  public getApproverEmail(userId: number): string {
    return this.state.AvailableUsers.filter(user => user.ID === userId)[0].Email;
  }

  public selectUser(user: UserDetails): ResponseModel {
    let response = new ResponseModel();
    if (!this.state.IsUserSelected && user.ID === this.state.User.ID) {
      response.Message = "User already selected";
      response.responseState = false;
    } else {
      this.setState({ User: user });
      this.setState({ IsUserSelected: true });
      response.Message = "User selected successfully";
      response.responseState = true;
    }
    return response;
  }

  public SearchUsers(): void {

    ListFactory.getListItems("Users", ["ID", "FullName", "IsAdmin", "Email"], "", "").then(results => {
      if (results.length > 0) {
        this.setState({ AvailableUsers: results });
      } else {
        this.setState({ AvailableUsers: [] });
      }
    });
  }

  public setMessage(message:string, actionResponseState:InfoState):void{
    this.setState({ActionInfo:{Message:message,ActionState:actionResponseState}});
  }

  public render(): React.ReactElement<ILeaveManagementPortalProps> {

    return (
      <div className={styles.mainContainer}>
        <Header
          switchState={this.switchState}
          User={this.state.User}
          IsUserSelected={this.state.IsUserSelected} 
          setMessage={this.setMessage}
          ActionInfo={this.state.ActionInfo}/>        

        {this.state.currentState === PageState.WelcomePage && this.state.IsUserSelected &&
          <WelcomeNote
            digest={this.state.digest}
            context={this.state.context}
            User={this.state.User} />}

        {(this.state.currentState === PageState.SwitchUser || !this.state.IsUserSelected) &&
          <SwitchUser
            digest={this.state.digest}
            context={this.state.context}
            switchUser={this.selectUser}
            SearchUsers={this.SearchUsers}
            AvailableUsers={this.state.AvailableUsers}
            switchState={this.switchState}
            setMessage={this.setMessage} />}

        {this.state.currentState === PageState.PolicyUpload && this.state.IsUserSelected &&
          <PolicyUpload
            digest={this.state.digest}
            context={this.state.context}
            setMessage={this.setMessage} />}

        {this.state.currentState === PageState.PendingApprovals && this.state.IsUserSelected &&
          <PendingApprovals
            digest={this.state.digest}
            context={this.state.context}
            userId={this.state.User.ID}
            setMessage={this.setMessage} />}

        {this.state.currentState === PageState.LeaveApplication && this.state.IsUserSelected &&
          <LeaveApplication
            digest={this.state.digest}
            context={this.state.context}
            userId={this.state.User.Email}
            setMessage={this.setMessage}
            switchState={this.switchState}
            hrUsers={this.state.AvailableUsers.filter(user => user.IsAdmin && user.Email !== this.state.User.Email)} />}

        {this.state.currentState === PageState.ApplicationHistory && this.state.IsUserSelected &&
          <LeavesHistory
            digest={this.state.digest}
            context={this.state.context}
            userId={this.state.User.Email}
            getApproverEmail={this.getApproverEmail}
            setMessage={this.setMessage}
            IsAdmin={this.IsAdmin} />}
      </div>
    );
    // return (
    //     <div className={styles.leaveManagementPortal}>
    //       <div className={styles.container}>
    //         <div className={styles.row}>
    //           <div className={styles.column}>
    //             <span className={styles.title}>Welcome to SharePoint!</span>
    //             <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
    //             <p className={styles.description}>{escape(this.props.description)}</p>
    //             <a href="https://aka.ms/spfx" className={styles.button}>
    //               <span className={styles.label}>Learn more</span>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // );
  }
}
