import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// import { Loc } from 'redux-react-i18n';
import classNames from 'classnames';
import Page from './Page';

class FigureMenu extends Component {

    constructor() {
        super();
        this.state = {
            show: 0
        }
    }

    setPage(page) {
        this.setState({show: page});
        let main = document.querySelector(".main");
        // main.classList.add('appearing');
        // setTimeout(() => main.classList.remove("appearing"), 2000);
    }

    render() {

        let page1 = classNames({
            'active': this.state.show === 0
        })

        let page2 = classNames({
            'active': this.state.show === 1
        });

        let page3 = classNames({
            'active': this.state.show === 2
        });

        let page4 = classNames({
            'active': this.state.show === 3
        });

        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            {/*<Col xs={12} sm={10} md={10} lg={6} className="navigation">*/}
                                {/*<Row>*/}
                                    <Col lg={2} className="clearfix menu">
                                        <div>
                                            <figure
                                                className={page1}
                                                onClick={this.setPage.bind(this, 0)}>
                                                <img src="../images/today.png" alt=""/>
                                                <dl>
                                                    <dt>Calendar</dt>
                                                    <dd>Shows your events in a calendar style</dd>
                                                </dl>
                                            </figure>
                                        </div>
                                        <div>
                                            <figure
                                                className={page3}
                                                onClick={this.setPage.bind(this, 2)}>
                                                <img src="../images/todo.png" alt=""/>
                                                <dl>
                                                    <dt>To-Do Lists</dt>
                                                    <dd>Here you can make and keep track of your to-do lists</dd>
                                                </dl>
                                            </figure>
                                        </div>
                                        <div>
                                            <figure
                                                className={page2}
                                                onClick={this.setPage.bind(this, 1)}>
                                                <img src="../images/datepicker.png" alt=""/>
                                                <dl>
                                                    <dt>DatePicker</dt>
                                                    <dd>In this menu point you can make events and add them to your main calendar</dd>
                                                </dl>
                                            </figure>
                                        </div>
                                        <div>
                                            <figure
                                                className={page4}
                                                onClick={this.setPage.bind(this, 3)}>
                                                <img src="../images/contacts.png" alt=""/>
                                                <dl>
                                                    <dt>Contacts</dt>
                                                    <dd>Your Contacts List. Always near to you</dd>
                                                </dl>
                                            </figure>
                                        </div>
                                    </Col>
                                {/*</Row>*/}
                            {/*</Col>*/}
                                    <Col lg={10} className="main">
                                        <Page page={this.state.show}/>
                                    </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default FigureMenu;