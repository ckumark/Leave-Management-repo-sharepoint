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
var ApprovalHistory = /** @class */ (function (_super) {
    __extends(ApprovalHistory, _super);
    function ApprovalHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApprovalHistory.prototype.render = function () {
        return (React.createElement("main", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mt-5 pt-5" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("h2", null, "Approval/rejection History"))))));
    };
    return ApprovalHistory;
}(React.Component));
export default ApprovalHistory;
//# sourceMappingURL=ApprovalHistory.js.map