interface DisplayCraftingProps {
  craftingIngredients: string[][];
  craftingStations: string[][];
}

export const DisplayItemCrafting = ({
  craftingIngredients,
  craftingStations,
}: DisplayCraftingProps) => {
  console.log(craftingIngredients);
  console.log(craftingStations);

  return <div>DisplayItemCrafting</div>;
};
