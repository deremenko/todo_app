import './AddArray.css';
import React from 'react';

class AddArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({newTodo: event.target.value});  
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.newTodo) {
      return;
    }
    const newTodo = {
      text: this.state.newTodo,
      completed: false
    };
    this.setState(state => ({
      todos: [...state.todos, newTodo],
      newTodo: ''
    }));
  }
  
  render() {
    return (
      <div className='task-form'>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.newTodo}
            onChange={this.handleChange} 
          />
          <button type="submit">Add Todo</button>
        </form>
        {this.state.todos.map(todo => 
          <div key={todo.text} className='task-form__to-do-item'>
            {todo.text}
          </div>    
        )}
      </div>
    );
  }
}

export default AddArray;