import "@pnp/sp/webs";
import "@pnp/sp/";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IItemUpdateResult } from "@pnp/sp/items";
export default class ListFactory {
    static updateListItem(listName: string, ItemId: number, fieldsList: Object): Promise<IItemUpdateResult>;
    static deleteListItem(listName: string, itemId: number): Promise<any>;
    static getListItems(listName: string, columnsList: string[], filterQuery?: string, lookUp?: string): Promise<any>;
    static addListItem(listName: string, fieldsList: Object): Promise<any>;
}
//# sourceMappingURL=list.factory.d.ts.map