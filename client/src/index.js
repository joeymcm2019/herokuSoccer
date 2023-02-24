import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './public/styles.css';
import './public/index.css';
import { UserProvider } from "./components/UserContext";


ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </React.StrictMode>, 
    document.querySelector("#root"));
