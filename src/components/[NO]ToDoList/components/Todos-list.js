import _ from 'lodash';
import React from 'react';
import ToDosListHeader from './Todos-list-header';
import ToDosListItem from './Todos-list-item';

export default class ToDosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <ToDosListItem key={index} {...todo} {...props} />);
  }

  // {...todo} = task={todo.task} isCompleted={todo.isCompleted}


  render() {
    return (
      <table>
        <ToDosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>

      </table>
    );
  }
}
