import React, { Component } from 'react';
import PropTypes from "prop-types";

export class TodoItem extends Component {

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/> {" "}
                    {this.props.todo.title} {""}
                    <button onClick={this.props.deleteTodo.bind(this,this.props.todo.id)} style={btnStyle}>Delete</button>
                </p> 
            </div>
        )
    }
    
    getStyle = () =>{
        return {
            backgroundColor : "#f4f4f4",
            padding : "10px",
            borderBotton : "1px #ccc dotted",
            textDecoration : this.props.todo.isCompleted ? "line-through" : "none" 
        }
    }

}
TodoItem.propType = {
    todo : PropTypes.object.isRequired
}
const btnStyle = {
    background : "#ff0000" ,
    color : "#fff",
    border : "none" ,
    padding : "5px 10px",
    borderRadius : "50%",
    curson : "pointer",
    float : "right"

}

export default TodoItem
