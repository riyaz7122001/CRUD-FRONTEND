import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/Navbar";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/constants";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateCategory = () => {
  const [CategoryId, setCategoryId] = useState("");
  const [CategoryName, setCategoryName] = useState("");

  const navigate = useNavigate();

  const handleUpdateCategory = async () => {};
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Update Category</h1>
        <Form onSubmit={handleUpdateCategory}>
          <Form.Group className="mb-3" controlId="CategoryId">
            <Form.Label>Category Id</Form.Label>
            <Form.Control
              type="number"
              name="CategoryId"
              placeholder="Enter Category Id"
              onChange={(e) => setCategoryId(e.target.value)}
              value={CategoryId}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="CategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              name="CategoryName"
              placeholder="Enter Category Name"
              onChange={(e) => setCategoryName(e.target.value)}
              value={CategoryName}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Category
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateCategory;
