import React from 'react';
import Footer from './Footer';
import AddTodo from '../../../containers/AddTodo';
import VisibleTodoList from '../../../containers/VisibleToDoList';

class ToDoApp extends React.Component {

    render() {
      return(
        <div>
          <div className="col-lg-6">
            <AddTodo />
            <VisibleTodoList />
            <Footer />
            <listsList />  
          </div>
          <table className="col-lg-6">
            <tbody>
              {this.props.lists.map((list, index) => 
                  <tr className="ellist" key={index}>
                      <td>{index + 1}</td>
                      <td>{list.name}</td>
                  </tr>
              )}
              </tbody>
          </table>
          
        </div>
      )
    }
}

export default connect(
   state => ({
      lists: state.adminPanel.lists
  }),
  dispatch => ({
      getLists: dispatch(getLists())
  }) 
)(ToDoApp)