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
// import { pnpjs } from 'sp-pnp-js';
import "@pnp/sp/search";
var SwitchUser = /** @class */ (function (_super) {
    __extends(SwitchUser, _super);
    // private _searchID: string | null;
    // private inputRef: React.RefObject<HTMLInputElement>;
    // public get searchID(): string | null {
    //     return this._searchID;
    // }
    // public set searchID(v: string | null) {
    //     this._searchID = v;
    // }
    function SwitchUser(props, _a) {
        return _super.call(this, props) || this;
        // this.inputRef = React.createRef();
        // // sp.setup({
        // //     spfxContext: this.context
        // // });
    }
    SwitchUser.prototype.selectPortaluser = function (User) {
        var result = this.props.switchUser(User);
        if (result.responseState === true) {
            this.props.setMessage("User selected Successfully", 1 /* Success */);
            this.props.switchState(6 /* WelcomePage */);
        }
        else {
            this.props.setMessage("User selection failed", 0 /* Error */);
            console.log(result.Message);
        }
    };
    SwitchUser.prototype.render = function () {
        var _this = this;
        return (React.createElement("main", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mt-5 pt-5" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("h2", null, "SwitchUser"),
                        React.createElement("button", { onClick: function (event) { return _this.props.SearchUsers(event); } }, "Search")))),
            // (this.searchID != null || (this.props.AvailableUsers && this.props.AvailableUsers.length > 0)) &&
            ((this.props.AvailableUsers && this.props.AvailableUsers.length > 0)) &&
                React.createElement("div", null,
                    "Search results",
                    React.createElement("table", { id: "UserTable" }, this.props.AvailableUsers.map(function (User) {
                        return (React.createElement("tr", null,
                            React.createElement("td", null, User.ID),
                            React.createElement("td", null, User.FullName),
                            React.createElement("td", null, User.IsAdmin),
                            React.createElement("td", null,
                                React.createElement("button", { onClick: function () { return _this.selectPortaluser(User); } }, "Select user"))));
                    })))));
    };
    return SwitchUser;
}(React.Component));
export default SwitchUser;
//# sourceMappingURL=SwitchUser.js.map