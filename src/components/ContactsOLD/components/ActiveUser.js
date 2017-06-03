import React, { Component } from 'react';
import { editUser, deleteUser } from '../../../actions/contacts';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class ActiveUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
          editing: false,
          name: '',
          phone: '',
          company: '',
          email: '',
    }
    console.log("ACTIVE PROPS:", props);

    this.startEdit = this.startEdit.bind(this);
    this.stopEdit = this.stopEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.isValid = this.isValid.bind(this);
    // this.deleteUser = this.deleteUser.bind(this);


  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
  }

  isValid() {
      const { name } = this.state;
      return name.length !== 0;
  }

  startEdit() {
    this.setState({
          editing:true, 
          name: this.props.data[this.props.active].name,
          phone: this.props.data[this.props.active].phone,
          company: this.props.data[this.props.active].company,
          email: this.props.data[this.props.active].email
        })
  }

  stopEdit(e) {
    e.preventDefault();

    if(this.isValid()) {
            let user = {
                id: this.props.data[this.props.active]._id,
                name: this.state.name,
                phone: this.state.phone,
                company: this.state.company,
                email: this.state.email,
                image: "owl"
            }

            this.props.editUser(user);
            this.setState({editing:false});

            setTimeout(() => this.props.update({
                    data:this.props.users
                }), 150);

        } else {
            return <div></div>
        }
        
  }

  deleteUser(id) {
    this.setState({editing:false});
    const activeNum = this.props.active;
    this.props.deleteUser(id, activeNum);
    setTimeout(() => this.props.update({
                    data:this.props.users
                }), 200);



  }

  render() {

      if(!this.props.data || !this.props.data[this.props.active]) {return(<h3>Nothing Found =(</h3>);}
      
      const user = this.props.data[this.props.active];

      if(!this.state.editing) {
        return(
              <div className="thimbnail">
                  <img style={{maxWidth: 100}} src={`images/${user.image}.svg`} alt=""/>

                  <div className="thimbnail-caption">
                    <h3>{user.name}</h3>
                    <button onClick={this.startEdit}>Edit</button>
                    <button onClick={this.deleteUser.bind(this, user._id)}>Delete</button>

                    <table className="user-info table table-responsive">
                      <tbody>
                        <tr>
                          <td>Company:</td>
                          <td>{user.company ? user.company : "not added"}</td>
                        </tr>
                        <tr>
                          <td>Phome:</td>
                          <td>{user.phone ? user.phone : "not added"}</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>{user.email ? user.email : "not added"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p><b>His own phrase:</b> {user.phrase}</p>
              </div>
            </div>
      )} else {

            return(
                  <div className="thimbnail">
                    <form onSubmit={this.stopEdit}>
                      <img src={`images/${user.image}.svg`} alt=""/>

                      <div className="thimbnail-caption">
                        <h3><input type="text" defaultValue={user.name} name="name" onChange={this.onChange}/></h3>
                        <button type="submit">Save</button>
                        <button onClick={this.deleteUser.bind(this, user._id)}>Delete</button>

                        <table className="user-info table table-responsive">
                          <tbody>
                            <tr>
                              <td>Company:</td>
                              <td><input type="text" defaultValue={user.company} name="company" onChange={this.onChange}/></td>
                            </tr>
                            <tr>
                              <td>Phome:</td>
                              <td><input type="text" defaultValue={user.phone} name="phone" onChange={this.onChange}/></td>
                            </tr>
                            <tr>
                              <td>Email:</td>
                              <td><input type="text" defaultValue={user.email} name="email" onChange={this.onChange}/></td>
                            </tr>
                          </tbody>
                        </table>
                        <p><b>His own phrase:</b> {user.phrase}</p>
                      </div>
                    </form>
                  </div>
            )

      }
  };
}

// export default ActiveUser

ActiveUser.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
      users: state.contactsPanel.users,
  }),
  dispatch => ({
    editUser: (user) => dispatch(editUser(user)),
    deleteUser: (id, activeNum) => dispatch(deleteUser(id, activeNum))
})
)(ActiveUser)


