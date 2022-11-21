import React from 'react';
import allWeapons from '../../data/weapons/allWeapons.json';
import { DisplayItemCrafting } from './DisplayItemCrafting';

export const DisplayItemInfo = ({ itemId }: { itemId: number }) => {
  const [targetedItem] = allWeapons.filter((item: any) => {
    return item.id === itemId;
  });
  const {
    id,
    itemName,
    itemIcon,
    itemSpecs,
    craftingIngredients,
    craftingStations,
  } = targetedItem;

  const craftingProps = { craftingIngredients, craftingStations };

  return (
    <div>
      <div>
        {' '}
        <h2>{itemName}</h2>
        <img src={itemIcon} alt='' />
        <div key={id}>
          {itemSpecs.map(specs => {
            const debuff: boolean | undefined = specs[0]?.startsWith('https');
            const coin: boolean | undefined = specs[2]?.startsWith('https');
            const rarity: boolean | undefined = specs[1]?.startsWith('https');

            if (debuff) {
              return (
                <div>
                  Inflicts debuff:
                  <img src={specs[0] || ''} alt='' />
                </div>
              );
            } else if (rarity) {
              return (
                <div>
                  <h3>{specs[0]}</h3>
                  <img src={specs[1] || ''} alt='' />
                </div>
              );
            } else if (coin) {
              return (
                <div>
                  <span>{specs[0]}</span>
                  <span>{specs[1]} </span>
                  <img src={specs[2] || ''} alt='' />
                </div>
              );
            }

            return (
              <div>
                <h3>{specs[0]} </h3>
                <p> {specs[1]} </p>
              </div>
            );
          })}
        </div>
      </div>
      <DisplayItemCrafting {...craftingProps} />
    </div>
  );
};
