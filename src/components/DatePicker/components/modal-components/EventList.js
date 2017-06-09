import React from 'react';
import EventData from './EventData';

export default ({data, update, active}) => {
  if(!data) {
    return (
      <p>Loading...</p>
    );
  }

  const events = data.map((event, index) => {
    return (<EventData key={index} event={event} index={index} update={update} />);
  });

  return (
    <div className="event-list">
    <table className="user-list table table-striped">
      <thead>
        <tr>
          <th>StartDate</th>
          <th>EndDate</th>
          <th>Event</th>
          <th>Description</th>
          <th></th>
          {/*<th>Email</th>*/}
          {/*<th>Phone</th>*/}
        </tr>
      </thead>
      <tbody>
        {events}
      </tbody>
    </table>
    </div>
  );
};
