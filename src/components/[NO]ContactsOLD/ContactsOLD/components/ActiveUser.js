import React from 'react';

export default ({data, active}) => {
  if(!data || !data[active]) {return <h3>Nothing Found =(</h3>;}

    const user = data[active];

  return (
    <div className="thimbnail">
      <img src={`images/${user.image}.svg`} alt=""/>

      <div className="thimbnail-caption">
        <h3>{user.name}</h3>
        <table className="user-info table table-responsive">
          <tbody>
            <tr>
              <td>Age:</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Animal:</td>
              <td>{user.image}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>

        <p><b>His own phrase:</b> {user.phrase}</p>
      </div>
    </div>
  );
};
