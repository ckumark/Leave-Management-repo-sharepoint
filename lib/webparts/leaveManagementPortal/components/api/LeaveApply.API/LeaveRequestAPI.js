import ListFactory from "../Factory/ListFactory/list.factory";
var LeaveRequestAPI = /** @class */ (function () {
    function LeaveRequestAPI() {
    }
    LeaveRequestAPI.applyLeave = function (userId, approverId, leaveDate) {
        var leaveRequest = {
            UserNameId: userId,
            ApproverIdId: approverId,
            LeaveDate: leaveDate,
            Status: "pending" /* Pending */
        };
        return ListFactory.addListItem("LeaveBalanceSheet", leaveRequest).then(function (response) {
            return true;
        }).catch(function (error) {
            return false;
        });
    };
    return LeaveRequestAPI;
}());
export default LeaveRequestAPI;
//# sourceMappingURL=LeaveRequestAPI.js.map