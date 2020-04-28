import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IItemUpdateResult } from "@pnp/sp/items";

export default class ListFactory {
  public static async updateListItem(
    listName: string,
    ItemId: number,
    fieldsList: Object
  ): Promise<IItemUpdateResult> {
    return await sp.web.lists
      .getByTitle(listName)
      .items.getById(ItemId)
      .update(fieldsList);
  }
  public static async deleteListItem(
    listName: string,
    itemId: number
  ): Promise<any> {
    return await sp.web.lists
      .getByTitle(listName)
      .items.getById(itemId)
      .delete();
  }

  public static async getListItems(
    listName: string,
    columnsList: string[],
    filterQuery?: string,
    lookUp?: string
  ): Promise<any> {
    return await sp.web.lists
      .getByTitle(listName)
      .items.select(...columnsList)
      .expand(lookUp)
      .filter(filterQuery)
      .get();
  }

  public static async addListItem(
    listName: string,
    fieldsList: Object
  ): Promise<any> {
    return await sp.web.lists.getByTitle(listName).items.add(fieldsList);
  }
}
