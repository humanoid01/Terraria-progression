import { useState } from 'react';
import allAccessories from '../../data/accessories/allAccessories.json';
import { DisplayItemInfo } from './../DisplayItem/DisplayItemInfo';

export const Accessories = () => {
  const [currentAccessory, setCurrentAccessory] = useState(7000);
  console.log(allAccessories.length);
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
      {/* <DisplayItemInfo itemId={currentAccessory} itemsData={allAccessories} /> */}
    </div>
  );
};
