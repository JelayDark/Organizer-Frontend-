import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {getEvents} from '../../actions/events';
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
                <ul className="remind-right" id="box5">
                    {this.props.events.map(function (element, i) {
                                                those = new Date(element.start);
                                                if(those > Date.now()){
                                                    delta = those - Date.now();
                                                    delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                    {/*delta++;*/}
                                                    console.log('Delta >: ', delta, 'word:', word, 'title: ', element.title);
                                                        if(delta>=0 && delta<2) {
                                                            return(<li  key={i}>Событие "{element.title}" уже завтра</li>)
                                                        } else if(delta>=2 && delta<5){
                                                            {/*word = ["осталось", "дня"];*/}
                                                            return(<li  key={i}>До события "{element.title}" {word[0]} {delta++} {word[1]}</li>)
                                                        } else if(delta<8) {
                                                            word[1] = ["дней"];
                                                            return(<li  key={i}>До события "{element.title}" {word[0]} {delta++} {word[1]}</li>)
                                                            };
                                                    
                                                 };
                                                 })
                                                 }

                    </ul>
                    <ul className="remind-left" id="box6">
                        {this.props.events.map(function (element, i) {
                                                those = new Date(element.start);
                                                if(those <= Date.now()) {
                                                     those = new Date(element.end);
                                                     delta = Date.now() - those;
                                                     delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                    console.log('Delta <: ', delta, 'word:', word, 'title: ', element.title);
                                                     if((Date.now() <= those) || delta < 1 ) {
                                                         return(<li key={i}>{element.title} уже Сегодня</li>)
                                                     }
                                                 }

                                                
                                            })
                                            }
                                            {/*<li className="reminder-type">TODAY</li>*/}
                        </ul>
                                            {/*{this.props.events.map(function (element, i) {
                                                those = new Date(element.start);
                                                if(those > Date.now()){
                                                    delta = those - Date.now();
                                                    delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                    console.log('Delta >: ', delta, 'word:', word, 'title: ', element.title);
                                                        if(delta>=0 && delta<2) {
                                                            return(<p className="remind-right" key={i}>Событие "{element.title}" уже завтра</p>)
                                                        } else if(delta>=2 && delta<5){
                                                            return(<p className="remind-right" key={i}>До события "{element.title}" {word[0]} {delta++} {word[1]}</p>)
                                                        } else if(delta<8) {
                                                            word[1] = ["дней"];
                                                            return(<p className="remind-right" key={i}>До события "{element.title}" {word[0]} {delta++} {word[1]}</p>)
                                                            }
                                                    
                                                 } else if(those <= Date.now()) {
                                                     those = new Date(element.end);
                                                     delta = Date.now() - those;
                                                     delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                    console.log('Delta <: ', delta, 'word:', word, 'title: ', element.title);
                                                     if((Date.now() <= those) || delta <= 1 ) {
                                                         return(<p className="remind-left"key={i}>{element.title} уже Сегодня</p>)
                                                     }
                                                 }

                                                
                                            })
                                            }*/}
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