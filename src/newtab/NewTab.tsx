import "../styles/index.css";
import { useBookmarks } from "../hooks/useBookmarks";
import { Bookmark as IBookmark } from "../lib/Bookmarks";
import { Bookmark } from "../components/Bookmark";

export default function NewTab() {
    const { noChildNodes } = useBookmarks();

    const renderBookmarks = (nodes: IBookmark[]) => (
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
            <h1>Remarks</h1>
            <div className="favorite">
                {noChildNodes.map((node) => {
                    return <Bookmark bookmark={node} />;
                })}
            </div>
        </div>
    );
}
