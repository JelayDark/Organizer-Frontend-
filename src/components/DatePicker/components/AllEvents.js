import React, { Component } from 'react';
// import UserList from './components/UserList';
// import ActiveUser from './components/ActiveUser';
// import SearchBar from './components/SearchBar';
// import Toolbar from './components/Toolbar';
// import AddUser from './components/AddUser';
import EventList from './modal-components/EventList';
import SearchBar from './modal-components/SearchBar';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import { getContacts } from '../../actions/contacts';
import {connect} from 'react-redux';

class AllEvents extends Component {
  constructor(props) {
    super(props);
    //Устанавливаем состояние
    this.state = {
      data: null,
      term: ''
    };
    // сразу загружаем данные
    setTimeout(()=>this.setState({data: this.props.data}), 300);

    this.updateData = this.updateData.bind(this);

  }
  
  updateData(config) {
    this.setState(config);
  }

  render() {

    const initialData = this.props.data;
    return (
      <Grid fluid>
                                    <Row center="xs">
                                    <Col xs={12}>
                          
                                        <div className="app container-fluid">
                                              <SearchBar
                                                term={this.state.term}
                                                data={this.state.data}
                                                update={this.updateData.bind(this)}
                                                initialData={initialData}
                                              />

                                              <EventList 
                                                       data={this.state.data} 
                                                       update={this.updateData.bind(this)} 
                                                      />
                                          
                                        </div>
                                  </Col>
                        </Row>
        </Grid>

    );
  }
}

// export default connect(
//   state => ({
//     data: state.eventsPanel.events,
//   }), 

// )(AllEvents)

export default AllEvents;