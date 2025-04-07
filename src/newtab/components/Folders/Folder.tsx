export const Folder = (props: { node: chrome.bookmarks.BookmarkTreeNode }) => {
    return (
        <div className="remarks-folder">
            <div className="remarks-folder-title">
                <p>{props.node.title}</p>
            </div>
        </div>
    );
};

export default Folder;
