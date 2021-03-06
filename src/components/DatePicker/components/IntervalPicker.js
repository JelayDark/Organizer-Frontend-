import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class IntervalPicker extends Component {

constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
}

  handleChangeStart (date) {
    const evDate = date.format("YYYY/MM/DD");
    this.setState({startDate: date});
    if(date > this.state.endDate){
      this.setState({endDate: date});
    }
    this.props.update({start: evDate});
  }

  handleChangeEnd (date) {
    const evDate = date.format("YYYY/MM/DD");
    this.setState({endDate: date});
    this.props.update({end: evDate});
  }


    render() {
      return (
                <div className="picker-pick">
                    <p>Select dates by clicking on a fields:</p>
                    <DatePicker
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                    />

                    <DatePicker
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                        minDate={this.state.startDate}
                    />
                </div>
      );
    }
  }

  export default IntervalPicker;