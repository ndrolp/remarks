import { useEffect, useMemo, useState } from "react";
import Bookmarks from "../lib/Bookmarks";

export const useBookmarks = () => {
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
