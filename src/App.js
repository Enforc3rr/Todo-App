import React ,{ Component } from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import './App.css';
import Todos from "./Components/Todos";
import Header from "./Components/Layout/Header";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import Axios from "axios";

class App extends Component {
  state ={
    todos : [ ]
  }
  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res => this.setState({todos : res.data}));
  }
  markComplete =(id)=>{
    this.setState({
      todos : this.state.todos.map(
        todo => {
          if(todo.id === id){
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }
      )
    })
}
deleteTodo = (id) =>{
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => 
  this.setState({
    todos : [...this.state.todos.filter(
      todo => todo.id !== id 
    )]
  }));
}
addTodo = (title)=>{
  Axios.post("https://jsonplaceholder.typicode.com/todos" , {
    title : title ,
    isCompleted : false 
  }
  )
  .then(res =>this.setState({todos : [...this.state.todos , res.data]}));
}


  render(){
    return (
      <Router>
        <div className="App">
          <div className="Container">
            <Header/>
            <Route exact path="/" render={props =>(
              <React.Fragment>
                 <AddTodo addTodo={this.addTodo} />
                 <Todos todo = {this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/> 
              </React.Fragment>
            )}/>
            <Route
            path="/about"
            component={About}
            />
         </div>
       </div>
      </Router>
    );
  }
}

export default App;
