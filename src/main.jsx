import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProviderWrapper } from "./contexts/ThemeContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProviderWrapper>
  </StrictMode>
);
