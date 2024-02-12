import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "reactstrap";
import ListViewItem from "./listViewItem";

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListViewItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      ))}
    </ListGroup>
  );
};

ListView.PropTypes = {
  todos: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default ListView;
