import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import AddUser from './components/AddUser';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getContacts } from '../../actions/contacts';
import {connect} from 'react-redux';
import Modal from './components/Modal';

class Contacts extends Component {
  constructor(props) {
    super(props);
    //Устанавливаем состояние
    this.state = {
      data: null,
      active: 0,
      term: '',
      modal: false
    };
    // сразу загружаем данные
    setTimeout(()=>this.setState({data: this.props.data}), 300);

    this.updateData = this.updateData.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }
  
  updateData(config) {
    this.setState(config);
  }

  add() {
    this.setState({modal:true});
  }

  closeModal() {
    this.setState({modal: false});
  }

  // deleteUser(id, index) {
  //   this.props.deleteUser(id, index);
  //   setTimeout(() => this.updateData({data: this.props.data}), 150);
    
  // }


  render() {

    const initialData = this.props.data;
    return (
      <Grid fluid>
                        <Row >
                            <Col xs={12}>
                                    <Row center="xs">
                                    <Col xs={10}>
                          
                                        <div className="app container-fluid">
                                          <div className="row">
                                            <div className="col-sm-7">
                                              <SearchBar
                                                term={this.state.term}
                                                data={this.state.data}
                                                update={this.updateData.bind(this)}
                                                initialData={initialData}
                                              />
                                            </div>
                                          </div>


                                          <div className="row">
                                            <div className="col-sm-8 col-md-6 col-lg-7 con-list">
                                            <div className="row">
                                              <div className="col-sm-12">
                                                <Toolbar
                                                  initialData={initialData}
                                                  data={this.state.data}
                                                  update={this.updateData.bind(this)}
                                                />
                                              </div>
                                            </div>
                                            <UserList 
                                                      data={this.state.data} 
                                                      update={this.updateData.bind(this)} 
                                                      active={this.state.active}
                                                    />
                                            </div>
                                            <Modal visibility={this.state.modal} closeModal={this.closeModal} update={this.updateData.bind(this)}/>
                                            <div className="col-sm-4 col-md-3 col-lg-4 con-act">
                                              <ActiveUser 
                                                        data={this.state.data} 
                                                        active={this.state.active} 
                                                        update={this.updateData.bind(this)} 
                                                      />
                                            </div>
                                          </div>
                                          
                                        </div>
                                  </Col>
                        </Row>
                    </Col>
                </Row>
        </Grid>

    );
  }
}

export default connect(
  state => ({
    data: state.contactsPanel.users,
    // active: state.contactsPanel.active
  }), 
  dispatch => ({
      getContacts: dispatch(getContacts()),
}))(Contacts)