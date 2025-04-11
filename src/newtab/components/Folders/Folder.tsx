import { useMemo, useState } from "react";
import { FolderItem } from "./FolderItem";
import { ArrowLeft, HomeIcon } from "lucide-react";

export const Folder = (props: { node: chrome.bookmarks.BookmarkTreeNode }) => {
    const [folderStack, setFolderStack] = useState<
        chrome.bookmarks.BookmarkTreeNode[]
    >([props.node]);

    const currentFolder = useMemo(() => {
        return folderStack[folderStack.length - 1] ?? null;
    }, [folderStack]);

    function addFolder(node: chrome.bookmarks.BookmarkTreeNode) {
        setFolderStack([...folderStack, node]);
    }

    return (
        <div className="remarks-folder">
            <div className="remarks-folder-title">
                <p>{currentFolder.title}</p>
                <div className="actions">
                    {folderStack.length > 1 ? (
                        <>
                            <button
                                onClick={() => {
                                    setFolderStack(folderStack.slice(0, -1));
                                }}
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                onClick={() => {
                                    setFolderStack([props.node]);
                                }}
                            >
                                <HomeIcon />
                            </button>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="items">
                {currentFolder
                    ? (currentFolder?.children?.map((node) => (
                        <FolderItem node={node} folderCallback={addFolder} />
                    )) ?? "")
                    : ""}
            </div>
        </div>
    );
};

export default Folder;
