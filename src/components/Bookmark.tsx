import { useMemo } from "react";
import { Bookmark as IBookmark } from "../lib/Bookmarks";

export const Bookmark = (props: { bookmark: IBookmark }) => {
    const getDomain = (url: string) => {
        try {
            const { hostname } = new URL(url);
            return hostname;
        } catch {
            return null;
        }
    };
    const favicon = useMemo(() => {
        const domain = getDomain(props.bookmark.url ?? "");
        return domain ? `https://${domain}/favicon.ico` : "default-favicon.png";
    }, [props.bookmark]);
    return (
        <button
            className="bookmark-button"
            onClick={() => {
                window.location.href = props.bookmark.url ?? "/";
            }}
        >
            <img src={favicon} alt={props.bookmark.title + " icon"} />
            <p>{props.bookmark.title}</p>
        </button>
    );
};
