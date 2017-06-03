import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import AddUser from './components/AddUser';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getContacts } from '../../actions/contacts';
import {connect} from 'react-redux';

class Contacts extends Component {
  constructor(props) {
    super(props);
    //Устанавливаем состояние
    this.state = {
      data: null,
      active: 0,
      term: ''
    };
    // сразу загружаем данные
    setTimeout(()=>this.setState({data: this.props.data}), 300);

    this.updateData = this.updateData.bind(this);

  }
  
  updateData(config) {
    this.setState(config);
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
                                            <div className="col-sm-12">
                                              <SearchBar
                                                term={this.state.term}
                                                data={this.state.data}
                                                update={this.updateData.bind(this)}
                                              />
                                            </div>
                                          </div>

                                          <div className="row">
                                            <div className="col-sm-12">
                                              <Toolbar
                                                initialData={initialData}
                                                data={this.state.data}
                                                update={this.updateData.bind(this)}
                                              />
                                            </div>
                                          </div>

                                          <div className="row">
                                            <div className="col-md-3 col-lg-3"> 
                                              <AddUser update={this.updateData.bind(this)}/>
                                            </div>
                                            <div className="col-sm-8 col-md-6 col-lg-6">
                                              <UserList data={this.state.data} update={this.updateData.bind(this)} />
                                            </div>
                                            <div className="col-sm-4 col-md-3 col-lg-3">
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