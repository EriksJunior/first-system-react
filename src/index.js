import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNav from "./Pages/PagNav/index";
import PageSuporte from "./Pages/PagSuporte";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageNav />

      <Routes>
        <Route path="/suporte" element={<PageSuporte />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
