import { useState } from 'react';
import allAccessories from '../../data/accessories/allAccessories.json';
import { ItemInfo } from '../ItemInfo/ItemInfo';

export const Accessories = () => {
  const [currentAccessory, setCurrentAccessory] = useState(7000);
  return (
    <div>
      <select
        name='weapons'
        id='weapons'
        onChange={e => setCurrentAccessory(Number(e.target.value))}>
        <optgroup label='Weapons'>
          {allAccessories.map(el => {
            return (
              <option key={el.id} value={el.id}>
                {el.itemName}
              </option>
            );
          })}
        </optgroup>
      </select>
      <ItemInfo itemId={currentAccessory} itemsData={allAccessories} />
    </div>
  );
};
