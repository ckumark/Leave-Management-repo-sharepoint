var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
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
import styles from "./LeaveManagementPortal.module.scss";
var LeaveManagementPortal = /** @class */ (function (_super) {
    __extends(LeaveManagementPortal, _super);
    function LeaveManagementPortal(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.state = {
            currentState: 1 /* SwitchUser */,
            digest: _this.props.digest,
            context: _this.props.context,
            IsUserSelected: false,
            User: new UserDetails(),
            AvailableUsers: [],
            ActionInfo: new ActionInfo()
        };
        _this.switchState = _this.switchState.bind(_this);
        _this.SearchUsers = _this.SearchUsers.bind(_this);
        _this.selectUser = _this.selectUser.bind(_this);
        _this.getApproverEmail = _this.getApproverEmail.bind(_this);
        _this.IsAdmin = _this.IsAdmin.bind(_this);
        _this.setMessage = _this.setMessage.bind(_this);
        return _this;
    }
    LeaveManagementPortal.prototype.IsAdmin = function () {
        return this.state.User.IsAdmin;
    };
    LeaveManagementPortal.prototype.switchState = function (newState) {
        this.setState({ currentState: newState });
    };
    LeaveManagementPortal.prototype.getApproverEmail = function (userId) {
        return this.state.AvailableUsers.filter(function (user) { return user.ID === userId; })[0].Email;
    };
    LeaveManagementPortal.prototype.selectUser = function (user) {
        var response = new ResponseModel();
        if (!this.state.IsUserSelected && user.ID === this.state.User.ID) {
            response.Message = "User already selected";
            response.responseState = false;
        }
        else {
            this.setState({ User: user });
            this.setState({ IsUserSelected: true });
            response.Message = "User selected successfully";
            response.responseState = true;
        }
        return response;
    };
    LeaveManagementPortal.prototype.SearchUsers = function () {
        var _this = this;
        ListFactory.getListItems("Users", ["ID", "FullName", "IsAdmin", "Email"], "", "").then(function (results) {
            if (results.length > 0) {
                _this.setState({ AvailableUsers: results });
            }
            else {
                _this.setState({ AvailableUsers: [] });
            }
        });
    };
    LeaveManagementPortal.prototype.setMessage = function (message, actionResponseState) {
        this.setState({ ActionInfo: { Message: message, ActionState: actionResponseState } });
    };
    LeaveManagementPortal.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.mainContainer },
            React.createElement(Header, { switchState: this.switchState, User: this.state.User, IsUserSelected: this.state.IsUserSelected, setMessage: this.setMessage, ActionInfo: this.state.ActionInfo }),
            this.state.currentState === 6 /* WelcomePage */ && this.state.IsUserSelected &&
                React.createElement(WelcomeNote, { digest: this.state.digest, context: this.state.context, User: this.state.User }),
            (this.state.currentState === 1 /* SwitchUser */ || !this.state.IsUserSelected) &&
                React.createElement(SwitchUser, { digest: this.state.digest, context: this.state.context, switchUser: this.selectUser, SearchUsers: this.SearchUsers, AvailableUsers: this.state.AvailableUsers, switchState: this.switchState, setMessage: this.setMessage }),
            this.state.currentState === 2 /* PolicyUpload */ && this.state.IsUserSelected &&
                React.createElement(PolicyUpload, { digest: this.state.digest, context: this.state.context, setMessage: this.setMessage, IsAdmin: this.IsAdmin }),
            this.state.currentState === 4 /* PendingApprovals */ && this.state.IsUserSelected &&
                React.createElement(PendingApprovals, { digest: this.state.digest, context: this.state.context, userId: this.state.User.ID, setMessage: this.setMessage }),
            this.state.currentState === 5 /* LeaveApplication */ && this.state.IsUserSelected &&
                React.createElement(LeaveApplication, { digest: this.state.digest, context: this.state.context, userId: this.state.User.Email, setMessage: this.setMessage, switchState: this.switchState, hrUsers: this.state.AvailableUsers.filter(function (user) { return user.IsAdmin && user.Email !== _this.state.User.Email; }) }),
            this.state.currentState === 3 /* ApplicationHistory */ && this.state.IsUserSelected &&
                React.createElement(LeavesHistory, { digest: this.state.digest, context: this.state.context, userId: this.state.User.Email, getApproverEmail: this.getApproverEmail, setMessage: this.setMessage, IsAdmin: this.IsAdmin })));
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
    };
    return LeaveManagementPortal;
}(React.Component));
export default LeaveManagementPortal;
//# sourceMappingURL=LeaveManagementPortal.js.map