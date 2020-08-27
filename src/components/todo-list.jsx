import React, { Component } from "react";
import TodoItem from "./todo-item";

class TodoList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.todoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            handleChecked={this.props.handleChecked}
            handleDelete={this.props.handleDelete}
            handleImportant={this.props.handleImportant}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
