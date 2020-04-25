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
import LeavePoliciesAPI from '../api/LeavePolicies.API/LeavePoliciesAPI';
var PolicyUpload = /** @class */ (function (_super) {
    __extends(PolicyUpload, _super);
    /**
     *
     */
    function PolicyUpload(props) {
        var _this = _super.call(this, props) || this;
        _this.filesave = _this.filesave.bind(_this);
        return _this;
    }
    PolicyUpload.prototype.filesave = function () {
        var file = document.querySelector("#newfile").files[0];
        if (file != undefined || file != null) {
            // you can adjust this number to control what size files are uploaded in chunks
            if (file.size <= 10485760) {
                // small upload
                LeavePoliciesAPI.uploadLeavePolicies(this.props.context, "Company%20Policies/", file.name, file, true).then(function (response) {
                    if (response) {
                        console.log("File Uploaded");
                    }
                    else {
                        console.log("File Upload Failed");
                    }
                }).catch(function (error) {
                    console.log("File Upload Failed");
                });
            }
        }
    };
    PolicyUpload.prototype.render = function () {
        return (React.createElement("main", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row mt-5 pt-5" },
                    React.createElement("div", { className: "col text-center" },
                        React.createElement("h2", null, "Leave Policies/calendar")),
                    this.props.IsAdmin() &&
                        React.createElement("div", null,
                            React.createElement("h3", null, " Upload Policies "),
                            React.createElement("input", { type: "file", name: "myFile", id: "newfile" }),
                            React.createElement("button", { onClick: this.filesave }, "Upload File")),
                    React.createElement("div", null, "Policies")))));
    };
    return PolicyUpload;
}(React.Component));
export default PolicyUpload;
//# sourceMappingURL=PolicyUpload.js.map