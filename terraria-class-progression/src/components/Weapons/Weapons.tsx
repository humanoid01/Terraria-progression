import allWeapons from '../../data/weapons/allWeapons.json';
import { useState } from 'react';
import { ItemInfo } from '../ItemInfo/ItemInfo';

export const Weapons = () => {
  const [currentWeapon, setCurrentWeapon] = useState(1);
  return (
    <div>
      <select
        name='weapons'
        id='weapons'
        onChange={e => setCurrentWeapon(Number(e.target.value))}>
        <optgroup label='Weapons'>
          {allWeapons.map(el => {
            return (
              <option key={el.id} value={el.id}>
                {el.itemName}
              </option>
            );
          })}
        </optgroup>
      </select>
      <ItemInfo itemId={currentWeapon} itemsData={allWeapons} />
    </div>
  );
};
