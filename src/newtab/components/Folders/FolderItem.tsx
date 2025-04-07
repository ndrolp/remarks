import { Folder } from "lucide-react";
import { useMemo } from "react";

export const FolderItem = (props: {
  node: chrome.bookmarks.BookmarkTreeNode;
  folderCallback: (node: chrome.bookmarks.BookmarkTreeNode) => void
}) => {
  const getDomain = (url: string) => {
    try {
      const { hostname } = new URL(url);
      return hostname;
    } catch {
      return null;
    }
  };
  const favicon = useMemo(() => {
    const domain = getDomain(props.node?.url ?? "");
    return domain ? `https://${domain}/favicon.ico` : "default-favicon.png";
  }, [props.node]);

  return (
    <div className="remarks-folder-item">
      {props.node.url ? (
        <div className="folder-bookmark">
          <img src={favicon} />
          <p>{props.node.title}</p>
        </div>
      ) : (
        <div className="folder-subfolder" onClick={() => {
props.folderCallback(props.node)
        }}>
          <Folder />
          <p>{props.node.title}</p>
        </div>
      )}
    </div>
  );
};
