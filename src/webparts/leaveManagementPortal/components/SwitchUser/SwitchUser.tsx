import * as React from "react";
import { ISwitchUserProps } from "./ISwitchUserProps";
// import { pnpjs } from 'sp-pnp-js';
import "@pnp/sp/search";
import UserDetails from "../Global/UserModel";
import ResponseModel from "../Global/ResponseModel";
import { PageState } from "../Global/PageStateEnum";
import { InfoState } from "../Global/InfoState";

export default class SwitchUser extends React.Component<ISwitchUserProps, {}> {
  // private _searchID: string | null;
  // private inputRef: React.RefObject<HTMLInputElement>;
  // public get searchID(): string | null {
  //     return this._searchID;
  // }
  // public set searchID(v: string | null) {
  //     this._searchID = v;
  // }

  constructor(props: ISwitchUserProps, {}) {
    super(props);
    // this.inputRef = React.createRef();
    // // sp.setup({
    // //     spfxContext: this.context
    // // });
  }

  public selectPortaluser(User: UserDetails): any {
    let result: ResponseModel = this.props.switchUser(User);

    if (result.responseState === true) {
      this.props.setMessage("User selected Successfully", InfoState.Success);
      this.props.switchState(PageState.WelcomePage);
    } else {
      this.props.setMessage("User selection failed", InfoState.Error);
      console.log(result.Message);
    }
  }

  public render(): React.ReactElement<ISwitchUserProps> {
    return (
      <main>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col text-center">
              <h2>SwitchUser</h2>
              {/* <input ref={this.inputRef} value={this.searchID}></input> */}
              <button onClick={(event) => this.props.SearchUsers(event)}>
                Search
              </button>
            </div>
          </div>
        </div>

        {
          // (this.searchID != null || (this.props.AvailableUsers && this.props.AvailableUsers.length > 0)) &&
          this.props.AvailableUsers && this.props.AvailableUsers.length > 0 && (
            <div>
              Search results
              <table id="UserTable">
                {this.props.AvailableUsers.map((User) => {
                  return (
                    <tr>
                      <td>{User.ID}</td>
                      <td>{User.FullName}</td>
                      <td>{User.IsAdmin}</td>
                      <td>
                        <button onClick={() => this.selectPortaluser(User)}>
                          Select user
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )
        }
      </main>
    );
  }
}
