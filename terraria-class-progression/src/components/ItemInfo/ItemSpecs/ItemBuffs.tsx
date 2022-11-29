interface Buffs {
  buffs: string[][];
  buffsDur: string[] | undefined;
  buffTool: string[] | undefined;
}

export const ItemBuffs = ({ buffs, buffsDur, buffTool }: Buffs) => {
  return (
    <div>
      <span className='label'> Buff(s):</span>
      {buffs.map(([img, name], i: number) => {
        return (
          <div key={i}>
            <h4>{name}</h4> <img src={img} alt={name} />
            <div>
              <span className='label'>Buff duration: </span>
              {buffsDur?.[i]}
            </div>
            <div>
              <span className='label'>Buff tooltip: </span>
              {buffTool?.[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
