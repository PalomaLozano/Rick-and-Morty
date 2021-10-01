import CharacterItem from './CharacterItem';
const CharacterList = (props) => {
  const html = props.characterData.map((character, id) => (
    <li key="id" className="name">
      <CharacterItem character={character} />
    </li>
  ));
  return <ul>{html}</ul>;
};

export default CharacterList;
