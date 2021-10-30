const FilterByLocalization = (props) => {
  return (
    <input
      className="optionSpecie"
      type="text"
      value={props.characterLocation}
      onChange={props.handleLocation}
      placeholder="Earth"
    />
  );
};
export default FilterByLocalization;
