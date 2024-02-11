import PropTypes from "prop-types";

function Filter({ handleFilterTitle }) {
  const handleInput = (event) => {
    handleFilterTitle(event.currentTarget.value);
  };
  return (
    <form className="filter">
      <input
        className="filter__input"
        type="text"
        id="filter"
        name="filter"
        placeholder=" Buscar por nombre"
        onInput={handleInput}
      />
    </form>
  );
}
Filter.propTypes = {
  handleFilterTitle: PropTypes.func.isRequired,
};

export default Filter;
