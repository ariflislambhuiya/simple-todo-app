import PropTypes from "prop-types";
import React from "react";
import { Table } from "reactstrap";
import TableViewItem from "./tableViewItem";

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead>
        <th>#</th>
        <th>Tome</th>
        <th>Todo</th>
        <th>Action</th>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TableViewItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default TableView;

TableView.PropTypes = {
  todos: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};
