import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteEvent} from '../../../../actions/events';

class EventData extends Component {
    constructor(props) {
      super(props);
    }

    deleteEvent(id, index) {
    this.props.deleteEvent(id, index);

            setTimeout(() => {          
              this.props.update({
                    data:this.props.events,
                })}, 200);
  }

    render() {
      const event = this.props.event;
      const index = this.props.index;

      if(event.start === event.end) {
          return(
              <tr>
                <td colSpan={2}>{event.start}</td>
                {/*<td>{event.end}</td>*/}
                <td>{event.title}</td>
                <td>{event.desc}</td>
                <td onClick={this.deleteEvent.bind(this, event._id, index)}>
                  <span className="del-btn"></span>
                </td>
            </tr>
          )
      }
      return (
          <tr>
            <td>{event.start}</td>
            <td>{event.end}</td>
            <td>{event.title}</td>
            <td>{event.desc}</td>
            <td onClick={this.deleteEvent.bind(this, event._id, index)}>
              <span className="del-btn"></span>
            </td>
          </tr>
        )
    }

}

export default connect(
  state => ({
      events: state.eventsPanel.events,
  }),
  dispatch => ({
    deleteEvent: (id, activeNum) => dispatch(deleteEvent(id, activeNum))
})
)(EventData)



