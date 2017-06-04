import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
// import events from '../temp/events';
import moment from 'moment';
import {connect} from 'react-redux';
import {getEvents} from '../../actions/events';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ModalView from './components/ModalView';
import Reminder from './components/Reminder';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
            modal: false,
            event: '',
            editing: false
      }

      this.closeModal = this.closeModal.bind(this);
      this.showEvent = this.showEvent.bind(this);

    }

    closeModal() {
        this.setState({modal: false, editing: false});
    }

    updateData(config) {
        this.setState(config)
    }

    showEvent(ev) {
        this.setState({editing: false});
        console.log("H!, ev: ", ev);
        this.setState({event: ev});
        setTimeout(() => {this.setState({modal: true})}, 150);
    }

    render() {
      return (
            <Grid fluid>
                        <Row >
                            <Col xs={12}>
                                    <Row center="xs">
                                    <Col xs={10}>
                                        <div className='container-calendar'>
                                            <Reminder />
                                            <BigCalendar className='calendar'
                                                popup
                                                scrollToTime={new Date(1970, 1, 1, 6)}
                                                events={this.props.events}
                                                onSelectEvent={this.showEvent}
                                                views={['month','agenda']}
                                                />
                                                {/*onSelectSlot={(slotInfo) => alert(
                                                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                                                    `\nend: ${slotInfo.end.toLocaleString()}`
                                                )}*/}
                                                {/*selectable*/}
                                                {/*onSelectEvent={event => alert(event.title)}*/}
                                                {/*defaultDate={new Date(2015, 3, 12)}*/}
                                        </div>
                                        <ModalView 
                                                visibility={this.state.modal} 
                                                closeModal={this.closeModal} 
                                                event={this.state.event} 
                                                update={this.updateData.bind(this)}
                                                editing={this.state.editing}
                                            />
                                        </Col>
                                </Row>
                            </Col>
                        </Row>
                </Grid>

      );
    }
  }

//   export default Calendar;
  export default connect(
  state => ({
      events: state.eventsPanel.events,
  }),
  dispatch => ({
    getEvents: dispatch(getEvents()),
})
)(Calendar)