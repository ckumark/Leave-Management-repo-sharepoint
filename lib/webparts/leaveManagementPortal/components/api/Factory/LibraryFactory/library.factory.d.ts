import { IWebPartContext } from '@microsoft/sp-webpart-base';
import "@pnp/sp/webs";
import "@pnp/sp/";
import "@pnp/sp/items";
import { FileAddResult } from 'sp-pnp-js';
export default class LibraryFactory {
    static getLibraryItems(libraryName: any): Promise<any>;
    static uploadLibraryItem(context: IWebPartContext, libraryName: string, fileName: string, file: File, shouldOverWrite: boolean): Promise<FileAddResult>;
}
//# sourceMappingURL=library.factory.d.ts.map