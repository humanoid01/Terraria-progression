import React from 'react';

export const ItemType = ({ type }: { type: string }) => {
  return (
    <div>
      {' '}
      <span className='label'> Type:</span> {type}
    </div>
  );
};
