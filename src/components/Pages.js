import PropTypes from 'prop-types';

const Pages = (props) => {
  const handlePage = (ev) => {
    if (ev.target.value > props.pages) {
      props.handlePage(props.pages);
    } else {
      props.handlePage(parseInt(ev.target.value));
    }
  };
  return (
    <nav className="containerPages">
      <button
        className={props.numPage === 1 ? 'hidden' : 'containerPages__button'}
        onClick={props.handlePrevPage}
      >
        <i className="fas fa-angle-left"></i> Previous
      </button>

      <input
        onChange={handlePage}
        className="containerPages__input"
        type="number"
        max={props.pages}
        min="1"
        name="inputPage"
        id="inputPage"
        placeholder="Ej. 2"
        value={props.numPage}
      />
      <p className="containerPages__input">of {props.pages}</p>
      <button
        className={
          props.numPage === props.pages ? 'hidden' : 'containerPages__button'
        }
        onClick={props.handleNextPage}
      >
        Next <i className="fas fa-angle-right"></i>
      </button>
    </nav>
  );
};

Pages.propTypes = {
  numPage: PropTypes.number,
};

Pages.defaultProps = {
  numPage: 1,
};

export default Pages;
