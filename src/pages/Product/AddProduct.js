import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/Navbar";

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Add Product</h1>
        <Form>
          <Form.Group className="mb-3" controlId="ProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="CategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Category Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="CategoryId">
            <Form.Label>Category Id</Form.Label>
            <Form.Control type="number" placeholder="Enter Category Id" />
          </Form.Group>

          <Button variant="success" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;
