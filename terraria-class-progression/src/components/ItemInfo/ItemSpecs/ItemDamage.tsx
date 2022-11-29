import React from 'react';

export const ItemDamage = ({ damage }: { damage: string }) => {
  return (
    <div>
      <span className='label'> Damage:</span> {damage}
    </div>
  );
};
