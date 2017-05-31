import React, { Component } from 'react';
import load from './utils/load';
// import Button from './components/Button';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import AddUser from './components/AddUser';
import { Grid, Row, Col } from 'react-flexbox-grid';



// render(<App data='data.json' />, document.getElementById('app'));
export default class Contacts extends Component {
  constructor(props) {
    super(props);
    //Устанавливаем состояние
    this.state = {
      // modal: false,
      data: null,
      active: 0,
      term: ''
    };
    // сразу загружаем данные
    this.loadData();
  }
  

  loadData() {
    //Загружаем данные из файла, переданного в качестве параметра
    load(this.props.data).then(users => {
      //После загрузки обновляем состояние
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
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
                                                initialData={this.initialData}
                                                data={this.state.data}
                                                update={this.updateData.bind(this)}
                                              />
                                            </div>
                                          </div>

                                          <div className="row">
                                            <div className="col-md-3 col-lg-3"> 
                                              <AddUser/>
                                            </div>
                                            <div className="col-sm-8 col-md-6 col-lg-6">
                                              <UserList data={this.state.data} update={this.updateData.bind(this)} />
                                            </div>
                                            <div className="col-sm-4 col-md-3 col-lg-3">
                                              <ActiveUser data={this.state.data} active={this.state.active} />
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
