import allWeapons from './dataToTransform/allWeapons.json';
import allAccessories from './dataToTransform//allAccessories.json';
import * as fs from 'fs';

interface NewSpecs {
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

interface NewItem {
  id?: number;
  itemName?: string;
  itemIcon?: string;
  itemSpecs?: NewSpecs;
  craftingStations?: string[][];
  craftingIngredients?: string[][];
}

export const transformToObject = () => {
  const newItems: NewSpecs[] = [];

  allAccessories.forEach(weapons => {
    const newSpecs: NewSpecs = {
      buffs: [],
      buffsDur: [],
      buffTool: [],
      debuffs: [],
      debuffsDur: [],
      debuffsTool: [],
    };

    weapons.itemSpecs.forEach(([label, desc, buffName]) => {
      if (label.toLowerCase() === 'type') newSpecs.type = desc;
      if (label.toLowerCase() === 'damage') newSpecs.damage = desc;
      if (label.toLowerCase() === 'knockback') newSpecs.knock = desc;
      if (label.toLowerCase() === 'mana') newSpecs.mana = desc;
      if (label.toLowerCase() === 'critical chance') newSpecs.crit = desc;
      if (label.toLowerCase() === 'use time') newSpecs.use = desc;
      if (label.toLowerCase() === 'velocity') newSpecs.velocity = desc;
      if (label.toLowerCase() === 'tooltip') newSpecs.tooltip = desc;
      if (label.toLowerCase() === 'grants buff')
        newSpecs.buffs?.push([desc, buffName]);
      if (label.toLowerCase() === 'buff duration')
        newSpecs.buffsDur?.push(desc);
      if (label.toLowerCase() === 'buff tooltip') newSpecs.buffTool?.push(desc);
      if (label.toLowerCase() === 'inflicts debuff')
        newSpecs.debuffs?.push([desc, buffName]);
      if (label.toLowerCase() === 'debuff duration')
        newSpecs.debuffsDur?.push(desc);
      if (label.toLowerCase() === 'debuff tooltip')
        newSpecs.debuffsTool?.push(desc);
      if (label.toLowerCase() === 'rarity') newSpecs.rarity = desc;
    });
    const newItem: NewItem = {
      id: weapons.id,
      itemName: weapons.itemName,
      itemIcon: weapons.itemIcon,
      itemSpecs: newSpecs,
      craftingStations: weapons.craftingStations,
      craftingIngredients: weapons.craftingIngredients,
    };

    newItems.push(newItem as NewSpecs);
  });
  fs.writeFileSync('allAccessories.json', JSON.stringify(newItems, null, 2));
};

console.log(transformToObject());
