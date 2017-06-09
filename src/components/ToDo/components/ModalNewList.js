import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList, CREATE_LIST } from '../../../actions/lists';
import PropTypes from 'prop-types';

class ModalNewList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            // errors: null,
            name: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    isValid() {
        const { name } = this.state;
        return name.length !== 0;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        // console.log('aaaa');
        e.preventDefault();

        if(this.isValid()) {
            let list = {
                name: this.state.name,
                needs: [],

            }

            this.props.createList(list).then((response) =>{
                console.log(response);
                const store = this.context.store;
                store.dispatch({type: CREATE_LIST, payload: response.data}); 
                this.props.closeModal(true);
            }).catch((err) => {
                console.log(err);
                this.props.closeModal(false);
            })

            this.setState({name: ''});

        } else {
            return <div></div>
        }
    }

    render() {
        let {visibility} = this.props;
        let {errors} = this.state;

        if (visibility) {
            return (
                <div className="modal-container">
                    <div className="xmodal">
                        <div className="close">
                            <span className="close" onClick={this.props.closeModal}>x</span>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <h3>Add list</h3>
                            <div className="form-group">
                            <label htmlFor="name" >Type list name here:</label>
                                <input className="form-control" onChange={this.onChange} type="text" placeholder="ListName" id="name" name="name"/>
                            </div>
                            <div className="errors">
                                {errors && <span>List already exists!</span>}
                            </div>
                            <div>
                                <button className="btn btn-default" type="submit">Add list</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

    }

}

ModalNewList.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
      lists: state.adminPanel.lists
  }),
  { createList }
)(ModalNewList)

// export default ModalNewList;