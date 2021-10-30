import { Link } from 'react-router-dom';

const CharacterItem = (props) => {
  return (
    <Link to={`./character/${props.character.id}`}>
      <section className="ul__list__containerCharacter">
        <img
          src={props.character.image}
          alt="character img"
          title="image"
          className="ul__list__containerCharacter__img"
        />
        <p className="ul__list__containerCharacter__p">
          👤
          {props.character.name}
        </p>
        <p className="ul__list__containerCharacter__p">
          {props.character.species === 'Human' ? '👽Human' : '👾Alien'}
        </p>
        <p className="ul__list__containerCharacter__p">
          {props.character.status === 'Alive' ? '🤍Alive' : '💀Death'}
        </p>
        <p className="ul__list__containerCharacter__location">
          🌌{props.character.location}
        </p>
      </section>
    </Link>
  );
};

export default CharacterItem;
