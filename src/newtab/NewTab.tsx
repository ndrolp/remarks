import { useEffect, useState } from "react";
import Bookmarks, { Bookmark } from "../lib/Bookmarks";
import Utils from "../lib/Utils";

export default function NewTab() {
  const [bookmarks, setBookmarks] =
    useState<chrome.bookmarks.BookmarkTreeNode | null>(null);

  useEffect(() => {
    Utils.createRemarks().then(() => {
      Bookmarks.getBookmarks().then((tree) => setBookmarks(tree));
    });
  }, []);

  const renderBookmarks = (nodes: Bookmark[]) => (
    <ul>
      {nodes.map((node) => (
        <li key={node.id}>
          {node.url ? (
            <a href={node.url} target="_blank" rel="noopener noreferrer">
              {node.title || node.url}
            </a>
          ) : (
            <strong>{node.title}</strong>
          )}
          {node.children && renderBookmarks(node.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <div style={{ padding: "16px" }}>
      <h1>Bookmarks</h1>
      {(bookmarks?.children?.length ?? 0) > 0 ? (
        renderBookmarks(bookmarks?.children || [])
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
