import { useEffect, useMemo, useState } from "react";
import Bookmarks from "../lib/Bookmarks";

export interface IUseBookmarksValue {
    bookmarks: chrome.bookmarks.BookmarkTreeNode | null;
    refreshBookmarks: () => void;
    noChildNodes: chrome.bookmarks.BookmarkTreeNode[];
}

export const useBookmarks = (): IUseBookmarksValue => {
    const [bookmarks, setBookmarks] =
        useState<chrome.bookmarks.BookmarkTreeNode | null>(null);

    const noChildNodes = useMemo(() => {
        if (!bookmarks?.children) return [];
        return bookmarks.children.filter((node) => !node.children);
    }, [bookmarks]);

    useEffect(() => {
        Bookmarks.getBookmarks().then((tree) => setBookmarks(tree));
    }, []);

    function refreshBookmarks() {
        Bookmarks.getBookmarks().then((tree) => setBookmarks(tree));
    }

    return { bookmarks, refreshBookmarks, noChildNodes };
};
