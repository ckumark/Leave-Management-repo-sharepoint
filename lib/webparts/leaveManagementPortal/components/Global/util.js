var Util = /** @class */ (function () {
    function Util() {
    }
    /**
       * dateFormat
  date:Date :string    */
    Util.localDateFormat = function (date) {
        var dateString = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        }).format(date);
        return dateString;
    };
    return Util;
}());
export default Util;
//# sourceMappingURL=util.js.map