import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import {GoogleOAuthProvider} from "@react-oauth/google";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
            <GoogleOAuthProvider clientId="770211681853-fkkoell03q93cd3n9r78ehsmvctifddi.apps.googleusercontent.com">
                <BrowserRouter>
                        <App />
                </BrowserRouter>
            </GoogleOAuthProvider>
);
