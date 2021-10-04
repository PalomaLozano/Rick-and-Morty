import FilterByCharacter from './FilterByCharacter';
import FilterBySpecie from './FilterBySpecie';
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
      </form>
    </>
  );
};

export default Filters;
