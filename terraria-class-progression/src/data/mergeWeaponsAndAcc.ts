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
import * as fs from 'fs';
export const mergeWeapons = (...weapons: any) => {
  const mergedWeapons = weapons.reduce((current: Object[], total: Object[]) => {
    return [...current, ...total];
  });
  fs.writeFileSync(
    './weapons/allWeapons.json',
    JSON.stringify(mergedWeapons, null, 2)
  );
};

mergeWeapons(
  Classless_weapons,
  Magic_weapons,
  Melee_weapons,
  Rogue_weapons,
  Summon_weapons,
  Ranged_weapons
);

const mergeAccessories = (...accessories: any) => {
  const mergedWeapons = accessories.reduce(
    (current: Object[], total: Object[]) => {
      return [...current, ...total];
    }
  );
  fs.writeFileSync(
    './accessories/allAccessories.json',
    JSON.stringify(mergedWeapons, null, 2)
  );
};

mergeAccessories(
  Combat_Accessories,
  Fishing_Accessories,
  Mining_Accessories,
  Movement_Accessories,
  Restorative_Accessories,
  Revengeance_Accessories
);
