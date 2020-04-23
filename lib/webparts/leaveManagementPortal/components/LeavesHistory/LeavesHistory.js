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
import LeaveApplicationAPI from '../api/LeaveRequests.API/LeaveRequestAPI';
import Util from '../Global/util';
var LeavesHistory = /** @class */ (function (_super) {
    __extends(LeavesHistory, _super);
    /**
     *
     */
    function LeavesHistory(props) {
        var _this = _super.call(this, props) || this;
        _this.leaveRequests = [];
        return _this;
    }
    LeavesHistory.prototype.GetLeaveRequests = function () {
        var _this = this;
        LeaveApplicationAPI.getLeaveRequests(this.props.userId).then(function (requests) {
            _this.props.setMessage("", 2 /* Informational */);
            _this.leaveRequests = requests;
            if (requests.length > 0) {
                _this.leaveRequests.forEach(function (request) {
                    request.ApproverEmail = _this.props.getApproverEmail(request.ApproverEmail);
                });
                _this.forceUpdate();
            }
        }).catch(function (error) {
            _this.props.setMessage("Failed to retrieve leave requests", 0 /* Error */);
        });
    };
    LeavesHistory.prototype.cancelLeaveRequest = function (requestId) {
        LeaveApplicationAPI.cancelLeaveRequest(requestId);
        this.props.setMessage("Leave request has been successfully cancelled", 2 /* Informational */);
        this.GetLeaveRequests();
    };
    LeavesHistory.prototype.componentDidMount = function () {
        this.GetLeaveRequests();
    };
    // public componentWillReceiveProps() {
    //     this.GetLeaveRequests();
    // }
    LeavesHistory.prototype.render = function () {
        var _this = this;
        return (React.createElement("main", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mt-5 pt-5" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("h2", null, "View leave application history"),
                        (this.leaveRequests === null || this.leaveRequests.length <= 0) && React.createElement("div", null, "No Leave requests found for the user"),
                        this.leaveRequests != null && this.leaveRequests.length > 0 &&
                            React.createElement("table", null,
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "Request ID"),
                                        React.createElement("td", null, "ApproverEmail"),
                                        React.createElement("td", null, "Requested Leave for"),
                                        React.createElement("td", null, "Request Raised on"),
                                        React.createElement("td", null, "Status"),
                                        React.createElement("td", null, "Cancel"))),
                                React.createElement("tbody", null, this.leaveRequests.map(function (request) {
                                    return (React.createElement("tr", null,
                                        React.createElement("td", null, request.RequestID),
                                        React.createElement("td", null, request.ApproverEmail),
                                        React.createElement("td", null, Util.localDateFormat(request.ApplicationDate)),
                                        React.createElement("td", null, Util.localDateFormat(request.RequestedOn)),
                                        React.createElement("td", null, request.Status),
                                        request.Status.toLowerCase() === "Pending" /* Pending */.toLowerCase() ?
                                            React.createElement("td", null,
                                                React.createElement("button", { onClick: function (event) { return _this.cancelLeaveRequest(request.RequestID); } }, "Cancel Request")) :
                                            React.createElement("td", null, " Action not available")));
                                }))))))));
    };
    return LeavesHistory;
}(React.Component));
export default LeavesHistory;
//# sourceMappingURL=LeavesHistory.js.map