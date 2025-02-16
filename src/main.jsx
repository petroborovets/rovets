import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {LanguageProvider} from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LanguageProvider>
            <App/>
        </LanguageProvider>
    </React.StrictMode>
);
