import { IWebPartContext } from "@microsoft/sp-webpart-base";
export default class LeavePoliciesAPI {
    static getLeavePolicies(context: IWebPartContext, libraryName: string): Promise<any>;
    static uploadLeavePolicies(context: IWebPartContext, libraryName: string, fileName: string, file: File, shouldOverWrite: boolean): Promise<any>;
    static removeLeavePolicy(context: IWebPartContext, libraryName: string, fileName: string): Promise<boolean>;
}
//# sourceMappingURL=LeavePoliciesAPI.d.ts.map