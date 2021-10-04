const FilterBySpecie = (props) => {
  return (
    <>
      <select
        className="optionSpecie"
        name="species"
        id="species"
        value={props.characterSpecies}
        onChange={props.handleSpecies}
      >
        <option value="all">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecie;
