import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Audi from "./Audi";
import VW from "./VW";
import Info from "./Info";
import Skoda from "./Skoda";
import Kia from "./Kia";
import Okno from "./Form";
import Form2 from "./Form2";
import Material from "./Material"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Callback from "./Callback";
import Textarea from "./Textarea";
import Options from "./Options";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Audi" element={<Audi />} />
          <Route path="VW" element={<VW />} />
          <Route path="*" element={<Info />} />
          <Route path="SKODA" element={<Skoda />} />
          <Route path="KIA" element={<Kia />} />
          <Route path="OKNO" element={<Okno />} />
          <Route path="Form2" element={<Form2 />} />
          <Route path="Callback" element={<Callback />} />
          <Route path="Material" element={<Material />} /> 
          <Route path="Textarea" element={<Textarea />} />  
          <Route path="Options" element={<Options />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
