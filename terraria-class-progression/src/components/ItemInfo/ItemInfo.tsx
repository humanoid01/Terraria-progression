import { ItemCrafting } from './ItemCrafting/ItemCrafting';
import { ItemIcon } from './ItemIcon/ItemIcon';
import './ItemInfo.css';
import { ItemName } from './ItemName/ItemName';
import { ItemType } from './ItemSpecs/ItemType';
import { ItemDamage } from './ItemSpecs/ItemDamage';
import { ItemKnock } from './ItemSpecs/ItemKnock';
import { ItemCrit } from './ItemSpecs/ItemCrit';
import { ItemUse } from './ItemSpecs/ItemUse';
import { ItemVelocity } from './ItemSpecs/ItemVelocity';
import { ItemTool } from './ItemSpecs/ItemTool';
import { ItemBuffs } from './ItemSpecs/ItemBuffs';
import { ItemBuffsDur } from './ItemSpecs/ItemBuffsDur';
import { ItemBuffsTool } from './ItemSpecs/ItemBuffsTool';
import { ItemDebuffs } from './ItemSpecs/ItemDebuffs';
import { ItemDebuffsDur } from './ItemSpecs/ItemDebuffsDur';
import { ItemDebuffsTool } from './ItemSpecs/ItemDebuffsTool';

interface Specs {
  type?: string;
  damage?: string;
  knock?: string;
  crit?: string;
  mana?: string;
  use?: string;
  velocity?: string;
  tooltip?: string;
  buffs?: string[][];
  buffsDur?: string[];
  buffTool?: string[];
  debuffs?: string[][];
  debuffsDur?: string[];
  debuffsTool?: string[];
  rarity?: string;
}
interface Item {
  id?: number;
  itemName?: string;
  itemIcon?: string;
  itemSpecs?: Specs;
  craftingStations?: string[][];
  craftingIngredients?: string[][];
}

interface DisplayItemProps {
  itemId: number;
  itemsData: Item[];
}

export const ItemInfo: React.FC<DisplayItemProps> = ({ itemId, itemsData }) => {
  const items: Item[] = itemsData;
  const [targetedItem]: Item[] = items.filter((item: Item) => {
    return item.id === itemId;
  });

  const {
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
    <div className='item'>
      <div>
        {itemName ? <ItemName itemName={itemName} /> : ''}
        {itemIcon ? <ItemIcon itemIcon={itemIcon} itemName={itemName} /> : ''}
        {itemSpecs?.type ? <ItemType type={itemSpecs?.type} /> : ''}
        {itemSpecs?.damage ? <ItemDamage damage={itemSpecs?.damage} /> : ''}
        {itemSpecs?.knock ? <ItemKnock knock={itemSpecs?.knock} /> : ''}
        {itemSpecs?.crit ? <ItemCrit crit={itemSpecs?.crit} /> : ''}
        {itemSpecs?.use ? <ItemUse use={itemSpecs?.use} /> : ''}
        {itemSpecs?.velocity ? (
          <ItemVelocity velocity={itemSpecs?.velocity} />
        ) : (
          ''
        )}
        {itemSpecs?.tooltip ? <ItemTool tooltip={itemSpecs?.tooltip} /> : ''}
        {itemSpecs?.buffs?.length ? <ItemBuffs buffs={itemSpecs?.buffs} /> : ''}
        {itemSpecs?.buffsDur?.length ? (
          <ItemBuffsDur buffsDur={itemSpecs?.buffsDur} />
        ) : (
          ''
        )}
        {itemSpecs?.buffTool?.length ? (
          <ItemBuffsTool buffTool={itemSpecs?.buffTool} />
        ) : (
          ''
        )}
        {itemSpecs?.debuffs?.length ? (
          <ItemDebuffs debuffs={itemSpecs?.debuffs} />
        ) : (
          ''
        )}
        {itemSpecs?.debuffsDur?.length ? (
          <ItemDebuffsDur debuffsDur={itemSpecs?.debuffsDur} />
        ) : (
          ''
        )}
        {itemSpecs?.debuffsTool?.length ? (
          <ItemDebuffsTool debuffsTool={itemSpecs?.debuffsTool} />
        ) : (
          ''
        )}
      </div>
      <br />
      {craftingStations?.length ? <ItemCrafting {...craftingProps} /> : ''}
    </div>
  );
};
