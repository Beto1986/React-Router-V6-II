import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Users from "./routes/Users";
import About from "./routes/About";
import Layout from "./Layout";
import User from "./routes/User";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route index element={<div>Seleccione un usuario</div>} />
          {/* Para obtener el id de cada usuario con un useParams */}
          <Route path=":userId" element={<User />} />
        </Route>
        {/* <Route path="users/:userId" element={<User />} /> */}
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<div>404 - Page not found</div>}/> */}
        {/* Si la ruta no existe navego automaticamente al Home */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
