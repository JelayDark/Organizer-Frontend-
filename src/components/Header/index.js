import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Reminder from './Reminder';
import SocialNetwork from './SocialNetwork';

class Header extends Component {
  render() {
      {/*<Grid fluid>
                <Row >
                    <Col xs={12}>
                        <header>
                            <Row center="xs">
                                        <Reminder />
                                <Col xs={12} sm={10} md={10} lg={6} className="header-container">
                                    <Row>
                                        <Col xs className="left-side">
                                            <div className="logotype">
                                            </div>
                                        </Col>
                                        <Col xs className="right-side">
                                            <div className="right-side-container">
                                                <h1>Eugeniy Tuliakov</h1>
                                                <div>
                                                    <SocialNetwork />
                                                </div>
                                                <p>в сети с 02.05.2017</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </header>
                    </Col>
                </Row>
            </Grid>*/}
    return(
      <Grid fluid>
                <Row >
                    <Col xs={12}>
                        <header>
                            <Row center="xs" className="header-wrapper">
                                
                            </Row>
                        </header>
                    </Col>
                </Row>
            </Grid>




    )
  }
}

export default Header;

