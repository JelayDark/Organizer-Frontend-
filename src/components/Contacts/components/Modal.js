import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getContacts, addContact, ADD_CONTACT } from '../../../actions/contacts';
import PropTypes from 'prop-types';

class Modal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: this.props.data,
            errors: null,
            name: '',
            phone: '',
            company:'',
            email: '',
            about: '',
        }
        this.addContact = this.addContact.bind(this);
        this.addAvatar = this.addAvatar.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isValid = this.isValid.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    isValid() {
        const { name } = this.state;
        return name.length !== 0;
    }

    //При клике на кнопку добавить пользователя в список контактов
    addContact(e) {
        e.preventDefault();
        const input = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');
        textarea.value = '';
        let i = 0;
        while(i<input.length){

        input[i].value='';
        i++;
        }

        if(this.isValid()) {
            let user = {
                name: this.state.name,
                phone: this.state.phone,
                company: this.state.company,
                email: this.state.email,
                about: this.state.about,
                image: "owl"
            }

            this.props.addContact(user).then((response) =>{
                console.log(response);
                const store = this.context.store;
                store.dispatch({type: ADD_CONTACT, payload: response.data}); 
            }).catch((err) => {
                console.log(err);
            })

            setTimeout(() => this.props.update({
                    data:this.props.data,
                    modal: false
                }), 200);

            this.setState({name: '', phone: '', company:'', email: '', about: ''});

        } else {
            return <div></div>
        }
        
    }

    //При клике идет добавление аватарки
    addAvatar(e) {
        e.PreventDefault();
    }

    render() {
        let { errors } = this.state;
        let { visibility } = this.props;

        if(visibility){
        return(
            <div className="modal-container">
                    <div className="xmodal-cont">
                        <div className="close">
                            <span className="close" onClick={this.props.closeModal}>x</span>
                        </div>
                    <form className="form-horizontal" onSubmit={this.addContact}>
                        <div className="form-group">
                            <label className="col-sm-4" htmlFor="name">Name: </label>
                            <div className="col-sm-8">
                                <input className="form-control" id="name" type="text" placeholder="Name" name="name" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4" htmlFor="company">Company: </label> 
                            <div className="col-sm-8">
                                <input className="form-control" id="company" type="text" placeholder="Company" name="company" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4" htmlFor="phone">Phone: </label>
                            <div className="col-sm-8">
                                <input className="form-control" id="phone" type="text" placeholder="+38(095)4466644" name="phone" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4" htmlFor="email">E-mail: </label>
                            <div className="col-sm-8">
                                <input className="form-control" id="email" type="email" placeholder="forexample@tyt.ru" name="email" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4" htmlFor="about">About: </label>
                            <div className="col-sm-8">
                                <textarea className="form-control" id="about" name="about" onChange={this.onChange}/>
                            </div>
                        </div>
                        {/*<div className="but-left"><button onClick={this.addAvatar}>Add Avatar</button></div>*/}
                        <div><button className="btn btn-primary" type="submit">Add Contact</button></div>
                        <div className="errors">
                            {errors && <span>User already exists!</span>} 
                        </div>
                    </form>   
                    </div>
                </div>
            
         ) } else {
            return(<div></div>)
        } 
}
}


Modal.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
      data: state.contactsPanel.users,
  }),
  { addContact, getContacts }
)(Modal)