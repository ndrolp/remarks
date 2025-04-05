import { useState } from "react";

export const GoogleSearch = () => {
    const [query, setQuery] = useState("");
    return (
        <div className="google-search" style={{ marginTop: "32px" }}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Type to Search on Google"
            />
        </div>
    );
};
