import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, IWebPartContext } from '@microsoft/sp-webpart-base';
export interface ILeaveManagementPortalWebPartProps {
    description: string;
}
export default class LeaveManagementPortalWebPart extends BaseClientSideWebPart<ILeaveManagementPortalWebPartProps> {
    digest: string;
    constructor(context: IWebPartContext);
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=LeaveManagementPortalWebPart.d.ts.map