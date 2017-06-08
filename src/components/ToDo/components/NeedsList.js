import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import AddToDo from './AddToDo';
import {toggleTodo, deleteTodo, TOGGLE_TODO, DELETE_TODO} from '../../../actions/lists';
import PropTypes from 'prop-types';
// import FilterLinks from './FilterLinks';

class NeedsList extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      // needs: this.props.needs,
      // active: this.props.active
    }
  }
  onClick(index) {
    let todo = {
                id: this.props.active,
                task: this.props.needs[index].task,
                isCompleted: !this.props.needs[index].isCompleted
            }

    this.props.toggleTodo(todo).then((response) =>{
                const store = this.context.store;
                store.dispatch({type: TOGGLE_TODO, payload: response.data.value.needs}); 
            }).catch((err) => {
                console.log(err);
            })
  }

  deleteTodo(task) {
        let todo = {
             id: this.props.active,
             task: task,
        }

        this.props.deleteTodo(todo).then((response) =>{
                const store = this.context.store;
                console.log("DELETE RESPONSE: ", response);
                store.dispatch({type: DELETE_TODO, payload: response.data.value.needs}); 
            }).catch((err) => {
                console.log(err);
            })
  }

  render() {
    let filter = this.props.filter;

    switch (filter) {
      case ("SHOW_ALL"):
          return (
              <table className="table table-bordered table-hover">
                <tbody>
                    {this.props.needs.map((need, index) => 
                    <tr  key={index} >
                        <td onClick={this.onClick.bind(this, index)}>{index + 1}</td>
                        <td onClick={this.onClick.bind(this, index)} style={{
                                    textDecoration: need.isCompleted ? 'line-through' : 'none'
                                  }}>{need.task}</td>
                        <td className="bin" onClick={this.deleteTodo.bind(this, need.task)}>X</td>
                      </tr>)}
                </tbody>
              </table>
          )
      case ("SHOW_COMPLETED"):
      return (
              <table className="table table-bordered table-hover">
                <tbody>
                {/*<ul>*/}
                    {/*<li style={{
                          display: need.isCompleted ? 'block' : 'none'
                        }}
                        onClick={this.onClick.bind(this, index)}
                        className="ellist" key={index} >*/}
                    {this.props.needs.map((need, index) => 
                      <tr style={{
                          display: need.isCompleted ? 'table-row' : 'none'
                        }} key={index} >
                        <td onClick={this.onClick.bind(this, index)}>{index + 1}</td>
                        <td onClick={this.onClick.bind(this, index)} 
                            style={{
                              textDecoration: need.isCompleted ? 'line-through' : 'none'
                            }}>{need.task}</td>
                        <td className="bin" onClick={this.deleteTodo.bind(this, need.task)}>X</td>

                      </tr>)}
                {/*</ul>*/}
                </tbody>
              </table>
          )
      case ("SHOW_ACTIVE"):
          return (
              <table className="table table-bordered table-hover">
                <tbody>
                    {this.props.needs.map((need, index) => 
                    <tr style={{
                          display: need.isCompleted ? 'none' : 'table-row'
                        }}
                        className="ellist" key={index} >
                        <td onClick={this.onClick.bind(this, index)}>{index + 1}</td>
                        <td onClick={this.onClick.bind(this, index)} style={{
                                    textDecoration: need.isCompleted ? 'line-through' : 'none'
                                  }}>{need.task}</td>

                        <td className="bin" onClick={this.deleteTodo.bind(this, need.task)}>X</td>
                      </tr>)}
                </tbody>
              </table>
          )
          default:
            return(<div></div>)


    }



    /*return (
      <div>
        <AddToDo />
        <FilterLinks />

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
        <ul>
            {this.props.needs.map((need, index) => 
            <li onClick={this.onClick.bind(this, index)} className="ellist" key={index} >
                <span>{index + 1}</span>
                <span style={{
                            textDecoration: need.isCompleted ? 'line-through' : 'none'
                          }}>{need.task}</span>
              </li>)}
        </ul>
      </div>
    )*/
  }
}

NeedsList.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
      needs: state.adminPanel.needs,
      active: state.adminPanel.active
    }),
//   dispatch => ({
//     deleteTodo: (todo) => dispatch(deleteTodo(todo))
// }),
{ toggleTodo, deleteTodo }
)(NeedsList)