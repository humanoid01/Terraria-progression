import React from 'react';

export const ItemBuffsDur = ({ buffsDur }: { buffsDur: string[] }) => {
  return (
    <div>
      {buffsDur.map((dur: string) => {
        return <div> Buff duration: {dur} </div>;
      })}
    </div>
  );
};
