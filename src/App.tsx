import React from "react";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import RouterMenu from "./components/RouterMenu";

import { QueryClientProvider, QueryClient } from "react-query";
import { Cookie } from "./components/HomeLayout/Cookie";
import { Auth0Provider } from "@auth0/auth0-react";
import { createGlobalStyle } from "styled-components";
import CartContextProvider from "./contexts/CartContext";

const GlobalStyle = createGlobalStyle`
  :root {
    --black-gray: #292929;
    --black: #062424;
    --pink: #d66049;
    --green: #146d6d;
    --white: white;
    --blue: rgb(45, 153, 199);
    --btn-fontsize: 1.2rem;
    --btn-weight: bold;
  }
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  };


  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--pink) var(--black);
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
   width: 12px;
  }

  

  *::-webkit-scrollbar-track {
    background: var(--black);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 20px;
    border: 3px solid var(--black);
  }

  
  * {
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

  form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 300px;
  ::placeholder {
    font-size: 0.8rem;
    color: rgba(70, 70, 70, 0.479);
    text-transform: capitalize;
  }
  input {
    padding: 7px;
    font-size: 1.1rem;
    border: none;
    background-color: white;
    border-radius: 2px;
    outline: none;
  }
  label {
    padding: 5px 0;
    font-size: 0.6rem;
    color: white;
  }
  button {
    font-size: 1rem;
    padding: 10px;
    margin-top: 20px;
    background-color: rgb(247, 126, 126);
    border-radius: 2px;
  }
  textarea {
    margin-top: 20px;
    width: clamp(250px, 40vw, 400px);
    height: 300px;
    padding: 5px;
    border: none;
    background-color: white;
    border-radius: 2px;
  }

  
}
`;

const BaseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8008"
    : "https://tangobootcamp.onrender.com";

function App() {
  const queryClient = new QueryClient();

  return (
    <Auth0Provider
      domain="dev-r45f9tll.eu.auth0.com"
      clientId="eNYipEzbx0t5EFsmPCBp1hGBylFxBB3G"
      redirectUri={BaseURL}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CartContextProvider>
            <RouterMenu />
            <Cookie />
            <GlobalStyle />
          </CartContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;
