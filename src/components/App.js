import '../styles/App.scss';
import logoRaM from '../images/RaM.png';
function App() {
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
          <label className="form__inputlabel">Wubba lubba lub lub</label>
          <input
            type="text"
            name="name"
            id="search"
            className="form__inputform"
          />
        </form>
        <h2 className="h2">Characters</h2>
        <ul>
          <li>
            <img src="" alt=""></img>
            <p>Nombre</p>
            <p>Especie</p>
            <p>Status</p>
          </li>
        </ul>
      </main>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
