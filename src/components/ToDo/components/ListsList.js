import React, {Component} from 'react';
import {getLists, getNeeds, deleteList} from '../../../actions/lists';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';

import ModalNewList from './ModalNewList';

class ListsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      // active: this.props.active,
    }
    setTimeout(() => this.props.getNeeds(this.props.active._id), 300);
    // setTimeout(() => console.log('ONLOAD active:', this.props.active._id), 100);

    this.addList = this.addList.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addList() {
    this.setState({modal: true});
  }

  closeModal() {
    this.setState({modal: false});
  }

  onClick(index) {
    this.setState({active: this.props.lists[index]._id});
    const activeId = this.props.lists[index]._id;
    this.props.getNeeds(activeId);
  }

  deleteList(id, index) {
    this.props.deleteList(id, index);
  }

  render() {
    return (
      <Col lg={6}>
        <table>
          <thead>
            <tr>
              <th onClick={this.addList}>Add List</th>
            </tr>
          </thead>
          <tbody>
            {this.props.lists.map((list, index) => 
            <tr
                className="ellist"
                key={index}>
                <td onClick={this.onClick.bind(this, index)}>{index + 1}</td>
                <td onClick={this.onClick.bind(this, index)}>{list.name}</td>
                <td onClick={this.deleteList.bind(this, list._id, index)}>X</td>
              </tr>
              )}
          </tbody>
        </table>
        <ModalNewList visibility={this.state.modal} closeModal={this.closeModal}/>
      </Col>
    )
  }

}

export default connect(
  state => ({
    lists: state.adminPanel.lists,
    active: state.adminPanel.active
  }), 
  dispatch => ({
    getLists: dispatch(getLists()),
    getNeeds: (id) => dispatch(getNeeds(id)),
    deleteList: (id, index) => dispatch(deleteList(id, index))
}))(ListsList)