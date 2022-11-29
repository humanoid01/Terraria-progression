import React from 'react';

export const ItemBuffsDur = ({ buffsDur }: { buffsDur: string[] }) => {
  return (
    <div>
      {buffsDur.map((dur: string, i: number) => {
        return (
          <div key={i}>
            <span className='label'> Buff duration:</span> {dur}
          </div>
        );
      })}
    </div>
  );
};
