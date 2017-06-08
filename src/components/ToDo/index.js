import React, { Component } from 'react';
// import Footer from './components/Footer';
// import AddTodo from '../../containers/AddTodo';
// import VisibleTodoList from '../../containers/VisibleToDoList';
import NeedsList from './components/NeedsList';
import FilterLinks from './components/FilterLinks';
import ListsList from './components/ListsList';
import {Grid, Row, Col} from 'react-flexbox-grid';

class ToDoApp extends Component {

  constructor() {
    super();
  }

  render() {

    return (
      <Grid fluid>
        <Row >
          <Col xs={12}>
            <Row center="xs" className="to-do-lists">
                <ListsList/>
                <FilterLinks />
            </Row>
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default ToDoApp