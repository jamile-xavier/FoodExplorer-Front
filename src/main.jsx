import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Plate } from "./pages/Plate";
import { AddPlate } from "./pages/AddPlate";
import { EditPlate } from "./pages/EditPlate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditPlate />
    </ThemeProvider>
  </React.StrictMode>
);
