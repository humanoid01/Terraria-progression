interface CraftingProps {
  craftingIngredients: string[][] | undefined;
  craftingStations: string[][] | undefined;
}

export const ItemCrafting = ({
  craftingIngredients,
  craftingStations,
}: CraftingProps) => {
  return (
    <div>
      {craftingIngredients?.map(([image, label, quantity], i) => {
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
