import FilterByCharacter from './FilterByCharacter';
const Filters = (props) => {
  return (
    <>
      <form action="" className="form">
        <FilterByCharacter
          characterName={props.characterName}
          handleCharacter={props.handleCharacter}
        />
      </form>
    </>
  );
};

export default Filters;
