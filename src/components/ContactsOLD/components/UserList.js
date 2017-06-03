import React from 'react';
import UserData from './UserData';

export default ({data, update}) => {
  if(!data) {
    return (
      <p>Loading...</p>
    );
  }

  const users = data.map((user, index) => {
    return (<UserData key={index} user={user} index={index} update={update} />);
  });

  return (
    <table className="user-list table table-striped">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Company</th>
          <th>Phone</th>
          <th></th>
          {/*<th>Email</th>*/}
          {/*<th>Phone</th>*/}
        </tr>
      </thead>
      <tbody>
        {users}
      </tbody>
    </table>
  );
};
