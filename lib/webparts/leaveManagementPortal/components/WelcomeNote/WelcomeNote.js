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
var WelcomeNote = /** @class */ (function (_super) {
    __extends(WelcomeNote, _super);
    function WelcomeNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeNote.prototype.render = function () {
        return (React.createElement("main", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mt-5 pt-5" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("h2", null,
                            "Welcome ",
                            this.props.User.FullName))))));
    };
    return WelcomeNote;
}(React.Component));
export default WelcomeNote;
//# sourceMappingURL=WelcomeNote.js.map