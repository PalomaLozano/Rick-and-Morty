import FilterByCharacter from './FilterByCharacter';
import FilterBySpecie from './FilterBySpecie';
import FilterByLocalization from './FilterByLocalization';
const Filters = (props) => {
  return (
    <>
      <form action="" className="form">
        <FilterByCharacter
          characterName={props.characterName}
          handleCharacter={props.handleCharacter}
        />
        <FilterBySpecie
          characterSpecies={props.characterSpecies}
          handleSpecies={props.handleSpecies}
        />
        <FilterByLocalization
          characterLocation={props.characterLocation}
          handleLocation={props.handleLocation}
        />
      </form>
    </>
  );
};

export default Filters;
