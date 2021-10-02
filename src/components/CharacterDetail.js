const CharacterDetail = (props) => {
  return (
    <section className="ul__list__containerCharacter">
      <img
        src={props.character.image}
        alt="character img"
        title="image"
        className="ul__list__containerCharacter__img"
      />
      *
      <p className="ul__list__containerCharacter__p">
        👤
        {props.character.name}
      </p>
      <p className="ul__list__containerCharacter__p">
        👽
        {props.character.species}
      </p>
      <p className="ul__list__containerCharacter__p">
        💀
        {props.character.status}
      </p>
      <p className="ul__list__containerCharacter__p">
        🌌{props.character.origin.name}
      </p>
      <p className="ul__list__containerCharacter__p">
        📼
        {props.character.episode}
      </p>
    </section>
  );
};

export default CharacterDetail;
