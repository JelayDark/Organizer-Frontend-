import React from 'react';

export default ({contact, update, index}) => {
  return (
    <tr onClick={() => update({active: index})}>
      {/*<td><img src={`images/${user.image}.svg`} alt="Avatar" className="user-image" /></td>*/}
      <td>{contact.name} {contact.surname}</td>
      <td>{contact.company}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};


/*export default ({contact, index}) => {
  return (
    <tr >
      <td>{contact.name} {contact.surname}</td>
      <td>{contact.company}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};*/
