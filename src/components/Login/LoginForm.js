import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames';
import { userLoginRequest } from '../../actions/login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            errors: {
                login: false,
                password: false
            },
            isLoading: false,
            shake: false
        }

        this.submitLogin = this.submitLogin.bind(this);
        this.isValid = this.isValid.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ errors: {} });
    }

    isValid() {
        const {login, password} = this.state;
        
        login.length === 0 ? this.setState((prevState) => {
            prevState.errors.login = true;
            return prevState;
        }) : this.setState((prevState) => {
            prevState.errors.login = false;
            return prevState;
        })

        password.length === 0 ? this.setState((prevState) => {
            prevState.errors.password = true;
            return prevState;
        }) : this.setState((prevState) => {
            prevState.errors.password = false;
            return prevState;
        })
    }

    submitLogin(e) {
        e.preventDefault();
        this.isValid();

        const { errors } = this.state;
        
        setTimeout(() => {
            if(errors.login === true || errors.password === true) {
                  let button = document.querySelector('.field-container button');
                  button.classList.add('shake');
                  setTimeout(() => button.classList.remove('shake'), 400);
            } else {
                this.setState({ isLoading: true});

                let account = {
                    login: this.state.login,
                    password: this.state.password
                }

                this.props.userLoginRequest(account).then(
                    (res) => {
                        console.log(res);
                        this.setState({isLoading: false});
                        this.props.onLoginSuccess();
                    },
                    (err) => {
                        this.setState((prevState) => {
                            prevState.isLoading  = false;
                            prevState.errors.login = true;
                            prevState.errors.password = true;
                        })
                        let button = document.querySelector('.field-container button');
                        button.classList.add('shake');
                        setTimeout(() => button.classList.remove('shake'), 400);
                    }
                );
            }
        }, 50)
    }

    render() {
        const {login, password, isLoading} = this.state;

        let loginClass = classNames({
            'error': this.state.errors.login,
        });

        let passwordClass = classNames({
            'error': this.state.errors.password,
        });

        return (
            <div className="admin-container">
                <div className="admin-container-inner">
                    <div className="header">
                        <h1>TakeYourTime</h1>
                        <h1>SignUp</h1>
                    </div>
                    <div className="field-container">
                        <form onSubmit={this.submitLogin}>
                            <div>
                                <input type="text" name="login" value={login} onChange={this.onChange} placeholder="Username" className={loginClass}  />
                            </div>
                            <div>
                                <input type="password" name="password" value={password} onChange={this.onChange} placeholder="Password" className={passwordClass}/>
                            </div>
                            <div>
                                <button type="submit" disabled={isLoading}>Enter</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
  state => ({
      store: state.adminPanel
  }),
  { userLoginRequest }
)(Login);
