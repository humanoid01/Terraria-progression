import React from 'react';

export const ItemDebuffsTool = ({ debuffsTool }: { debuffsTool: string[] }) => {
  return (
    <div>
      {debuffsTool.map((tool: string) => (
        <div> {tool} </div>
      ))}
    </div>
  );
};
