export const ItemBuffs = ({ buffs }: { buffs: string[][] }) => {
  return (
    <div>
      Buff(s):
      {buffs.map(([img, name]) => {
        return (
          <div>
            <h4>{name}</h4> <img src={img} alt={name} />
          </div>
        );
      })}
    </div>
  );
};
