
import LibraryFactory from "../Factory/LibraryFactory/library.factory";
import { IWebPartContext } from "@microsoft/sp-webpart-base";

export default class LeavePoliciesAPI {
    public static async getLeavePolicies(requestId: number): Promise<any> {
    }

    public static async uploadLeavePolicies(context:IWebPartContext, libraryName:string, fileName:string, file:File, shouldOverWrite:boolean): Promise<any> {
        let response = await LibraryFactory.uploadLibraryItem(context,libraryName,fileName,file,shouldOverWrite);

        if(response.file && response.file!=null){
            return true;
        }else{
            return false;
        }
    }

    public static async removeLeavePolicy(requestId: number): Promise<any> {
    }
}