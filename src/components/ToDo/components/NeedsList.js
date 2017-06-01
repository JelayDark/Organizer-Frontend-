import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AddToDo from './AddToDo';
import {toggleTodo} from '../../../actions/lists';

class NeedsList extends Component {

  constructor(props) {
    super(props);
    console.log("PROPS:", this.props);

    this.state = {
      // needs: this.props.needs,
      // active: this.props.active
    }

  }

  onClick(index) {
    let todo = {
                id: this.props.active,
                task: this.props.needs[index].task,
                isCompleted: this.props.needs[index].isCompleted
            }


    // this.setState({active: this.props.lists[index]._id});
    // const activeId = this.props.lists[index]._id;
    console.log("click:", this.props.needs[index]);
    this.props.toggleTodo(todo);
  }

  render() {
    return (
      <div>
        <AddToDo />

        <table>
          <tbody>
            {this.props.needs.map((need, index) => 
            <tr onClick={this.onClick.bind(this, index)} className="ellist" key={index} >
                <td>{index + 1}</td>
                <td style={{
                            textDecoration: need.isCompleted ? 'line-through' : 'none'
                          }}>{need.task}</td>
              </tr>)}
          </tbody>
        </table>
        {/*<ul>
            {this.props.needs.map((need, index) => 
            <li onClick={this.onClick.bind(this, index)} className="ellist" key={index} >
                <span>{index + 1}</span>
                <span style={{
                            textDecoration: need.isCompleted ? 'line-through' : 'none'
                          }}>{need.task}</span>
              </li>)}
        </ul>*/}
      </div>
    )
  }
}

export default connect(
  state => ({
      needs: state.adminPanel.needs,
      active: state.adminPanel.active
    }),
  dispatch => ({
    toggleTodo: (todo) => dispatch(toggleTodo(todo))
})
)(NeedsList)