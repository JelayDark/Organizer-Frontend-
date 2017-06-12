import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TypePicker from './components/TypePicker';
import {connect} from 'react-redux';
import { addEvent } from '../../actions/events';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import AllEvents from './components/AllEvents';

import 'react-datepicker/dist/react-datepicker.css';

class DatePicker extends Component {

    constructor() {
        super();
        this.state = {
            show: 0,
            start: moment().format('YYYY/MM/DD'),
            end: moment().format('YYYY/MM/DD'),
            title: '',
            desc: '',
            data: "",
            error: null
        }

        setTimeout(() => this.setState({data: this.props.events}), 150);

        this.eventSubmit = this.eventSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isValid = this.isValid.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    isValid() {
        const { title } = this.state;
        return title.length !== 0;
    }

    eventSubmit(e) {
        e.preventDefault();

        const input = document.querySelector('input[type="text"]');
        const textarea = document.querySelector('textarea');
        textarea.value = '';
        input.value='';

        if(this.isValid()) {
            let event = {
                title: this.state.title,
                start: this.state.start,
                end: this.state.end,
                desc: this.state.desc,
            }

            this.props.addEvent(event);
        this.setState({title: '', desc: '', error: null});

        setTimeout(() => this.setState({data: this.props.events}), 350);
    } else {
            this.setState({error: "You must write event's title here"});
            return (<h2>Укажите Название События</h2>);
        }

    }

    updateDate(config) {
        this.setState(config);
    }

    setType() {
        if(this.state.show === 0) {
            this.setState({show: 1});
        } else {
            this.setState({show: 0});            
        }
    }

    render() {
        let { error } = this.state;
        let nameClass = classNames({
            'error': this.state.error,
        });

            {/*<Grid fluid>
                        <Row >
                            <Col xs={12}>*/}
      return (
                                    <Row center="xs">
                                    <Col lg={5}>
                                            <form onSubmit={this.eventSubmit}>
                                                    <p>Event's type switcher:</p>
                                                <div className="onoffswitch">
                                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" onClick={this.setType.bind(this)}/>
                                                    <label className="onoffswitch-label" htmlFor="myonoffswitch">
                                                        <span className="onoffswitch-inner"></span>
                                                        <span className="onoffswitch-switch"></span>
                                                    </label>
                                                </div>
                                                <TypePicker type={this.state.show} update={this.updateDate.bind(this)}/>
                                                <div>
                                                    <label htmlFor="title" title="Название события/Reason">Event's title [?]:</label>
                                                    <input className={ nameClass + " form-control"} id="title" type="text" placeholder={error || "Title"} name="title" onChange={this.onChange}/>
                                                </div>
                                                <div>
                                                    <label htmlFor="desc" title="Описание события">Description [?]:</label>
                                                        <textarea id="desc" className="form-control" rows="10" cols="45" name="desc" onChange={this.onChange}></textarea>
                                                </div>
                                                <div><button className="btn btn-primary pick-btn" type="submit">Добавить событие</button></div>
                                                {/*<div className="errors">
                                                    {errors && <span>User already exists!</span>} 
                                                </div>*/}
                                            </form>  
                                        </Col>
                                        <Col lg={5}>
                                            <AllEvents  data={this.state.data}/>
                                        </Col>

                                </Row>
                //             </Col>
                //         </Row>
                // </Grid>

      );

    }
}

// AddUser.contextTypes = {
//   store: PropTypes.object.isRequired
// }

export default connect(
  state => ({
      events: state.eventsPanel.events,
  }),
  dispatch => ({
    addEvent: (event) => dispatch(addEvent(event))
})
)(DatePicker)