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
                        {/*<h1>TakeYourTime</h1>*/}
                        <h1 className="login-type login">Sign In</h1>
                    </div>
                    <div className="field-container">
                        <form className="form-horizontal form-login" onSubmit={this.submitLogin}>
                            <div className="form-group">
                                <label for="inputLogin" className="col-sm-3 control-label">Login</label>
                                <div className="col-sm-9">
                                    {/*<input id="inputLogin" type="text" name="login" value={login} onChange={this.onChange} placeholder="Username" className={loginClass}  />*/}
                                    <input id="inputLogin" type="text" name="login" value={login} onChange={this.onChange} placeholder="Username" className="form-control"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputPassword" className="col-sm-3 control-label">Password</label>
                                <div className="col-sm-9">
                                {/*<input id="inputPassword" type="password" name="password" value={password} onChange={this.onChange} placeholder="Password" className={passwordClass}/>*/}
                                <input id="inputPassword" type="password" name="password" value={password} onChange={this.onChange} placeholder="Password" className="form-control"/>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-default" type="submit" disabled={isLoading}>Sign In</button>
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
