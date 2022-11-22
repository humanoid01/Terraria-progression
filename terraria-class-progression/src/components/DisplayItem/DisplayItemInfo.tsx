import { DisplayItemCrafting } from './DisplayItemCrafting';

interface Item {
  id: number;
  itemName: string;
  itemIcon?: string;
  itemSpecs: string[][];
  craftingIngredients: string[][];
  craftingStations: string[][];
}

interface DisplayItemProps {
  itemId: number;
  itemsData: Item[];
}

export const DisplayItemInfo = ({ itemId, itemsData }: DisplayItemProps) => {
  const items: Item[] = itemsData;
  console.log(itemsData);
  const [targetedItem]: Item[] = items.filter((item: Item) => {
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

  const craftingProps = {
    craftingIngredients,
    craftingStations,
  };

  return (
    <div>
      <div>
        <h2>{itemName}</h2>
        <img src={itemIcon} alt={itemName} title={itemName} />
        <div key={id}>
          {itemSpecs.map((specs: string[], id: number) => {
            const debuff: boolean = specs[0]?.startsWith('https');
            const coin: boolean = specs[2]?.startsWith('https');
            const rarity: boolean = specs[1]?.startsWith('https');

            if (debuff) {
              return (
                <div key={id}>
                  Inflicts debuff:
                  <img src={specs[0] || ''} alt={specs[1]} title={specs[1]} />
                </div>
              );
            } else if (rarity) {
              return (
                <div key={id}>
                  <h3>{specs[0]}</h3>
                  <img src={specs[1] || ''} alt='rarity' />
                </div>
              );
            } else if (coin) {
              return (
                <div key={id}>
                  <span>{specs[0]}</span>
                  <span>{specs[1]} </span>
                  <img src={specs[2] || ''} alt='coin' />
                </div>
              );
            }

            return (
              <div key={id}>
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
