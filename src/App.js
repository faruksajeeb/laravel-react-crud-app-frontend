import * as React from "react";

import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import EditProduct from "./components/product/edit";
// import ProductList from "./components/product/list";
import CreateProduct from "./components/product/create";

function App() {
  return (
  <BrowserRouter>  
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            {/* <Route exact path='/' element={<ProductList />} /> */}
            
          </Routes>

  </BrowserRouter>
  );
}

export default App;