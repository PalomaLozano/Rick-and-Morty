const FilterByCharacter = (props) => {
  const handleCharacter = (ev) => {
    ev.preventDefault();
    props.handleCharacter(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor="text" className="form__inputlabel">
        Wubba lubba lub lub
      </label>
      <input
        type="text"
        name="name"
        id="search"
        className="form__inputform"
        placeholder="🔍Name"
        value={props.characterName}
        onChange={handleCharacter}
      />
    </>
  );
};

export default FilterByCharacter;
