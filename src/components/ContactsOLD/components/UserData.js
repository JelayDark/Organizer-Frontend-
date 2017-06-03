import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteUser} from '../../../actions/contacts';

class UserData extends Component {
    constructor(props) {
      super(props);
    }

    deleteUser(id, index) {
    this.props.deleteUser(id, index);
    setTimeout(() => this.props.update({
                    data:this.props.users
                }), 200);
  }

    render() {
      const user = this.props.user;
      const index = this.props.index;

      return (
          <tr onClick={() => this.props.update({active: index})}>
            <td style={{
                        minWidth: 50,
                        maxWidth: 50
                      }}><img src={`images/${user.image}.svg`} alt="Avatar" className="user-image" /></td>
            <td>{user.name}</td>
            <td>{user.company}</td>
            <td>{user.phone}</td>
            <td onClick={this.deleteUser.bind(this, user._id, index)}>X</td>
          </tr>
        )
    }

}

export default connect(
  state => ({
      users: state.contactsPanel.users,
  }),
  dispatch => ({
    deleteUser: (id, activeNum) => dispatch(deleteUser(id, activeNum))
})
)(UserData)



