import { useState } from "react";

export const GoogleSearch = () => {
    const [query, setQuery] = useState("");
    return (
        <div className="google-search">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Type to Search on Google"
            />
            <p>{query}</p>
        </div>
    );
};
