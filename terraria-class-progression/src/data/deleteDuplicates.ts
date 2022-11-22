import Classless_weapons from './weapons/Classless_weapons.json';
import Magic_weapons from './weapons/Magic_weapons.json';
import Melee_weapons from './weapons/Melee_weapons.json';
import Rogue_weapons from './weapons/Rogue_weapons.json';
import Summon_weapons from './weapons/Summon_weapons.json';
import Ranged_weapons from './weapons/Ranged_weapons.json';

import * as fs from 'fs';
export const deleteDuplicates = () => {
  const labels: any[] = [
    ['Melee_weapons', Melee_weapons],
    ['Ranged_weapons', Ranged_weapons],
    ['Magic_weapons', Magic_weapons],
    ['Summon_weapons', Summon_weapons],
    ['Rogue_weapons', Rogue_weapons],
    ['Classless_weapons', Classless_weapons],
  ];

  labels.forEach(([label, data]) => {
    const itemNames: string[] = [];
    const newData = data.filter((item: any) => {
      if (!itemNames.includes(item.itemName)) {
        itemNames.push(item.itemName);
        return item;
      }
    });
    fs.writeFileSync(
      `./weapons/${label}.json`,
      JSON.stringify(newData, null, 2)
    );
  });
};

deleteDuplicates();
