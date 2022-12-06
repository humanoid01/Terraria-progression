interface Debuffs {
  debuffs: string[][];
  debuffsDur: string[] | undefined;
  debuffsTool: string[] | undefined;
}

export const ItemDebuffs = ({ debuffs, debuffsDur, debuffsTool }: Debuffs) => {
  return (
    <div className='item--debuff'>
      <span className='label'> Debuff(s):</span>
      {debuffs.map(([img, name]: string[], i) => {
        return (
          <div className='item--dbf' key={i}>
            <div className='item--description'>
              <h4>{name}</h4> <img src={img} alt={name} title={name} />
            </div>

            <div className='item--description'>
              <span className='label'>Debuff duration: </span>
              {debuffsDur?.[i]}
            </div>
            <div className='item--description'>
              <span className='label'>Debuff tooltip: </span>
              {debuffsTool?.[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
