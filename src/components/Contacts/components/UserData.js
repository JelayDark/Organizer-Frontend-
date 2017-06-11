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
    if (this.props.active) {
      let newActive = index;

              setTimeout(() => {

              if(!this.props.users[index]) {
                if(newActive != 0) {
                  newActive--;
                }          
            }           
                this.props.update({
                      data:this.props.users,
                      active: newActive
                  })}, 200);
    } else {
      setTimeout(() => {   
                this.props.update({
                      data:this.props.users,
                  })}, 200);
    }
  }

    render() {
      const user = this.props.user;
      const index = this.props.index;

      return (
          <tr >
            <td style={{
                        minWidth: 50,
                        maxWidth: 50
                      }}
                onClick={() => this.props.update({active: index})}        
              >
                <img src={`images/${user.image}.svg`} alt="Avatar" className="user-image" />
            </td>
            <td onClick={() => this.props.update({active: index})}>{user.name}</td>
            <td onClick={() => this.props.update({active: index})}>{user.company}</td>
            <td onClick={() => this.props.update({active: index})}>{user.phone}</td>
            <td onClick={this.deleteUser.bind(this, user._id, index)}>
              <span className="del-btn"></span>
            </td>
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



