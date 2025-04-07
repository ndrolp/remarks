import { useState } from "react";
import { FolderItem } from "./FolderItem";

export const Folder = (props: { node: chrome.bookmarks.BookmarkTreeNode }) => {
    const [currentFolder, setCurrentFolder] =
        useState<chrome.bookmarks.BookmarkTreeNode>(props.node);

    function setFolder(node: chrome.bookmarks.BookmarkTreeNode) {
        setCurrentFolder(node);
    }

    return (
        <div className="remarks-folder">
            <div className="remarks-folder-title">
                <p>{currentFolder.title}</p>
            </div>
            <div className="items">
                {currentFolder.children?.map((node) => (
                    <FolderItem node={node} folderCallback={setFolder} />
                ))}
            </div>
        </div>
    );
};

export default Folder;
