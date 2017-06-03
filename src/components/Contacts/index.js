import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import {Grid, Row, Col} from 'react-flexbox-grid';

class ContactsApp extends Component {

  constructor() {
    super();
  }

  render() {

    return (
      <Grid fluid>
        <Row >
          <Col xs={12}>
            <Row center="xs">
              <Col lg={6}>
                <ContactsList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default ContactsApp