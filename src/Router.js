import React from "react";
import { BrowserRouter as MainRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/Product/AddProduct";
import AddCategory from "./pages/Category/AddCategory";

const Router = () => {
  return (
    <MainRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/addCategory" element={<AddCategory />} />
      </Routes>
    </MainRouter>
  );
};

export default Router;
