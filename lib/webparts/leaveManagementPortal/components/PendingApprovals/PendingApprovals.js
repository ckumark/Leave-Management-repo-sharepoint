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
import PendingApprovalsAPI from '../api/PendingApprovalsAPI/PendingApprovalsAPI';
import Util from '../Global/util';
var PendingApprovals = /** @class */ (function (_super) {
    __extends(PendingApprovals, _super);
    function PendingApprovals(props) {
        var _this = _super.call(this, props) || this;
        _this.pendingApprovals = [];
        return _this;
    }
    PendingApprovals.prototype.RetrievePendignApprovals = function () {
        var _this = this;
        PendingApprovalsAPI.getPendingApprovals(this.props.userId).then(function (requests) {
            // this.props.setMessage("", InfoState.Informational);
            _this.pendingApprovals = requests;
            _this.forceUpdate();
        }).catch(function (error) {
            _this.props.setMessage("Failed to retrieve leave requests", 0 /* Error */);
            _this.pendingApprovals = [];
            _this.forceUpdate();
        });
    };
    PendingApprovals.prototype.RejectRequest = function (RequestID) {
        var _this = this;
        PendingApprovalsAPI.updatePendingRequest(RequestID, "Rejected" /* Rejected */).then(function (response) {
            if (response === true) {
                _this.props.setMessage("Leave Request Rejected Succesfully", 2 /* Informational */);
                _this.RetrievePendignApprovals();
            }
        }).catch(function (error) {
            _this.props.setMessage("Failed to reject leave request please try again later", 0 /* Error */);
        });
    };
    PendingApprovals.prototype.ApproveRequest = function (RequestID) {
        var _this = this;
        PendingApprovalsAPI.updatePendingRequest(RequestID, "Approved" /* Approved */).then(function (response) {
            if (response === true) {
                _this.props.setMessage("Leave Request Approved Succesfully", 1 /* Success */);
                _this.RetrievePendignApprovals();
            }
        }).catch(function (error) {
            _this.props.setMessage("Failed to approve leave request please try again later", 0 /* Error */);
        });
    };
    PendingApprovals.prototype.componentDidMount = function () {
        this.RetrievePendignApprovals();
    };
    PendingApprovals.prototype.componentWillReceiveProps = function () {
        this.RetrievePendignApprovals();
    };
    PendingApprovals.prototype.render = function () {
        var _this = this;
        return (React.createElement("main", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mt-5 pt-5" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("h2", null, "View Pending Approvals"),
                        this.pendingApprovals.length > 0 &&
                            React.createElement("table", null,
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", null, "Requester"),
                                        React.createElement("td", null, "To take leave on"),
                                        React.createElement("td", null, "Request Raised on"),
                                        React.createElement("td", null, "Leave Status"),
                                        React.createElement("td", null, "Action"))),
                                React.createElement("tbody", null,
                                    this.pendingApprovals.map(function (pendingRequest) {
                                        return (React.createElement("tr", null,
                                            React.createElement("td", null, pendingRequest.RequesterEmail),
                                            React.createElement("td", null,
                                                Util.localDateFormat(pendingRequest.ApplicationDate),
                                                "}"),
                                            React.createElement("td", null,
                                                Util.localDateFormat(pendingRequest.RequestedOn),
                                                "}"),
                                            React.createElement("td", null, pendingRequest.Status),
                                            pendingRequest.Status.toLowerCase() === "Pending" /* Pending */.toLowerCase() &&
                                                React.createElement("td", null,
                                                    React.createElement("button", { onClick: function () { return _this.ApproveRequest(pendingRequest.RequestID); } }, "Approve"),
                                                    React.createElement("button", { onClick: function () { return _this.RejectRequest(pendingRequest.RequestID); } }, " Reject")),
                                            pendingRequest.Status.toLowerCase() === "Pending" /* Pending */.toLowerCase() &&
                                                React.createElement("td", null, pendingRequest.Status)));
                                    }),
                                    React.createElement("tr", null))))))));
    };
    return PendingApprovals;
}(React.Component));
export default PendingApprovals;
//# sourceMappingURL=PendingApprovals.js.map