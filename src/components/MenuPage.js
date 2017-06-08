import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import { Loc } from 'redux-react-i18n';
import classNames from 'classnames';
import Page from './Page';
import FigureMenu from './FigureMenu';

class MenuPage extends Component {

    constructor() {
        super();
        this.state = {
            show: 0
        }
    }

    setPage(page) {
        this.setState({show: page});
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
                    <Row center="xs" className="navigation-container">
                            <Col xs={12} sm={10} md={10} lg={6} className="navigation">
                                <Row>
                                    <ul>
                                        <li className={page1} onClick={this.setPage.bind(this, 0)}>
                                            <span>Главная</span>
                                        </li>
                                        <li className={page2} onClick={this.setPage.bind(this, 1)}>
                                            <span>События</span>
                                        </li>
                                        <li className={page3} onClick={this.setPage.bind(this, 2)}>
                                            <span>Список дел</span>
                                        </li>
                                        <li className={page4} onClick={this.setPage.bind(this, 3)}>
                                            <span>Контакты</span>
                                        </li>
                                    </ul>  
                                    {/*<FigureMenu />  */}
                                </Row>
                            </Col>
                    </Row>
                </Col>
            </Row>
        <div className="main">
            <Page page={this.state.show} />
        </div>
        </Grid>
        )
    }
}

export default MenuPage;