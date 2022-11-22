import allWeapons from './weapons/allWeapons.json';
import allAccessories from './accessories/allAccessories.json';
import * as fs from 'fs';
export {};

const isLetter = (str: string): boolean => {
  if (str.length === 1 && str.match(/[a-z]/i)) {
    return true;
  }
  return false;
};

const transformString = (string: string): string => {
  let newStr: string = '';
  for (let i = 0; i < string.length; i++) {
    const currLetter = string[i];
    const nextLetter = string[i + 1];
    const prevLetter = string[i - 1];

    if (prevLetter) {
      if (prevLetter === '?' || prevLetter === '!') {
        newStr += currLetter;
        continue;
      }
    }
    if (
      currLetter === '!' ||
      currLetter === '?' ||
      (currLetter === '.' && nextLetter !== '.')
    ) {
      newStr += currLetter + ' ';
      continue;
    }

    if (
      nextLetter === '!' ||
      nextLetter === '?' ||
      nextLetter === '-' ||
      nextLetter === "'" ||
      nextLetter === '.'
    ) {
      newStr += currLetter;
      continue;
    }

    if (nextLetter) {
      if (
        nextLetter === nextLetter.toUpperCase() &&
        currLetter === currLetter.toUpperCase()
      ) {
        newStr += currLetter;
        continue;
      }
    }

    if (currLetter === ' ' && nextLetter === nextLetter.toUpperCase()) {
      newStr += currLetter;
      continue;
    }
    if (currLetter === '.') {
      newStr += currLetter;
      continue;
    }

    if (nextLetter === undefined) {
      return newStr + currLetter + '.';
    }
    if (nextLetter === ',') {
      newStr += currLetter;
      continue;
    }

    if (nextLetter === ' ') {
      newStr += currLetter;
      continue;
    }

    if (!isLetter(nextLetter)) {
      if (!isLetter(currLetter) && !isLetter(nextLetter)) {
        newStr += currLetter;
        continue;
      }
      newStr += currLetter + '.' + ' ';
      continue;
    }

    if (nextLetter.toLowerCase() !== nextLetter && currLetter) {
      newStr += currLetter + '.' + ' ';
      continue;
    }

    newStr += currLetter;
  }

  return newStr;
};

const transformItems = () => {
  const newItems = allAccessories.map((weapon: any) => {
    const { itemSpecs }: { itemSpecs: string[][] } = weapon;
    const newSpecs: string[][] = itemSpecs.map(([label, desc, buffName]) => {
      if (label.toLowerCase() === 'tooltip') {
        const newDesc = transformString(desc);
        if (buffName) {
          return [label, newDesc, buffName];
        }
        return [label, newDesc];
      }

      if (buffName) {
        return [label, desc, buffName];
      }

      return [label, desc];
    });
    newSpecs.pop();
    weapon.itemSpecs = newSpecs;

    return weapon;
  });
  fs.writeFileSync('allAccessories.json', JSON.stringify(newItems, null, 2));
};

transformItems();
