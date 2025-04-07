import { useContext } from "react";
import { RemarksContext } from "../../context/remarksContext";
import Folder from "./Folder";

export const FolderContainer = () => {
    const { bookmarks } = useContext(RemarksContext);
    return (
        <div className="remarks-folder-container">
            {bookmarks.baseFolders.map((node) => {
                return <Folder node={node} />;
            })}
        </div>
    );
};

export default FolderContainer;
