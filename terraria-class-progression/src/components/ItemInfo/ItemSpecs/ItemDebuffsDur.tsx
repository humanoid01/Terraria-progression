import React from 'react';

export const ItemDebuffsDur = ({ debuffsDur }: { debuffsDur: string[] }) => {
  return (
    <div>
      {' '}
      {debuffsDur.map((dur: string) => (
        <div> Debuff duration: {dur} </div>
      ))}{' '}
    </div>
  );
};
