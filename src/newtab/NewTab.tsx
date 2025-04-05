import "../styles/index.css";
import { useBookmarks } from "../hooks/useBookmarks";
import { Bookmark } from "../components/Bookmark";
import { GoogleSearch } from "./components/GoogleSearch";

export default function NewTab() {
    const { noChildNodes } = useBookmarks();

    return (
        <div style={{ padding: "16px" }}>
            <GoogleSearch />
            <h1>Remarks</h1>
            <div className="favorite">
                {noChildNodes.map((node) => {
                    return <Bookmark bookmark={node} />;
                })}
            </div>
        </div>
    );
}
