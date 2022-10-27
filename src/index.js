import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "375px",
  md: "505px",
  lg: "900px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Space Mono'`,
    body: `'Space Mono'`,
  },
  colors: {
    cyan: "#9fe8df",
    cyanish: "#9ee7de",
    darkGreen: "#00494D",
    green: "#20A291",
    grayish: "#5E7A7D",
    lightGray: "#f3f8fb",
    greenBorderFocus: "#26C0AB",
    grayBg: "#F4FAFA",
  },
  components: {
    Button: {
      variants: {
        primary: {
          width: "100%",
          textTransform: "uppercase",
          bgColor: "grayish",
        },
        secondary: {
          fontSize: "24px",
          marginBottom: "10px",
          _hover: { bgColor: "cyan", color: "darkGreen" },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
