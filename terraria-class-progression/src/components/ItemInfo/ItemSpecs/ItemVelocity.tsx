import React from 'react';

export const ItemVelocity = ({ velocity }: { velocity: string }) => {
  return (
    <div>
      <span className='label'> Velocity:</span> {velocity}
    </div>
  );
};
