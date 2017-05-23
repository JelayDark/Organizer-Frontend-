import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Loc } from 'redux-react-i18n';
import SocialNetwork from './SocialNetwork';
import Languages from './Languages';

class Header extends Component {
    render() {
        return (
            <Grid fluid>
                <Row >
                    <Col xs={12}>
                        <header>
                            <Row center="xs">
                                <Col xs={12} sm={10} md={10} lg={6} className="header-container">
                                    <Row>
                                        <Col xs className="left-side">
                                            <a href="#" alt="Marmelad"></a>
                                            <p><Loc locKey="main_header_logo"/></p>
                                        </Col>
                                        <Col xs className="right-side">
                                            <div className="right-side-container">
                                                <Languages />
                                                <p>+38 (099)-553-64-21</p>
                                                <SocialNetwork />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </header>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Header;

