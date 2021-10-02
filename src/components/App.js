import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import logoRaM from '../images/RaM.png';
import api from '../services/listApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [characterName, setCharacterName] = useState('');
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

  const filteredcharacterData = characterData.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(characterName.toLocaleLowerCase())
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
              />
            </section>
            <section>
              <CharacterList characterData={filteredcharacterData} />
            </section>
          </Route>

          <Route>
            <section>
              <p>Oh! This page doesn´t exist! 😓 </p>
            </section>
          </Route>
        </Switch>
      </main>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
