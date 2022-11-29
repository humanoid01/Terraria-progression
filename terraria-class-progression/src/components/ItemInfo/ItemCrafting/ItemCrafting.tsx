import './ItemCrafting.scss';

interface CraftingProps {
  craftingIngredients: string[][] | undefined;
  craftingStations: string[][] | undefined;
}

export const ItemCrafting = ({
  craftingIngredients,
  craftingStations,
}: CraftingProps) => {
  let usedIn = false;

  return (
    <div>
      <h1> Crafting: </h1>

      <h2> Crafting station(s): </h2>
      {craftingStations?.map(([img, label], i, row) => {
        return (
          <div key={i} className='ingredient'>
            <img src={img} alt={label} />
            <span> {label} </span>
            {row[i + 1] ? <div>or</div> : ''}
          </div>
        );
      })}

      {craftingIngredients?.map(([image, label, quantity], i, row) => {
        if (!label || usedIn) {
          usedIn = true;
          return '';
        }
        return (
          <div className='ingredient' key={i}>
            {i + 1 === row.length || row[i + 1].length === 1 ? 'Result: ' : ''}
            <img src={image} alt={label} title={label} />
            <span> {label} </span>
            <span> {quantity} </span>
          </div>
        );
      })}
    </div>
  );
};
