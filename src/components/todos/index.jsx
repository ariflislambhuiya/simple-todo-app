import React from "react";

import { Modal, ModalBody, ModalHeader } from "reactstrap";
import shortid from "shortid";

import Controller from "../controller";
import ListView from "../listView";
import TableView from "../tableView";
import CreateTodoFrom from "../todoForm/";

class Todos extends React.Component {
  state = {
    todos: [
      {
        id: "eier42",
        text: "main todo text",
        dsecription: "Simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "eie42",
        text: " todo text",
        dsecription: "Simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];

    this.setState({ todos });
    this.toggleForm();
  };

  handleFiter = (filter) => {
    this.setState({ filter });
  };

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  changeViwe = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };

  reset = () => {
    this.setState({
      filter: "all",
      searchTerm: "",
      view: "list",
      isOpenTodoForm: false,
    });
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    ) : (
      <TableView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          view={this.state.view}
          changeView={this.changeViwe}
          handleFilter={this.handleFiter}
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
          reset={this.reset}
        />
        <div>{this.getView()}</div>

        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Create New Task</ModalHeader>
          <ModalBody>
            <CreateTodoFrom createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Todos;
