import React from 'react';

export const ItemUse = ({ use }: { use: string }) => {
  return (
    <div>
      {' '}
      <span className='label'> Use time:</span> {use}
    </div>
  );
};
