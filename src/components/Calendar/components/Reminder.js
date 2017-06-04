import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {getEvents} from '../../../actions/events';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Grid, Row, Col } from 'react-flexbox-grid';

class Reminder extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {

    }}

    render() {

      let those, delta, word = ["осталось", "дня"], evEnd;
      return (
            <div className="rem">
                                            {this.props.events.map(function (element, i) {
                                                those = new Date(element.start);
                                                if(those > Date.now()){
                                                    delta = those - Date.now();
                                                    delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                    delta++;
                                                    {/*console.log('Delta: ', delta, 'word:', word, 'title: ', element.title);*/}
                                                        if(delta>0 && delta<2) {
                                                            return(<p key={i}>Событие "{element.title}" уже завтра</p>)
                                                        } else if(delta>1 && delta<5){
                                                            {/*word = ["осталось", "дня"];*/}
                                                            return(<p key={i}>До события "{element.title}" {word[0]} {delta++} {word[1]}</p>)
                                                        } else if(delta<8) {
                                                            word[1] = ["дней"];
                                                            return(<p key={i}>До события "{element.title}" {word[0]} {delta++} {word[1]}</p>)
                                                            }
                                                    
                                                 } else if(those <= Date.now()) {
                                                     those = new Date(element.end);
                                                     delta = Date.now() - those;
                                                     delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                     console.log('delta = ', delta);
                                                     if((Date.now() <= those) || delta <= 1 ) {
                                                         return(<p key={i}>{element.title} уже Сегодня</p>)
                                                     }
                                                 }

                                                
                                            })
                                            }
                                        </div>

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
)(Reminder)