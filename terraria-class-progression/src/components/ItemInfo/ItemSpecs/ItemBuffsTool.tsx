import React from 'react';

export const ItemBuffsTool = ({ buffTool }: { buffTool: string[] }) => {
  return (
    <div>
      <span className='label'>Buff(s) tooltip:</span>
      {buffTool.map((tool: string, i: number) => (
        <div key={i}> {tool}. </div>
      ))}
    </div>
  );
};
