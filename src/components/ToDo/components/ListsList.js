import React, {Component} from 'react';
import {getLists, getNeeds} from '../../../actions/lists';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';

import ModalNewList from './ModalNewList';

class ListsList extends Component {

  constructor() {
    super();
    this.state = {
      modal: false,
      active: 0
    }

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
                onClick={this.onClick.bind(this, index)}
                className="ellist"
                key={index}>
                <td>{index + 1}</td>
                <td>{list.name}</td>
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
  state => ({lists: state.adminPanel.lists}), 
  dispatch => ({
    getLists: dispatch(getLists()),
    getNeeds: (id) => dispatch(getNeeds(id))
}))(ListsList)