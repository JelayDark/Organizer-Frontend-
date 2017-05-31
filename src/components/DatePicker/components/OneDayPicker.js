import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class OneDayPicker extends Component {

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
      return (

                                        <div>
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
                                                </div>
      );
    }
  }

  export default OneDayPicker;