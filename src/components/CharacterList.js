import CharacterItem from './CharacterItem';
const CharacterList = (props) => {
  const html =
    props.characterData.length !== 0 ? (
      props.characterData.map((character) => (
        <li key={character.id}>
          <CharacterItem character={character} />
        </li>
      ))
    ) : (
      <p className="noexist">We can´t find this character 😓 </p>
    );

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
