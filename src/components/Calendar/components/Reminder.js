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
            // modal: false,
            // event: ''
      }

    //   this.closeModal = this.closeModal.bind(this);
    //   this.showEvent = this.showEvent.bind(this);
      let now = new Date();
      console.log('ourDay: ', now);
      let hmm = moment();
      console.log('hmm: ', hmm);
      let hmmmm = new Date("2015/8/2");
      console.log('hmmmm: ', hmmmm);

      let those;
      let delta, word = ["осталось", "дней"];

    //   for(let i = 0; i < this.props.events.length; i++) {
    //     those = new Date(this.props.events[i]);
    //     delta = those - now;
    //     delta = Math.round(delta / 1000 / 60 / 60/ 24);
    //         if(delta<=7) {
    //             this.setState

    //         }
    //   }

    }

    // closeModal() {
    //     this.setState({modal: false, editing: false});
    // }

    // showEvent(ev) {
    //     this.setState({editing: false});
    //     console.log("H!, ev: ", ev);
    //     this.setState({event: ev});
    //     setTimeout(() => {this.setState({modal: true})}, 150);
    // }

    render() {
        // let now = new Date();
    //   console.log('ourDay: ', now);
    //   let hmm = moment();
    //   console.log('hmm: ', hmm);
    //   let hmmmm = new Date("2015/8/2");
    //   console.log('hmmmm: ', hmmmm);

    // let mas = this.props.events.map(function (element, i) {
    //                                             those = new Date(element.start);
    //                                             delta = those - Date.now();
    //                                             delta = Math.round(delta / 1000 / 60 / 60/ 24);
    //                                             console.log('Delta: ', delta, 'word:', word);
    //                                                 if(delta>2 && delta<5){

    //                                                 } word = ["осталось", "дня"];
    //                                                 if(delta<8) word = ["осталось", "дней"];
    //                                                  <p>До события "{element.title}" {word[0]} {delta} {word[1]}</p>
    //                                         })

      let those;
      let delta, word = ["остался", "день"];
      return (
            <div className="rem">
                                            {/*{this.props.events.forEach((element, i) => {
                                                those = new Date(element.start);
                                                delta = those - Date.now();
                                                delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                console.log('Delta: ', delta, 'word:', word);
                                                    if(delta==1) {
                                                        word = ["остался", "день"];
                                                        <p>До события "{element.title}" {word[0]} {delta} {word[1]}</p>
                                                    } else if(delta<=4) {
                                                        word = ["осталось", "дня"];
                                                        <p>До события "{element.title}" {word[0]} {delta} {word[1]}</p>
                                                    } else if(delta<=7){
                                                        word = ["осталось", "дней"];
                                                        <p>До события "{element.title}" {word[0]} {delta} {word[1]}</p>
                                                    }
                                            }, this)
                                            }*/}
                                                
                                            {this.props.events.map(function (element, i) {
                                                those = new Date(element.start);
                                                if(those > Date.now()){
                                                    delta = those - Date.now();
                                                    delta = Math.round(delta / 1000 / 60 / 60/ 24);
                                                    console.log('Delta: ', delta, 'word:', word, 'title: ', element.title);
                                                        if(delta>0 && delta<2) {
                                                            return(<p key={i}>До события "{element.title}" {word[0]} {delta} {word[1]}</p>)
                                                        } else if(delta>1 && delta<5){
                                                            word = ["осталось", "дня"];
                                                            return(<p key={i}>До события "{element.title}" {word[0]} {delta} {word[1]}</p>)
                                                        } else if(delta<8) {
                                                            word = ["осталось", "дней"];
                                                            return(<p key={i}>До события "{element.title}" {word[0]} {delta} {word[1]}</p>)
                                                            }
                                                    
                                                }

                                                     {/*<p>До события "{element.title}" {word[0]} {delta} {word[1]}</p>*/}
                                            })
                                            }

                                        {/*<ModalView 
                                                visibility={this.state.modal} 
                                                closeModal={this.closeModal} 
                                                event={this.state.event} 
                                                update={this.updateData.bind(this)}
                                                editing={this.state.editing}
                                            />*/}
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