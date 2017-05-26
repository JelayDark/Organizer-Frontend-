import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class DatePage extends Component {

constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      isOpen: false,
      errors: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  handleChange (date) {
    this.setState({startDate: date})
    this.toggleCalendar()
  }

  eventSubmit(e){
    e.PreventDefault();
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
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
                                                    <label>День<input type="radio" name="type_event" defaultChecked /></label>
                                                    <label>Промежуток времени<input type="radio"  name="type_event"/></label>
                                                </p>
                                                <p>Выберите дату, нажав на кнопку:</p>
                                            <button
                                                className="example-custom-input"
                                                onClick={this.toggleCalendar}>
                                                {this.state.startDate.format("DD-MM-YYYY")}
                                            </button>
                                            {
                                                this.state.isOpen && (
                                                    <DatePicker
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChange}
                                                        withPortal
                                                        inline />
                                                )
                                            }
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

  export default DatePage;