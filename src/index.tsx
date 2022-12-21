import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import { kcContext } from "./KcApp/kcContext";
import React from "react";
import { ThemeProvider } from "@okp4/ui";
import "./styles.scss";

const KcApp = lazy(() => import("./KcApp"));

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Suspense>
        <React.StrictMode>
          <ThemeProvider>
            <div className="okp4-login-main">
              {kcContext === undefined ? (
                <div>No keycloak context found</div>
              ) : (
                <KcApp kcContext={kcContext} />
              )}
            </div>
          </ThemeProvider>
        </React.StrictMode>
      </Suspense>
    </StrictMode>
  );
} else {
  console.error("no root element");
}
