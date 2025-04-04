import Utils from "./Utils";

export type Bookmark = {
  id: string;
  title: string;
  url?: string;
  children?: Bookmark[];
};

export const BOOKMARKS_FOLDER = "Remarks";

export default class Bookmarks {
  static async getBookmarks() {
    await Utils.createRemarks();
    const tree = await chrome.bookmarks.getTree();
    return this.findRemarksFolder(tree[0].children || []);
  }
  private static findRemarksFolder(
    nodes: chrome.bookmarks.BookmarkTreeNode[],
  ): chrome.bookmarks.BookmarkTreeNode | null {
    for (const node of nodes) {
      if (node.title === BOOKMARKS_FOLDER && !node.url) {
        return node; // Found the folder, return it
      }
      if (node.children) {
        const result = this.findRemarksFolder(node.children);
        if (result) return result;
      }
    }
    return null; // Folder not found
  }
}
