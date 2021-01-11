import { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render(){
    return this.props.todo.map(
        (todo) => (
            <TodoItem key={todo.id} todo ={todo} markComplete={this.props.markComplete} deleteTodo ={this.props.deleteTodo}/>
        )
    )
  }
}
Todos.propTypes = {
    todo : PropTypes.array.isRequired
}

export default Todos;
