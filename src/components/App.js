import '../styles/App.scss';
import logoRaM from '../images/RaM.png';
import api from '../services/listApi';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';

function App() {
  const [characterData, setcharacterData] = useState([]);

  useEffect(() => {
    api.getApi().then((initialdata) => {
      setcharacterData(initialdata);
    });
  }, []);

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
        <form action="" className="form">
          <label htmlFor="text" className="form__inputlabel">
            Wubba lubba lub lub
          </label>
          <input
            type="text"
            name="name"
            id="search"
            className="form__inputform"
          />
        </form>
        <h2 className="h2">Characters</h2>
        <CharacterList characterData={characterData} />
      </main>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
