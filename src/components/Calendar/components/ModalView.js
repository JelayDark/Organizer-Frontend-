import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEvent, editEvent } from '../../../actions/events';
import PropTypes from 'prop-types';

class ModalView extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: '',
            desc: '',
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

        } else {
            return <div></div>
        }
        this.props.closeModal();
    }

    // deleteEvent() {
    //     this.props.deleteEvent(this.props.event._id);
    //     this.props.closeModal();
    // }

    render() {
        let {visibility} = this.props;
        let {errors} = this.state;
        // let {editing} = this.state;
        let editing = this.props.editing;
        const event = this.props.event;

        if (visibility) {
            if(!editing) {
                return(
                        <div className="modal-container">
                            <div className="modal">
                                <div className="close">
                                    <span onClick={this.props.closeModal}>x</span>
                                </div>
                                    <p><b>{event.title}</b></p>
                                    <p>{event.desc}</p>
                                    <div>
                                        {/*<button onClick={this.deleteEvent}>Delete</button> */}
                                        <button onClick={this.startEdit}>Edit</button>
                                    </div>
                                    <button onClick={this.props.closeModal}>Okay</button> 
                            </div>
                        </div>
                )
            } else {
                return(
                        <div className="modal-container">
                            <div className="modal">
                                <div className="close">
                                    <span onClick={this.props.closeModal}>x</span>
                                </div>
                                    <form onSubmit={this.stopEdit}>
                                        <p><input type="text" defaultValue={this.props.event.title} name="title" onChange={this.onChange}/></p>
                                        <p><textarea type="text" defaultValue={this.props.event.desc} name="desc" onChange={this.onChange}/></p>
                                        <div>
                                            {/*<button onClick={this.deleteEvent}>Delete</button> */}
                                            <button type="submit">Save</button>
                                        </div>
                                    </form>
                                        <button onClick={this.props.closeModal}>Close</button> 
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