interface Buffs {
  buffs: string[][];
  buffsDur: string[] | undefined;
  buffTool: string[] | undefined;
}

export const ItemBuffs = ({ buffs, buffsDur, buffTool }: Buffs) => {
  return (
    <div className='item--buff'>
      <span className='label'> Buff(s):</span>
      {buffs.map(([img, name], i: number) => {
        return (
          <div className='item--dbf' key={i}>
            <div className='item--description'>
              <h4>{name}</h4> <img src={img} alt={name} title={name} />
            </div>
            <div className='item--description'>
              <span className='label'>Buff duration: </span>
              {buffsDur?.[i]}
            </div>
            <div className='item--description'>
              <span className='label'>Buff tooltip: </span>
              {buffTool?.[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
