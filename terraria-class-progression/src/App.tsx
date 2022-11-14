import { ClasslessPath } from './ClassPaths/Classless/ClasslessPath';
import { MagicPath } from './ClassPaths/Magic/MagicPath';
import { MeleePath } from './ClassPaths/Melee/MeleePath';
import { RangedPath } from './ClassPaths/Ranged/RangedPath';
import { RoguePath } from './ClassPaths/Rogue/RoguePath';
import { SummonerPath } from './ClassPaths/Summoner/SummonerPath';

function App() {
  return (
    <div>
      <ClasslessPath />
      <MeleePath />
      <MagicPath />
      <RangedPath />
      <RoguePath />
      <SummonerPath />
    </div>
  );
}

export default App;
