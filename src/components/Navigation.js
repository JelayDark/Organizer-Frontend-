import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Loc } from 'redux-react-i18n';

const Navigation = () => {
    return(
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <Row center="xs" className="navigation-container">
                            <Col xs={12} sm={10} md={10} lg={6} className="navigation">
                                <Row>
                                    <ul>
                                        {/*<li><a href=""><Loc locKey="main_nav_main"/></a></li>
                                        <li><a href=""><Loc locKey="main_nav_timetable"/></a></li>
                                        <li><a href=""><Loc locKey="main_nav_film"/></a></li>
                                        <li><a href=""><Loc locKey="main_nav_guestbook"/></a></li>
                                        <li><a href=""><Loc locKey="main_nav_contacts"/></a></li>*/}
                                        <li>
                                            <a href="">Главная</a>
                                        </li>
                                        <li>
                                            <a href="">События</a>
                                        </li>
                                        <li>
                                            <a href="">Список дел</a>
                                        </li>
                                        <li>
                                            <a href="">Контакты</a>
                                        </li>
                                    </ul>    
                                </Row>
                            </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
}

export default Navigation;