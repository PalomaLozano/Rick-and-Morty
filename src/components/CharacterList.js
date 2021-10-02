import CharacterItem from './CharacterItem';
const CharacterList = (props) => {
  const html = props.characterData.map((character) => (
    <li key={character.id}>
      <CharacterItem character={character} />
    </li>
  ));
  return (
    <>
      <h2 className="h2">Characters</h2>
      <section className="paintedSection">
        <ul className="ul__list">
          <div>{html}</div>
        </ul>
      </section>
    </>
  );
};

export default CharacterList;
