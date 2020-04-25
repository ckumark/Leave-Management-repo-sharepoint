import { IWebPartContext } from '@microsoft/sp-webpart-base';
import "@pnp/sp/webs";
import "@pnp/sp/";
import "@pnp/sp/items";
import { FileAddResult, Files } from 'sp-pnp-js';
export default class LibraryFactory {
    static getLibraryItems(context: IWebPartContext, libraryName: string): Promise<Files>;
    static uploadLibraryItem(context: IWebPartContext, libraryName: string, fileName: string, file: File, shouldOverWrite: boolean): Promise<FileAddResult>;
    static removeLibraryItem(context: IWebPartContext, libraryName: string, fileName: string): Promise<void>;
}
//# sourceMappingURL=library.factory.d.ts.map