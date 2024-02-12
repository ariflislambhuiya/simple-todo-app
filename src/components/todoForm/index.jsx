import PropTypes from "prop-types";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class CreateTodoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Tesk</Label>
          <Input
            placeholder="Enter Task"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Descripe Task</Label>
          <Input
            type="textarea"
            placeholder="write some description about your task"
            name="desctiption"
            valid={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Create Tesk</Button>
      </Form>
    );
  }
}

CreateTodoForm.PropTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
