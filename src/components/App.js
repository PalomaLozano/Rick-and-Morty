import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import logoRaM from '../images/RaM.png';
import imgnotfound from '../images/poopybutthole.jpg';
import api from '../services/listApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [characterSpecies, setCharacterSpecies] = useState('all');
  const routeCharacter = useRouteMatch('/character/:id');

  const characterId = routeCharacter !== null ? routeCharacter.params.id : '';

  const selectedCharacter = characterData.find(
    (character) => character.id === parseInt(characterId)
  );

  useEffect(() => {
    api.getApi().then((initialData) => {
      setCharacterData(initialData);
    });
  }, []);

  const handleCharacter = (value) => {
    setCharacterName(value);
  };

  const handleSpecies = (ev) => {
    ev.preventDefault();
    setCharacterSpecies(ev.currentTarget.value);
  };

  const filteredcharacterData = characterData
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(characterName.toLocaleLowerCase())
    )
    .filter(
      (character) =>
        characterSpecies === 'all' || character.species === characterSpecies
    );

  return (
    <div>
      <header className="header">
        <img
          src={logoRaM}
          alt="rick and morty logo"
          title="logo"
          className="header__logo"
        />
      </header>
      <main>
        <Switch>
          <Route exact path="/character/:id">
            <section>
              <CharacterDetail character={selectedCharacter} />
            </section>
          </Route>

          <Route exact path="/">
            <section>
              <Filters
                characterName={characterName}
                handleCharacter={handleCharacter}
                characterSpecies={characterSpecies}
                handleSpecies={handleSpecies}
              />
            </section>
            <section>
              <CharacterList characterData={filteredcharacterData} />
            </section>
          </Route>

          <Route>
            <section className="notFound">
              <div className="notFound__container">
                <img
                  src={imgnotfound}
                  alt="img not found"
                  className="notFound__img"
                />
                <p className="notFound__p">
                  Oh! We´re sorry! This page doesn´t exist! 😓
                </p>
              </div>
            </section>
          </Route>
        </Switch>
      </main>
      <footer className="footer">Created by paloma.logu</footer>
    </div>
  );
}

export default App;
