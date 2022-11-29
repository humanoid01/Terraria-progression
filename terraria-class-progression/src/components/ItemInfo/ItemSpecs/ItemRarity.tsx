export const ItemRarity = ({ rarity }: { rarity: string }) => {
  return (
    <div className='rarity'>
      <span className='label'>Rarity:</span>
      <img src={rarity} alt='rarity' title='rarity' />
    </div>
  );
};
