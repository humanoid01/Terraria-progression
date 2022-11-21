import Classless_weapons from './weapons/Classless_weapons.json';
import Magic_weapons from './weapons/Magic_weapons.json';
import Melee_weapons from './weapons/Melee_weapons.json';
import Rogue_weapons from './weapons/Rogue_weapons.json';
import Summon_weapons from './weapons/Summon_weapons.json';
import Ranged_weapons from './weapons/Ranged_weapons.json';
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
