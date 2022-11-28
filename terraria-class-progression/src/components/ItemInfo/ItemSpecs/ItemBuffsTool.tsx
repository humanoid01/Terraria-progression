import React from 'react';

export const ItemBuffsTool = ({ buffTool }: { buffTool: string[] }) => {
  return (
    <div>
      Buff(s) tooltip:
      {buffTool.map((tool: string) => (
        <div> {tool}. </div>
      ))}
    </div>
  );
};
