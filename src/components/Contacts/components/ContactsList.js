import React, {Component} from 'react';
import { getContacts } from '../../../actions/contacts';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ContactData from './ContactData';

// import ModalNewList from './ModalNewList';

class ContactsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        activeIndex: 0
    }
    console.log('PROPS:', props);
}

Update(e, index) {
    this.setState({activeIndex: index})
    setTimeout(() => console.log("Active: ", this.state.activeIndex), 200)
}



  render() {
    return (
      <Col lg={4}>
        <table>
          <thead>
             <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map((contact, index) => 
                <ContactData  key={index} index={index} contact={contact} update={this.Update.bind(this, index)}/>
              )}
          </tbody>
        </table>

      </Col>



      
    )
  }

}

export default connect(
  state => ({
    contacts: state.contactsPanel.users,
    active: state.contactsPanel.active
  }), 
  dispatch => ({
      getContacts: dispatch(getContacts())
}))(ContactsList)