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
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { DigestCache } from "@microsoft/sp-http";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart, } from "@microsoft/sp-webpart-base";
import * as strings from "LeaveManagementPortalWebPartStrings";
import LeaveManagementPortal from "./components/LeaveManagementPortal/LeaveManagementPortal";
var LeaveManagementPortalWebPart = /** @class */ (function (_super) {
    __extends(LeaveManagementPortalWebPart, _super);
    function LeaveManagementPortalWebPart(context) {
        var _this = _super.call(this) || this;
        _this.digest = "";
        return _this;
        // loader.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    }
    LeaveManagementPortalWebPart.prototype.render = function () {
        var element = React.createElement(LeaveManagementPortal, {
            description: this.properties.description,
            digest: this.digest,
            context: this.context,
        });
        ReactDom.render(element, this.domElement);
    };
    LeaveManagementPortalWebPart.prototype.onInit = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var digestCache = _this.context.serviceScope.consume(DigestCache.serviceKey);
            digestCache
                .fetchDigest(_this.context.pageContext.web.serverRelativeUrl)
                .then(function (digest) {
                // use the digest here
                _this.digest = digest;
                resolve();
            });
        });
    };
    LeaveManagementPortalWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(LeaveManagementPortalWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    LeaveManagementPortalWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return LeaveManagementPortalWebPart;
}(BaseClientSideWebPart));
export default LeaveManagementPortalWebPart;
//# sourceMappingURL=LeaveManagementPortalWebPart.js.map