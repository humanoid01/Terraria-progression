import React from 'react';

export const ItemDebuffs = ({ debuffs }: { debuffs: string[][] }) => {
  return (
    <div>
      Debuff(s):
      {debuffs.map(([img, name]) => {
        return (
          <div>
            {' '}
            <h4>{name}</h4> <img src={img} alt={name} />{' '}
          </div>
        );
      })}{' '}
    </div>
  );
};
