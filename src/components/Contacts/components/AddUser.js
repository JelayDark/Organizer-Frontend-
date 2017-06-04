import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getContacts, addContact, ADD_CONTACT } from '../../../actions/contacts';
import PropTypes from 'prop-types';

class AddUser extends Component {
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
                // console.log("STORE:", store);
                // console.log("store_dis", store.dispatch({type: ADD_CONTACT, payload: response.data}));
                store.dispatch({type: ADD_CONTACT, payload: response.data}); 
                // this.props.closeModal(true);
            }).catch((err) => {
                console.log(err);
                // this.props.closeModal(false);
            })

            setTimeout(() => this.props.update({
                    data:this.props.data
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
        return(
            <div className="left-side">
                    <form onSubmit={this.addContact}>
                        <div><label>Name: <input type="text" placeholder="Name" name="name" onChange={this.onChange}/></label></div>
                        <div><label>Company: <input type="text" placeholder="Company" name="company" onChange={this.onChange}/></label></div>
                        <div><label>Phone: <input type="text" placeholder="+38(095)0950950950" name="phone" onChange={this.onChange}/></label></div>
                        <div><label>E-mail: <input type="email" placeholder="forexample@tyt.ru" name="email" onChange={this.onChange}/></label></div>
                        <div><label>About: <textarea name="about" onChange={this.onChange}/></label></div>
                        {/*<div className="but-left"><button onClick={this.addAvatar}>Add Avatar</button></div>*/}
                        <div className="but-submit"><button type="submit">Add Contact</button></div>
                        <div className="errors">
                            {errors && <span>User already exists!</span>} 
                        </div>
                    </form>   
            </div>
        )} 
}


AddUser.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
      data: state.contactsPanel.users,
  }),
  { addContact, getContacts }
)(AddUser)