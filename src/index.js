import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const appId = "VJxRInXk8nHCbzIGikAZYfwEHLCpIzxZW0TScggX";
const serverUrl = "https://liss6t9nscj5.moralishost.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

