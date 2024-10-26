import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from './store/store.ts'
import { Provider } from 'react-redux'
import { MetaMaskProvider } from "@metamask/sdk-react";
const REACT_APP_INFURA_API_KEY = import.meta.env.REACT_APP_INFURA_API_KEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        infuraAPIKey: REACT_APP_INFURA_API_KEY,
        // Other options.
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </MetaMaskProvider>
  </StrictMode>
);
