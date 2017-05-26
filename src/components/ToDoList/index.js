import React from 'react';
import CreateToDo from './components/Create-todo';
import ToDosList from './components/Todos-list';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-flexbox-grid';

// const todos = [
//   {
//     task: 'make React tutorial',
//     isCompleted: false
//   },
//   {
//     task: 'eat dinner',
//     isCompleted: true
//   }
// ];

let todos = JSON.parse(localStorage.getItem("todooo"));

if(!todos) {
  todos = [];
}

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <Grid fluid>
                        <Row >
                            <Col xs={12}>
                                    <Row center="xs">
                                    <Col xs={10}>
                                      <div>
                                        <h1>React ToDos App</h1>
                                        <CreateToDo
                                          todos={this.state.todos}
                                          createTask={this.createTask.bind(this)}
                                        />
                                        <ToDosList
                                          todos={this.state.todos}
                                          toggleTask={this.toggleTask.bind(this)}
                                          saveTask={this.saveTask.bind(this)}
                                          deleteTask={this.deleteTask.bind(this)}
                                        />
                                      </div>
                                        </Col>
                                        </Row>
                            </Col>
                        </Row>
                </Grid>

    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos: this.state.todos});
    ///
        let sobj = JSON.stringify(this.state.todos);
        localStorage.setItem('todooo', sobj);
    ///
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos});
    ///
        let sobj = JSON.stringify(this.state.todos);
        localStorage.setItem('todooo', sobj);
    ///
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({todos: this.state.todos});
    ///
        let sobj = JSON.stringify(this.state.todos);
        localStorage.setItem('todooo', sobj);
    ///
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({todos: this.state.todos});
    ///
        let sobj = JSON.stringify(this.state.todos);
        localStorage.setItem('todooo', sobj);
    ///
  }

}
