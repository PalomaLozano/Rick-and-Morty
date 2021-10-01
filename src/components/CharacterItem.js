const CharacterItem = (props) => {
  return (
    <>
      <img src={props.character.image} alt="character img" title="image" />
      <p>{props.character.name}</p>
      <p>{props.character.species}</p>
      <p>{props.character.status}</p>
    </>
  );
};

export default CharacterItem;
