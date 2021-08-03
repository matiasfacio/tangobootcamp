import React from "react";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./css/main.css";
import RouterMenu from "./components/RouterMenu";
import { QueryClientProvider, QueryClient } from "react-query";
import { Cookie } from "./components/Cookie";
import { Auth0Provider } from "@auth0/auth0-react";
import { createGlobalStyle } from "styled-components";
// require("dotenv").config();

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #292929;
    --pink: rgb(247, 126, 126);
    --white: white;
    --blue: rgb(45, 153, 199);
  }
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  };
  body {
    padding:0;
    margin:0;
    box-sizing: border-box;
  };
  
  h1, h2, h3 {
  font-family: 'Merriweather', serif;
  }

  h1 {
    font-weight: 800;
    line-height: 1.2;
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
    font-family: 'Merriweather', sans-serif;
  }

  a {
  color: white;
  text-decoration: none;
  }
`;

// const REDIRECT_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_REDIRECT_URL
//     : "http://localhost:3000/userarea";
// https://www.tangobootcamp.net

function App() {
  const queryClient = new QueryClient();

  return (
    <Auth0Provider
      domain="dev-r45f9tll.eu.auth0.com"
      clientId="eNYipEzbx0t5EFsmPCBp1hGBylFxBB3G"
      redirectUri={"https://www.tangobootcamp.net"}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouterMenu />
          <Cookie />
          <GlobalStyle />
        </BrowserRouter>
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;
