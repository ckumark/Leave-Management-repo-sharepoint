import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/";
import "@pnp/sp/items";
import { IList } from "@pnp/sp/lists";

export default class LibraryFactory{

    public getLibraryItems(libraryName):IList{
        return sp.web.lists.getByTitle(libraryName);
    }
}