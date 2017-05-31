import React from 'react';

export default ({list, update, index}) => {
  return (
    <tr onClick={() => update({active: index})}>
      <td>list.name</td>
    </tr>
  );
};