import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TypePicker from './components/TypePicker';
import {connect} from 'react-redux';
import { addEvent } from '../../actions/events';
import PropTypes from 'prop-types';
import moment from 'moment';
import AllEvents from './components/AllEvents';

import 'react-datepicker/dist/react-datepicker.css';

class DatePicker extends Component {

    constructor() {
        super();
        this.state = {
            show: 0,
            start: moment().format('YYYY/MM/DD'),
            end: moment().format('YYYY/MM/DD'),
            title: '',
            desc: ''
        }

        this.eventSubmit = this.eventSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isValid = this.isValid.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    isValid() {
        const { title } = this.state;
        return title.length !== 0;
    }

    eventSubmit(e) {
        e.preventDefault();

        const input = document.querySelector('input[type="text"]');
        const textarea = document.querySelector('textarea');
        textarea.value = '';
        input.value='';

        if(this.isValid()) {
            let event = {
                title: this.state.title,
                start: this.state.start,
                end: this.state.end,
                desc: this.state.desc,
            }

            this.props.addEvent(event);
        } else {
            return (<h2>Укажите Название События</h2>);
        }

        this.setState({title: '', desc: ''});
    }

    updateDate(config) {
        this.setState(config);
    }

    setType(type) {
        this.setState({show: type});
    }

    render() {
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
                                                <TypePicker type={this.state.show} update={this.updateDate.bind(this)}/>
                                                <p><label title="Название события">Название события [?]:<input type="text" placeholder="Уникальное событие" name="title" onChange={this.onChange}/></label></p>
                                                <p><label title="Описание события">Событие [?]:<textarea rows="10" cols="45" name="desc" onChange={this.onChange}></textarea></label></p>
                                                <div><button type="submit">Добавить событие</button></div>
                                                <div className="errors">
                                                    {errors && <span>User already exists!</span>} 
                                                </div>
                                            </form>  
                                        </div>

                                        <div>
                                            <AllEvents />
                                        </div>
                                        </Col>

                                </Row>
                            </Col>
                        </Row>
                </Grid>

      );

    }
}

// AddUser.contextTypes = {
//   store: PropTypes.object.isRequired
// }

export default connect(
  state => ({
      events: state.eventsPanel.events,
  }),
  dispatch => ({
    addEvent: (event) => dispatch(addEvent(event))
})
)(DatePicker)