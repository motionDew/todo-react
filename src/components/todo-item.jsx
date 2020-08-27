import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, text, checked, important } = this.props.todoItem;

    return (
      <div className="input-group p-1">
        <span className={this.getTodoClasses(checked, important)}>
          {" "}
          {text}{" "}
        </span>
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={(e) => this.props.handleChecked(e, id)}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.handleDelete(id)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.props.handleImportant(id)}
          >
            Important
          </button>
        </div>
      </div>
    );
  }

  getTodoClasses(checked, important) {
    let classes = "border border-dark w-75 p-1 ";
    classes += checked ? "text-success font-weight-bold" : "text-secondary";
    classes += " ";
    classes += important ? "bg-warning" : "";
    return classes;
  }
}

export default TodoItem;
