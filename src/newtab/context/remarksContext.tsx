import { createContext, ReactNode } from "react";
import { IUseBookmarksValue, useBookmarks } from "../../hooks/useBookmarks";

export interface IRemarksContext {
    bookmarks: IUseBookmarksValue;
}

export const RemarksContext = createContext<IRemarksContext>({
    bookmarks: { bookmarks: null, noChildNodes: [], refreshBookmarks: () => { } },
});

interface IRemarksProviderProps {
    children: ReactNode;
}

export const RemarksProvider = (props: IRemarksProviderProps) => {
    const bookmarks = useBookmarks();
    return (
        <RemarksContext.Provider value={{ bookmarks }}>
            {props.children}
        </RemarksContext.Provider>
    );
};
