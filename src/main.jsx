import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthCont from "./Providers/AuthCont.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthCont>
    <HelmetProvider>
      <div className="max-w-screen-lg mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    </AuthCont>
  </React.StrictMode>
);
