import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <>
      <p className="data">character info</p>
      <section className="containerCharacter">
        <div className="containerCharacter__all">
          <img
            src={props.character.image}
            alt="character img"
            title="img"
            className="containerCharacter__img"
          />

          <p className="containerCharacter__p">
            👤
            {props.character.name}
          </p>
          <p className="containerCharacter__p">
            {props.character.species === 'Human' ? '👽Human' : '👾Alien'}
          </p>
          <p className="containerCharacter__p">
            {props.character.status === 'Alive' ? '🤍Alive' : '💀Death'}
          </p>
          <p className="containerCharacter__p">
            🌌{props.character.origin.name}
          </p>
          <p className="containerCharacter__p">
            📼
            {props.character.episode}
          </p>
          <button className="containerCharacter__btn">
            <Link to="/">
              <p className="containerCharacter__btn_p">Go back "burp"</p>
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default CharacterDetail;
