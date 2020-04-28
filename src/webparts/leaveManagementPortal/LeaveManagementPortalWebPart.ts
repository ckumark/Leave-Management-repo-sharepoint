import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { IDigestCache, DigestCache } from "@microsoft/sp-http";
import * as loader from "@microsoft/sp-loader";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  IWebPartContext,
} from "@microsoft/sp-webpart-base";
import * as strings from "LeaveManagementPortalWebPartStrings";
import LeaveManagementPortal from "./components/LeaveManagementPortal/LeaveManagementPortal";
import { ILeaveManagementPortalProps } from "./components/LeaveManagementPortal/ILeaveManagementPortalProps";
import { PageState } from "./components/Global/PageStateEnum";

export interface ILeaveManagementPortalWebPartProps {
  description: string;
}

export default class LeaveManagementPortalWebPart extends BaseClientSideWebPart<
  ILeaveManagementPortalWebPartProps
> {
  public digest: string = "";

  public constructor(context: IWebPartContext) {
    super();

    // loader.SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
  }

  public render(): void {
    const element: React.ReactElement<ILeaveManagementPortalProps> = React.createElement(
      LeaveManagementPortal,
      {
        description: this.properties.description,
        digest: this.digest,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return new Promise<void>(
      (resolve: () => void, reject: (error: any) => void): void => {
        const digestCache: IDigestCache = this.context.serviceScope.consume(
          DigestCache.serviceKey
        );
        digestCache
          .fetchDigest(this.context.pageContext.web.serverRelativeUrl)
          .then((digest: string): void => {
            // use the digest here
            this.digest = digest;
            resolve();
          });
      }
    );
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
