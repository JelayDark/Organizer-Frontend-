import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../temp/events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Grid, Row, Col } from 'react-flexbox-grid';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    // constructor(props, context) {
    //   super(props, context);
    // }

    render() {
      return (
            <Grid fluid>
                        <Row >
                            <Col xs={12}>
                                    <Row center="xs">
                                    <Col xs={10}>
                                        <div className='container-calendar'>
                                            <BigCalendar className='calendar'
                                                selectable
                                                scrollToTime={new Date(1970, 1, 1, 6)}
                                                defaultDate={new Date(2015, 3, 12)}
                                                events={events}
                                                views={['month', 'week']}
                                                onSelectEvent={event => alert(event.title)}
                                                onSelectSlot={(slotInfo) => alert(
                                                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                                                    `\nend: ${slotInfo.end.toLocaleString()}`
                                                )}
                                                />
                                        </div>
                                        </Col>
                                </Row>
                            </Col>
                        </Row>
                </Grid>

      );
    }
  }

  export default Calendar;