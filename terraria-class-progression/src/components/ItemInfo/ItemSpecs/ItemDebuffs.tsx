interface Debuffs {
  debuffs: string[][];
  debuffsDur: string[] | undefined;
  debuffsTool: string[] | undefined;
}

export const ItemDebuffs = ({ debuffs, debuffsDur, debuffsTool }: Debuffs) => {
  return (
    <div>
      <span className='label'> Debuff(s):</span>
      {debuffs.map(([img, name]: string[], i) => {
        return (
          <div key={i}>
            <h4>{name}</h4> <img src={img} alt={name} />
            <div>
              <span className='label'>Debuff duration: </span>
              {debuffsDur?.[i]}
            </div>
            <div>
              <span className='label'>Debuff tooltip: </span>
              {debuffsTool?.[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
