
import LibraryFactory from "../Factory/LibraryFactory/library.factory";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { Files } from "sp-pnp-js";

export default class LeavePoliciesAPI {
    public static async getLeavePolicies(context:IWebPartContext, libraryName:string): Promise<any> {  
        let response = await LibraryFactory.getLibraryItems(context,libraryName);
        //need to map model for files recieved
    }

    public static async uploadLeavePolicies(context:IWebPartContext, libraryName:string, fileName:string, file:File, shouldOverWrite:boolean): Promise<any> {
        let response = await LibraryFactory.uploadLibraryItem(context,libraryName,fileName,file,shouldOverWrite);

        if(response.file && response.file!=null){
            return true;
        }else{
            return false;
        }
    }

    public static async removeLeavePolicy(context:IWebPartContext, libraryName:string, fileName:string): Promise<boolean> {
        try{
            let response = await LibraryFactory.removeLibraryItem(context,libraryName,fileName);
            return true;
        }catch{
            return false;
        }       

    }
}