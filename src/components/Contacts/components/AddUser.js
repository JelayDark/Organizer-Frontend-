import React, {Component} from 'react';

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: null
        }
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
                        <label>Phone Number: <input type="text" placeholder="Phone Number" /></label>
                        <label>E-mail: <input type="email" placeholder="forexample@tyt.ru" /></label>
                        <label>Name: <input type="text" placeholder="Name" /></label>
                        <label>Surname: <input type="text" placeholder="Surname" /></label>
                        <label>Age: <input type="text" placeholder="Age" /></label>
                        <label>Company: <input type="text" placeholder="Company" /></label>
                        <div className="but-left"><button onClick={this.addAvatar}>Add Avatar</button></div>
                        <div className="but-submit"><button type="submit">Add User</button></div>
                        <div className="errors">
                            {errors && <span>User already exists!</span>} 
                        </div>
                    </form>  
            </div>
        )} 
}