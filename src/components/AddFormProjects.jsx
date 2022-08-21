import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//data base: url that comes from the server url. we use template literals using Backticks
const apiUrl = "http://localhost:5000/api";

function AddFormProjects() {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
  });
  // console.log(newProject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("The link was clicked");
      const { title, description } = newProject;
      const createNewProject = await axios.post(
        `${apiUrl}/projects`,
        newProject
      );
      console.log("project created", createNewProject);
      // console.log(`${apiUrl}/projects`);
    } catch (error) {
      console.log({ message: error.message });
    }
    // console.log(newProject);
    setNewProject({
      title: "",
      description: "",
    });
  };

  return (
    <div className="d-grid gap-5 ">
      <Form className="p-5 bg-light" onSubmit={handleSubmit}>
        <h1 className="mb-5">Create a new Project</h1>
        <p>{}</p>
        <Form.Group className="mb-4">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title's project"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            name="description"
            cols="30"
            placeholder="Leave a comment here"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Button className="mb-5" variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddFormProjects;
