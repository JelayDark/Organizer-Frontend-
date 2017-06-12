import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEvent, editEvent } from '../../../actions/events';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModalView extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: '',
            desc: '',
            error: null
        }

        this.stopEdit = this.stopEdit.bind(this);
        this.startEdit = this.startEdit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isValid = this.isValid.bind(this);
        // this.deleteEvent = this.deleteEvent.bind(this);
    }

    isValid() {
        const { title } = this.state;
        return title.length !== 0;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    startEdit() {
        this.setState({ title: this.props.event.title, desc: this.props.event.desc });
        this.props.update({editing: true});


    }

    stopEdit(e) {
        e.preventDefault();

        if(this.isValid()) {
            let event = {
                id: this.props.event._id,
                title: this.state.title,
                desc: this.state.desc,
            }

            this.props.editEvent(event);
            this.setState({error: null});
            this.props.closeModal();

        } else {
            this.setState({error: "write something"});
            return <div></div>
        }
    }

    // deleteEvent() {
    //     this.props.deleteEvent(this.props.event._id);
    //     this.props.closeModal();
    // }

    render() {
        let {visibility} = this.props;
        let {error} = this.state;
        // let {editing} = this.state;
        let editing = this.props.editing;
        const event = this.props.event;
        let nameClass = classNames({
            'error': this.state.error,
        });

        if (visibility) {
            let evDate = "";
            if (event.start == event.end) { evDate = event.start} else {evDate = event.start + " - " + event.end;}

            if(!editing) {
                return(
                        <div className="modal-container">
                            <div className="xmodal">
                                <div className="close">
                                    <span onClick={this.props.closeModal}>x</span>
                                </div>
                                    <p>{evDate}</p>
                                    <p><b>{event.title}</b></p>
                                    <p>{event.desc}</p>
                                    
                                        {/*<button onClick={this.deleteEvent}>Delete</button> */}
                                        <button className="btn btn-default btn-sm" onClick={this.startEdit}>Edit</button>
                                    
                                    <button className="btn btn-default btn-sm" onClick={this.props.closeModal}>Okay</button> 
                            </div>
                        </div>
                )
            } else {
                return(
                        <div className="modal-container">
                            <div className="xmodal">
                                <div className="close">
                                    <span onClick={this.props.closeModal}>x</span>
                                </div>
                                    <form onSubmit={this.stopEdit}>
                                        <p>{evDate}</p>
                                        <p><input className={nameClass + " form-control"} placeholder={error || "Title"} type="text" defaultValue={this.props.event.title} name="title" onChange={this.onChange}/></p>
                                        <p><textarea className="form-control" type="text" defaultValue={this.props.event.desc} name="desc" onChange={this.onChange}/></p>
                                        
                                            {/*<button onClick={this.deleteEvent}>Delete</button> */}
                                            <button className="btn btn-default btn-sm" type="submit">Save</button>
                                            <button className="btn btn-default btn-sm" onClick={this.props.closeModal}>Close</button> 
                                        
                                    </form>
                            </div>
                        </div>
            )}
        } else {
            return <div></div>
        }

    }

}

ModalView.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
      events: state.eventsPanel.events
  }),
  dispatch => ({
    editEvent: (event) => dispatch(editEvent(event)),
    // deleteEvent: (id) => dispatch(deleteEvent(id))
  })
)(ModalView)

// export default ModalNewList;