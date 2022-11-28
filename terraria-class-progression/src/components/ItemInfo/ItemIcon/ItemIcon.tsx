import React from 'react';

interface Props {
  itemIcon: string;
  itemName: string | undefined;
}

export const ItemIcon = ({ itemIcon, itemName }: Props): JSX.Element => {
  return <img className='item--weapon' src={itemIcon} alt={itemName} />;
};
