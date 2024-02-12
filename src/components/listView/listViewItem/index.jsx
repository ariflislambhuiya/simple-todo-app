import PropTypes from "prop-types";
import React from "react";
import { Button, Input, ListGroupItem } from "reactstrap";

const ListViewItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className=" d-flex align-items-center">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className="mx-3">
        {todo.text}
        <p>{todo.time.toDateString()}</p>
      </div>

      <Button
        className="ml-auto"
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

export default ListViewItem;

ListViewItem.PropTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};
