import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import App from "./App";
import './index.css';
// import "./styles/global.css";
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use `createRoot`
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Wrap App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
