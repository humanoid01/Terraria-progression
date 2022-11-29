export type Specs = {
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
};

export type Item = {
  id?: number;
  itemName?: string;
  itemIcon?: string;
  itemSpecs?: Specs;
  craftingStations?: string[][];
  craftingIngredients?: string[][];
};
