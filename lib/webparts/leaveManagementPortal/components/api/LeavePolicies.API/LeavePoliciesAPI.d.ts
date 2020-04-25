import { IWebPartContext } from "@microsoft/sp-webpart-base";
export default class LeavePoliciesAPI {
    static getLeavePolicies(requestId: number): Promise<any>;
    static uploadLeavePolicies(context: IWebPartContext, libraryName: string, fileName: string, file: File, shouldOverWrite: boolean): Promise<any>;
    static removeLeavePolicy(requestId: number): Promise<any>;
}
//# sourceMappingURL=LeavePoliciesAPI.d.ts.map