export default class Util {
  /**
     * dateFormat
date:Date :string    */
  public static localDateFormat(date: Date): string {
    var dateString = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
    return dateString;
  }
}
