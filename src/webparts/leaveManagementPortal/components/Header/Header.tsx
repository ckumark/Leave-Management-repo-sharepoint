import * as React from 'react';
import { IHeaderProps } from "./IHeaderProps";
import { PageState } from '../Global/PageStateEnum';
import { InfoState } from '../Global/InfoState';
import styles from './Header.module.scss';


export default class Header extends React.Component<IHeaderProps, {}> {

    public changePage(state:PageState){
        this.props.setMessage("", InfoState.Informational);
        this.props.switchState(state);
        this.forceUpdate();
    }
    public render(): React.ReactElement<IHeaderProps> {
        return (
            <header >
                <nav className={styles.header}>
                    <div className={styles.headerTitle}>
                        <h1 className={styles.title}><strong>Leave Management Portal</strong></h1>
                        <div className={styles.signInInfo}><strong> Current user: {this.props.IsUserSelected ? this.props.User.FullName : "Please select a user"}</strong></div>
                    </div>
                    
                    <div>
                        <ul className={styles.navbar}>
                            {this.props.IsUserSelected && <li className={styles.navItem}><a onClick={(event) => {
                                this.changePage(PageState.WelcomePage);
                            }}>Home</a></li>}

                            {this.props.IsUserSelected && <li className={styles.navItem}><a onClick={(event) => {
                                this.props.switchState(PageState.SwitchUser);
                            }}>Switch user</a></li>}

                            {this.props.IsUserSelected && <li className={styles.navItem}><a onClick={(event) => {
                                 this.changePage(PageState.ApplicationHistory);
                            }}>View leave application history</a></li>}

                            {this.props.IsUserSelected && <li className={styles.navItem}><a onClick={(event) => {
                                 this.changePage(PageState.LeaveApplication);
                            }}>Apply Leave</a></li>}

                            {this.props.IsUserSelected && this.props.User.IsAdmin && <li className={styles.navItem}><a onClick={(event) => {
                                 this.changePage(PageState.PolicyUpload);
                            }}>Upload Leave Policy/Leave calendar</a></li>}

                            {this.props.IsUserSelected && this.props.User.IsAdmin && <li className={styles.navItem}><a onClick={(event) => {
                                 this.changePage(PageState.PendingApprovals);
                            }}>View Pending Approvals</a></li>}

                        </ul>
                    </div>
                    {this.props.ActionInfo.Message != undefined && this.props.ActionInfo.Message.length > 0 &&
                        <div>
                            {this.props.ActionInfo.Message}
                        </div>
                    }
                    <div></div>
                </nav>
            </header>
        );
    }
}