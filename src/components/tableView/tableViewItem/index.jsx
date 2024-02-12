import PropTypes from "prop-types";
import React from "react";
import { Button, Input } from "reactstrap";

const TableViewItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <th scope="row">
        <Input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect}
        />
      </th>
      <th>{todo.time.toDateString()}</th>
      <th>{todo.text}</th>
      <th>
        <Button
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Runing"}
        </Button>
      </th>
    </tr>
  );
};

export default TableViewItem;

TableViewItem.PropTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};
