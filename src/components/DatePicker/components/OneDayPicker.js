import React, {Component} from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class OneDayPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      isOpen: false,
      errors: null
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.toggleCalendar = this
      .toggleCalendar
      .bind(this);
  }

  handleChange(date) {
    const evDate = date.format("YYYY/MM/DD");
    this.setState({startDate: date});
    this.toggleCalendar();
    this
      .props
      .update({start: evDate, end: evDate});
  }

  // eventSubmit(e){   e.PreventDefault(); }

  toggleCalendar(e) {
    e && e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (

      <div className="picker-pick">
        <p>Enter day by clicking on a button below:</p>
        <button
          className="example-custom-input"
          className="btn btn-primary"
          onClick={this.toggleCalendar}>
          {this.state.startDate.format("DD-MM-YYYY")}
        </button>
        {this.state.isOpen && (<DatePicker
                                  selected={this.state.startDate}
                                  onChange={this.handleChange}
                                  withPortal
                                  inline
                                />)
        }
      </div>
    );
  }
}

export default OneDayPicker;