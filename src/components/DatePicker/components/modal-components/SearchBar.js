import React from 'react';

export default ({term, data, update, initialData}) => {
  const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = initialData.filter((event) => {
        if(event.title.toLowerCase().includes(value)) {
            return (event.title.toLowerCase().includes(value))
        } else if (event.desc.toLowerCase().includes(value)) {
            return (event.desc.toLowerCase().includes(value))
        }
    });

    update({
      data:filter,
      term:value
    });
    
  }

  const resetdata = () => {
    update({
      data: initialData,
      term: '',
    });
  }

  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search event by title..."
        onChange={dataSearch}
      />
      <button onClick={resetdata}>Reset</button>
    </div>
  );
};
