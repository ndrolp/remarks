import { BOOKMARKS_FOLDER } from "./Bookmarks";

export default class Utils {
  static async createRemarks() {
    chrome.bookmarks.search({ title: BOOKMARKS_FOLDER }, (results) => {
      const folderExists = results.some((bookmark) => !bookmark.url);

      if (!folderExists) {
        chrome.bookmarks.create({ title: BOOKMARKS_FOLDER }, (newFolder) => {
          console.log("Created 'Remarks' folder:", newFolder);
        });
      }
    });
  }
}
