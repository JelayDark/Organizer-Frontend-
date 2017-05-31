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
        console.log('aaaa');
        e.preventDefault();

        if(this.isValid()) {
            let list = {
                name: this.state.name,
                needs: [{}],

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
                    <div className="modal">
                        <div className="close">
                            <span onClick={this.props.closeModal}>x</span>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <h1>New List</h1>
                            <p>Введите название списка:</p>
                            <div><input onChange={this.onChange} type="text" placeholder="ListName" name="name"/></div>
                            <div className="errors">
                                {errors && <span>List already exists!</span>}
                            </div>
                            <div>
                                <button type="submit">Save</button>
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