import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/";
import "@pnp/sp/items";
import { IList } from "@pnp/sp/lists";
import { Web, FileAddResult, Files } from "sp-pnp-js";

export default class LibraryFactory {
  public static async getLibraryItems(
    context: IWebPartContext,
    libraryName: string
  ): Promise<Files> {
    let web: Web = new Web(context.pageContext.web.absoluteUrl);
    return await web.lists.getByTitle(libraryName).rootFolder.files;
  }

  public static async uploadLibraryItem(
    context: IWebPartContext,
    libraryName: string,
    fileName: string,
    file: File,
    shouldOverWrite: boolean
  ): Promise<FileAddResult> {
    let web: Web = new Web(context.pageContext.web.absoluteUrl);
    return await web
      .getFolderByServerRelativeUrl(libraryName)
      .files.add(fileName, file, shouldOverWrite);
  }

  public static async removeLibraryItem(
    context: IWebPartContext,
    libraryName: string,
    fileName: string
  ): Promise<void> {
    let web: Web = new Web(context.pageContext.web.absoluteUrl);
    return await web.lists
      .getByTitle(libraryName)
      .rootFolder.files.getByName(fileName)
      .delete();
  }
}
