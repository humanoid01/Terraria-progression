import { ItemCrafting } from './ItemCrafting/ItemCrafting';
import { ItemIcon } from './ItemIcon/ItemIcon';
import './ItemInfo.scss';
import { ItemName } from './ItemName/ItemName';
import { ItemType } from './ItemSpecs/ItemType';
import { ItemDamage } from './ItemSpecs/ItemDamage';
import { ItemKnock } from './ItemSpecs/ItemKnock';
import { ItemCrit } from './ItemSpecs/ItemCrit';
import { ItemUse } from './ItemSpecs/ItemUse';
import { ItemVelocity } from './ItemSpecs/ItemVelocity';
import { ItemTool } from './ItemSpecs/ItemTool';
import { ItemBuffs } from './ItemSpecs/ItemBuffs';
import { ItemDebuffs } from './ItemSpecs/ItemDebuffs';
import { Item } from '../../types/types';
import { ItemRarity } from './ItemSpecs/ItemRarity';

interface DisplayItemProps {
  itemId: number;
  itemsData: Item[];
}

export const ItemInfo: React.FC<DisplayItemProps> = ({ itemId, itemsData }) => {
  const [targetedItem]: Item[] = itemsData.filter((item: Item) => {
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
        <div className='item--box'>
          {itemName ? <ItemName itemName={itemName} /> : ''}
          {itemIcon ? <ItemIcon itemIcon={itemIcon} itemName={itemName} /> : ''}
        </div>
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
        {itemSpecs?.buffs?.length ? (
          <ItemBuffs
            buffs={itemSpecs?.buffs}
            buffsDur={itemSpecs?.buffsDur}
            buffTool={itemSpecs?.buffTool}
          />
        ) : (
          ''
        )}
        {itemSpecs?.debuffs?.length ? (
          <ItemDebuffs
            debuffs={itemSpecs?.debuffs}
            debuffsDur={itemSpecs?.debuffsDur}
            debuffsTool={itemSpecs?.debuffsTool}
          />
        ) : (
          ''
        )}
        {itemSpecs?.rarity ? <ItemRarity rarity={itemSpecs.rarity} /> : ''}
      </div>
      <br />
      {craftingStations?.length ? <ItemCrafting {...craftingProps} /> : ''}
    </div>
  );
};
