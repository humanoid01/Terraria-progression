interface DisplayCraftingProps {
  craftingIngredients: string[][];
  craftingStations: string[][];
}

export const DisplayItemCrafting = ({
  craftingIngredients,
  craftingStations,
}: DisplayCraftingProps) => {
  return (
    <div>
      {craftingIngredients.map(([image, label, quantity], i) => {
        return (
          <div key={i}>
            <img src={image} alt={label} title={label} />
            <span> {label} </span>
            <span> {quantity} </span>
          </div>
        );
      })}
    </div>
  );
};
