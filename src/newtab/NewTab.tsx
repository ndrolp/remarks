import "../styles/index.css";
import { Bookmark } from "../components/Bookmark";
import { GoogleSearch } from "./components/GoogleSearch";
import { useContext } from "react";
import { RemarksContext } from "./context/remarksContext";
import FolderContainer from "./components/Folders/FolderContainer";

export default function NewTab() {
    const { bookmarks } = useContext(RemarksContext);

    return (
        <div
            className="container new-tab-container"
            style={{ paddingTop: "16px", paddingBottom: "16px" }}
        >
            <GoogleSearch />
            <div className="favorite ram-stack">
                {bookmarks.noChildNodes.map((node) => {
                    return <Bookmark bookmark={node} />;
                })}
                {bookmarks.noChildNodes.length < 14 ? <Bookmark isPlusButton /> : ""}
            </div>
            <FolderContainer />
        </div>
    );
}
