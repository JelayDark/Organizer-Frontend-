import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './LoginForm';
import App from '../../App';
import * as types from '../../actions/login';


class AdminPanel extends Component {
    
    render() {
        const { login } = this.props.store;
        
        if(!login) {
            return <Login onLoginSuccess={this.props.onLoginSuccess}/>
        } else {
            return <App />
        }
    }
}


function mapDispatchToProps(dispatch) {
   return {
    onLoginSuccess: () => {
        dispatch({type: types.LOGIN_SUCCESS});
    }
  }
}

export default connect(
  state => ({
      store: state.adminPanel
  }),
  mapDispatchToProps
)(AdminPanel);