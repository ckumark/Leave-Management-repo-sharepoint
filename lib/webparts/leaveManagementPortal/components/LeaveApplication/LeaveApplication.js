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
import * as React from "react";
import LeaveApplicationAPI from "../api/LeaveApply.API/LeaveApplicationAPI";
var LeaveApplication = /** @class */ (function (_super) {
    __extends(LeaveApplication, _super);
    /**
     *
     */
    function LeaveApplication(props) {
        var _this = _super.call(this, props) || this;
        _this.leaveDateRef = React.createRef();
        _this.approverId = React.createRef();
        _this.applyLeave = _this.applyLeave.bind(_this);
        return _this;
    }
    LeaveApplication.prototype.applyLeave = function () {
        var _this = this;
        var leaveDate = this.leaveDateRef.current.value;
        var approverId = parseInt(this.approverId.current.value);
        LeaveApplicationAPI.applyLeave(this.props.userId, approverId, new Date(leaveDate)).then(function (response) {
            if (response === true) {
                _this.props.setMessage("Leave request has been forwarded. Please check your request status for more information.", 2 /* Informational */);
                _this.props.switchState(6 /* WelcomePage */);
            }
            else {
                _this.props.setMessage("Failed to request for leave. Please try again", 0 /* Error */);
            }
        });
    };
    LeaveApplication.prototype.render = function () {
        var _this = this;
        var currentDate = new Date();
        var minDate = currentDate.getFullYear() +
            "-" +
            currentDate.getMonth() +
            "-" +
            currentDate.getDate();
        var maxDate = currentDate.getFullYear() +
            1 +
            "-" +
            currentDate.getMonth() +
            "-" +
            currentDate.getDate();
        return (React.createElement("main", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mt-5 pt-5" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("h2", null, "Leave Application"),
                        React.createElement("div", null,
                            React.createElement("div", null,
                                "Required Leave On:",
                                " ",
                                React.createElement("input", { id: "leaveDate", ref: this.leaveDateRef, type: "Date", min: minDate, max: maxDate })),
                            React.createElement("div", null,
                                "Available approvers:",
                                " ",
                                React.createElement("select", { id: "Approver", ref: this.approverId }, this.props.hrUsers.map(function (user) {
                                    return React.createElement("option", { value: user.ID }, user.FullName);
                                }))),
                            React.createElement("div", null,
                                React.createElement("button", { onClick: function () {
                                        _this.applyLeave();
                                    } }, "Apply Leave"))))))));
    };
    return LeaveApplication;
}(React.Component));
export default LeaveApplication;
//# sourceMappingURL=LeaveApplication.js.map