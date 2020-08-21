
import React from 'react';
import TodoContext from '../contexts/TodoContext'
// /src/contexts/TodoContext.js

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    // TODO: Create a task based on the `inputValue`
   this.props.createTask(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

const TodoFormWithContext = () => (
  <TodoContext.Consumer>
    {value => <TodoForm createTask={value.createTask} />}
  </TodoContext.Consumer>

  // TODO: Use a Consumer component to wrap the TodoForm
  // TODO: Pass the `createTask` method stored in the context value as a prop to TodoForm
);

export default TodoFormWithContext;
