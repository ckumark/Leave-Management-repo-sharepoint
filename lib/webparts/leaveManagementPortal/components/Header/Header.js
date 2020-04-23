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
import styles from './Header.module.scss';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.changePage = function (state) {
        this.props.setMessage("", 2 /* Informational */);
        this.props.switchState(state);
        this.forceUpdate();
    };
    Header.prototype.render = function () {
        var _this = this;
        return (React.createElement("header", null,
            React.createElement("nav", { className: styles.header },
                React.createElement("div", { className: styles.headerTitle },
                    React.createElement("h1", { className: styles.title },
                        React.createElement("strong", null, "Leave Management Portal")),
                    React.createElement("div", { className: styles.signInInfo },
                        React.createElement("strong", null,
                            " Current user: ",
                            this.props.IsUserSelected ? this.props.User.FullName : "Please select a user"))),
                React.createElement("div", null,
                    React.createElement("ul", { className: styles.navList },
                        this.props.IsUserSelected && React.createElement("li", { className: styles.navItem },
                            React.createElement("a", { onClick: function (event) {
                                    _this.changePage(6 /* WelcomePage */);
                                } }, "Home")),
                        this.props.IsUserSelected && React.createElement("li", { className: styles.navItem },
                            React.createElement("a", { onClick: function (event) {
                                    _this.props.switchState(1 /* SwitchUser */);
                                } }, "Switch user")),
                        this.props.IsUserSelected && React.createElement("li", { className: styles.navItem },
                            React.createElement("a", { onClick: function (event) {
                                    _this.changePage(3 /* ApplicationHistory */);
                                } }, "View leave application history")),
                        this.props.IsUserSelected && React.createElement("li", { className: styles.navItem },
                            React.createElement("a", { onClick: function (event) {
                                    _this.changePage(5 /* LeaveApplication */);
                                } }, "Apply Leave")),
                        this.props.IsUserSelected && this.props.User.IsAdmin && React.createElement("li", { className: styles.navItem },
                            React.createElement("a", { onClick: function (event) {
                                    _this.changePage(2 /* PolicyUpload */);
                                } }, "Upload Leave Policy/Leave calendar")),
                        this.props.IsUserSelected && this.props.User.IsAdmin && React.createElement("li", { className: styles.navItem },
                            React.createElement("a", { onClick: function (event) {
                                    _this.changePage(4 /* PendingApprovals */);
                                } }, "View Pending Approvals")))),
                this.props.ActionInfo.Message != undefined && this.props.ActionInfo.Message.length > 0 &&
                    React.createElement("div", null, this.props.ActionInfo.Message),
                React.createElement("div", null))));
    };
    return Header;
}(React.Component));
export default Header;
//# sourceMappingURL=Header.js.map