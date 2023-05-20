import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/Navbar";
import Form from "react-bootstrap/Form";

const AddCategory = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Add Category</h1>
        <Form>
          <Form.Group className="mb-3" controlId="CategoryId">
            <Form.Label>Category Id</Form.Label>
            <Form.Control type="number" placeholder="Enter Category Id" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="CategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Category Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Category
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddCategory;
