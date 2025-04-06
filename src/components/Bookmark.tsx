import { useMemo } from "react";
import { Bookmark as IBookmark } from "../lib/Bookmarks";
import { PlusSquare } from "lucide-react";

export const Bookmark = (props: {
    bookmark?: IBookmark;
    isPlusButton?: boolean;
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
        const domain = getDomain(props.bookmark?.url ?? "");
        return domain ? `https://${domain}/favicon.ico` : "default-favicon.png";
    }, [props.bookmark]);

    if (props.isPlusButton) {
        return (
            <button className="bookmark-button plus">
                <PlusSquare />
            </button>
        );
    }

    return (
        <button
            className="bookmark-button"
            onClick={() => {
                window.location.href = props.bookmark?.url ?? "/";
            }}
        >
            <img src={favicon} alt={props.bookmark?.title + " icon"} />
            <p>{props.bookmark?.title}</p>
        </button>
    );
};
