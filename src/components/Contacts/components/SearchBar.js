import React from 'react';

export default ({term, data, update, initialData}) => {
  const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = initialData.filter(user => {
      if(user.name.toLowerCase().includes(value)) {
          return user.name.toLowerCase().includes(value);
      } else if(user.company.toLowerCase().includes(value)) {
          return user.company.toLowerCase().includes(value);
      }
    });

    update({
      data:filter,
      active:0,
      term:value
    });
    
  };

  return (
    <div className="con-searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={dataSearch}
      />
    </div>
  );
};
