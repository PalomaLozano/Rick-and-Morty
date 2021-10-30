import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import logoRaM from '../images/RaM.png';
import imgnotfound from '../images/poopybutthole.jpg';
import api from '../services/listApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import Pages from './Pages';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [characterSpecies, setCharacterSpecies] = useState('all');
  const [characterLocation, setCharacterLocation] = useState('');
  const [pages, setPages] = useState('');
  const [numPage, setNumPage] = useState(1);
  let contPage;
  const routeCharacter = useRouteMatch('/character/:id');

  useEffect(() => {
    api.bringInfo().then((response) => {
      setPages(response.pages);
    });
  }, []);

  useEffect(() => {
    api.getApi().then((initialData) => {
      setCharacterData(initialData);
    });
  }, []);

  useEffect(() => {
    api.nextPages(numPage).then((response) => {
      setCharacterData(response);
    });
  }, [numPage]);

  const characterId = routeCharacter !== null ? routeCharacter.params.id : '';

  const selectedCharacter = characterData.find(
    (character) => character.id === parseInt(characterId)
  );

  const handleCharacter = (value) => {
    setCharacterName(value);
  };

  const handleSpecies = (ev) => {
    ev.preventDefault();
    setCharacterSpecies(ev.currentTarget.value);
  };

  const handleLocation = (ev) => {
    setCharacterLocation(ev.currentTarget.value);
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
    )

    .filter((character) =>
      character.location
        .toLocaleLowerCase()
        .includes(characterLocation.toLocaleLowerCase())
    );

  const handleNextPage = (ev) => {
    contPage = numPage + 1;
    setNumPage(contPage);
  };

  const handlePrevPage = (ev) => {
    contPage = numPage - 1;
    setNumPage(contPage);
  };

  const handlePage = (value) => {
    setNumPage(value);
  };

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
                characterLocation={characterLocation}
                handleLocation={handleLocation}
              />
            </section>

            <section className="containerList">
              <Pages
                numPage={numPage}
                pages={pages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                handlePage={handlePage}
              />
              <CharacterList characterData={filteredcharacterData} />
              <Pages
                numPage={numPage}
                pages={pages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                handlePage={handlePage}
              />
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
