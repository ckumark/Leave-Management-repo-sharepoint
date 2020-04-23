import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/";
import "@pnp/sp/items";
var LibraryFactory = /** @class */ (function () {
    function LibraryFactory() {
    }
    LibraryFactory.prototype.getLibraryItems = function (libraryName) {
        return sp.web.lists.getByTitle(libraryName);
    };
    return LibraryFactory;
}());
export default LibraryFactory;
//# sourceMappingURL=library.factory.js.map