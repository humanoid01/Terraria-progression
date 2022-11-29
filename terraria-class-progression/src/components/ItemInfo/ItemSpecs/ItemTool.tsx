import React from 'react';

export const ItemTool = ({ tooltip }: { tooltip: string }) => {
  return (
    <div>
      {' '}
      <span className='label'> Tooltip:</span> {tooltip}
    </div>
  );
};
