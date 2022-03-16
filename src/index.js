import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNav from "./Pages/PagNav/index";
import PageSuporte from "./Pages/PagSuporte";
import PageAgenda from "./Pages/PagAgenda";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageNav />
      <ToastContainer />
      <Routes>
        <Route path="/suporte" element={<PageSuporte />} />
        <Route path="/Agenda" element={<PageAgenda />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
