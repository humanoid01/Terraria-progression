import React from 'react';

export const ItemKnock = ({ knock }: { knock: string }) => {
  return (
    <div>
      <span className='label'> Knockback:</span> {knock}
    </div>
  );
};
