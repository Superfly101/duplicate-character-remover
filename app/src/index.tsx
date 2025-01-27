import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DuplicateCharacterPage from "./routes/duplicate-character";
import Root from "./routes/root";
import CharacterContextProvider from "./context/character-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CharacterContextProvider>
        <Root />
      </CharacterContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/remove-duplicate",
        element: <DuplicateCharacterPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
