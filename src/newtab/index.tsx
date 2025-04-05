import React from "react";
import ReactDOM from "react-dom/client";
import NewTab from "./NewTab";
import { RemarksProvider } from "./context/remarksContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RemarksProvider>
            <NewTab />
        </RemarksProvider>
    </React.StrictMode>,
);
