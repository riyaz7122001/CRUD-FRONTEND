import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { api } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`${api}/category/getCategory`)
      .then((response) => response.json())
      .then((result) => setCategory(result.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: "center", alignContent: "center" }}>
        Category Table
      </h2>

      <div
        className="container "
        style={{ textAlign: "center", alignContent: "center" }}
      >
        <center>
          <table style={{ borderCollapse: "collapse", width: "60%" }}>
            <thead>
              <tr style={{ border: "1px solid black", padding: "8px" }}>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>CatregoryId</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>CatregoryName</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>Action</b>
                  </h3>
                </th>
              </tr>
            </thead>
            {category &&
              category.length > 0 &&
              category.map((category) => {
                return (
                  <tbody key={category.CategoryId}>
                    <tr style={{ border: "1px solid black", padding: "8px" }}>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {category.CategoryId}
                        </h5>
                      </td>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {category.CategoryName}
                        </h5>
                      </td>

                      <td>
                        <NavLink to={"/products"}>
                          <Button variant="primary" style={{ margin: "10px" }}>
                            Edit
                          </Button>
                        </NavLink>
                        <NavLink to={"/categories"}>
                          <Button variant="primary" style={{ margin: "10px" }}>
                            Delete
                          </Button>
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </center>
      </div>
      <footer style={{ alignItems: "center", textAlign: "center" }}>
        <NavLink to="/addCategory">
          <Button variant="primary" style={{ margin: "10px" }}>
            Add Category
          </Button>
        </NavLink>
      </footer>
    </>
  );
};

export default Category;
