import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./Theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);

reportWebVitals();
