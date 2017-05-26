import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import TypePicker from './components/TypePicker';

import 'react-datepicker/dist/react-datepicker.css';

export default class DatePage extends Component {

    constructor() {
        super();
        this.state = {
            show: 0
        }
    }

    setType(type) {
        this.setState({show: type});
    }

    render() {

        // let type1 = classNames({
        //     'active': this.state.show === 0
        // })
        
        // let type2 = classNames({
        //     'active': this.state.show === 1
        // });

        let { errors } = this.state;

      return (
            <Grid fluid>
                        <Row >
                            <Col xs={12}>
                                    <Row center="xs">
                                    <Col xs={10}>
                                        <div>
                                            <form onSubmit={this.eventSubmit}>
                                                <p>
                                                    <label>День<input type="radio" name="type_event" onClick={this.setType.bind(this, 0)} defaultChecked/></label>
                                                    <label>Промежуток времени<input type="radio"  name="type_event" onClick={this.setType.bind(this, 1)}/></label>
                                                </p>
                                            <TypePicker type={this.state.show}/>
                                            <p><label title="Название должно быть строго уникальным">Название события [?]:<input type="text" placeholder="Уникальное событие" /></label></p>
                                            <p><label title="Описание события">Событие [?]:<textarea rows="10" cols="45" name="text"></textarea></label></p>
                                            <div><button type="submit">Добавить событие</button></div>
                                                <div className="errors">
                                                    {errors && <span>User already exists!</span>} 
                                                </div>
                                            </form>  
                                        </div>
                                        </Col>
                                </Row>
                            </Col>
                        </Row>
                </Grid>

      );

}
}