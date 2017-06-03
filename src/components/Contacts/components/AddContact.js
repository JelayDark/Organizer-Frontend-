import React, {Component} from 'react';

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: null,
            name: '',
            surname: '',
            phone: '',
            company:'',
            email: ''
        }
        this.addUser = this.addUser.bind(this);
        this.addAvatar = this.addAvatar.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    //При клике на кнопку добавить пользователя в список контактов
    addUser(e) {
        e.PreventDefault();
    }

    //При клике идет добавление аватарки
    addAvatar(e) {
        e.PreventDefault();
    }

    render() {
        let { errors } = this.state;
        return(
            <div className="left-side">
                    <form onSubmit={this.addUser}>
                        <div><label>Phone: <input type="text" placeholder="+38(095)0950950950" name="phone" onChange={this.onChange}/></label></div>
                        <div><label>Name: <input type="text" placeholder="Name" name="name" onChange={this.onChange}/></label></div>
                        <div><label>Surname: <input type="text" placeholder="Surname" name="surname" onChange={this.onChange}/></label></div>
                        <div><label>Company: <input type="text" placeholder="Company" name="company" onChange={this.onChange}/></label></div>
                        <div><label>E-mail: <input type="email" placeholder="forexample@tyt.ru" name="email" onChange={this.onChange}/></label></div>
                        <div className="but-left"><button onClick={this.addAvatar}>Add Avatar</button></div>
                        <div className="but-submit"><button type="submit">Add User</button></div>
                        <div className="errors">
                            {errors && <span>User already exists!</span>} 
                        </div>
                    </form>  
            </div>
        )} 
}