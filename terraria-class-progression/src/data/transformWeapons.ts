import Classless_weapons from './weapons/Classless_weapons.json';
import Magic_weapons from './weapons/Magic_weapons.json';
import Melee_weapons from './weapons/Melee_weapons.json';
import Rogue_weapons from './weapons/Rogue_weapons.json';
import Summon_weapons from './weapons/Summon_weapons.json';
import Ranged_weapons from './weapons/Ranged_weapons.json';
import Combat_Accessories from './accessories/Combat_Accessories.json';
import Fishing_Accessories from './accessories/Fishing_Accessories.json';
import Mining_Accessories from './accessories/Mining_Accessories.json';
import Movement_Accessories from './accessories/Movement_Accessories.json';
import Restorative_Accessories from './accessories/Restorative_Accessories.json';
import Revengeance_Accessories from './accessories/Revengeance_Accessories.json';
import Armors from './armors/armors.json';
import * as fs from 'fs';

export const tryTransformLink = (link: string): string =>
  link ? link.replace(/\/revision\/latest\?cb=\d+$/, '') : link;
const transformArmorLinks = ({
  id,
  armorName,
  armorImg,
  armorDefenses,
  armorDesc,
  craftingItems,
}: any): any => ({
  armorName,
  armorImg: tryTransformLink(armorImg),
  armorDefenses,
  armorDesc,
  craftingItems: craftingItems.map((item: any) =>
    item.map((entry: any) => tryTransformLink(entry))
  ),
});
const transformLinks = ({
  id,
  itemName,
  itemIcon,
  itemSpecs,
  craftingStations,
  craftingIngredients,
}: any): any => ({
  id,
  itemName,
  itemIcon: tryTransformLink(itemIcon),
  itemSpecs: itemSpecs.map((spec: any) =>
    spec.map((entry: any) => tryTransformLink(entry))
  ),
  craftingStations: craftingStations.map((spec: any) =>
    spec.map((entry: any) => tryTransformLink(entry))
  ),
  craftingIngredients: craftingIngredients.map((spec: any) =>
    spec.map((entry: any) => tryTransformLink(entry))
  ),
});

const items: Object = {
  weapons: [
    ['Classless_weapons', Classless_weapons],
    ['Magic_weapons', Magic_weapons],
    ['Melee_weapons', Melee_weapons],
    ['Rogue_weapons', Rogue_weapons],
    ['Summon_weapons', Summon_weapons],
    ['Ranged_weapons', Ranged_weapons],
  ],

  accessories: [
    ['Combat_Accessories', Combat_Accessories],
    ['Fishing_Accessories', Fishing_Accessories],
    ['Mining_Accessories', Mining_Accessories],
    ['Movement_Accessories', Movement_Accessories],
    ['Restorative_Accessories', Restorative_Accessories],
    ['Revengeance_Accessories', Revengeance_Accessories],
  ],
  armors: [['Armors', Armors]],
};

for (const [key, value] of Object.entries(items)) {
  value.forEach((el: any) => {
    const label = el[0];
    const value = el[1];

    const newFile = value.map((item: any) => {
      if (label === 'Armors') {
        return transformArmorLinks(item);
      }
      return transformLinks(item);
    });
    console.log(label);

    fs.writeFileSync(
      `./${key}/${label}.json`,
      JSON.stringify(newFile, null, 2)
    );
  });
}
