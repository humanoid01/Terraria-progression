import React from 'react';

export const ItemTool = ({ tooltip }: { tooltip: string }) => {
  return (
    <div>
      <div className='item--description'>
        <span className='label'> Tooltip:</span> <span>{tooltip}</span>
      </div>
    </div>
  );
};
