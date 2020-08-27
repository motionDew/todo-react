import React, { Component } from "react";
import TodoList from "./todo-list";

class Header extends Component {
  state = {
    inputValue: "",
    todoItems: [
      {
        id: 0,
        text: "Todo Item 0",
        checked: false,
        important: false,
      },
      {
        id: 1,
        text: "Todo Item 1",
        checked: false,
        important: false,
      },
      {
        id: 2,
        text: "Todo Item 2",
        checked: false,
        important: false,
      },
      {
        id: 3,
        text: "Todo Item 3",
        checked: false,
        important: false,
      },
    ],
  };

  onAddClick = (event) => {
    //add item
    let indexFromState = 0;
    if (this.state.todoItems.length)
      indexFromState = this.state.todoItems[this.state.todoItems.length - 1].id;
    let lastIndex = undefined;

    if (typeof indexFromState === "undefined") {
      lastIndex = 0;
    } else {
      lastIndex = indexFromState + 1;
    }

    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {
          id: lastIndex,
          text: this.state.inputValue,
          checked: false,
        },
      ],
    });
  };

  handleChange = (event) => {
    //track input field state
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <img
              src="https://image.flaticon.com/icons/svg/716/716832.svg"
              alt=""
              width="30"
              height="30"
            />
            <input
              className="form-control mx-2"
              type="search"
              placeholder="A fancy future todo!"
              aria-label="newTodo"
              onChange={this.handleChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.onAddClick}
            >
              Add
            </button>
          </form>
        </nav>
        <TodoList
          todoItems={this.state.todoItems}
          handleChecked={this.handleChecked}
          handleDelete={this.handleDelete}
          handleImportant={this.handleImportant}
        />
      </div>
    );
  }

  //Todo Item Level

  handleChecked = (event, id) => {
    const todos = [...this.state.todoItems];

    const isChecked = event.target.checked;
    const currentTodoItem = this.state.todoItems.find((todo) => todo.id === id);
    currentTodoItem.checked = isChecked;
    this.setState({ todos });
  };

  handleDelete = (id) => {
    const todos = [...this.state.todoItems];
    const newTodos = todos.filter((item) => item.id !== id);
    // console.log(id);
    // console.log(newTodos);
    this.setState({ ...this.state, todoItems: newTodos });
  };
  handleImportant = (id) => {
    const todos = [...this.state.todoItems];
    let importantTodo = todos.filter((item) => item.id === id)[0];
    console.log(importantTodo);
    importantTodo.important = !importantTodo.important;
    console.log(importantTodo);
    this.setState({ ...this.state, importantTodo });
    console.log(this.state.todoItems);
  };
}

export default Header;
