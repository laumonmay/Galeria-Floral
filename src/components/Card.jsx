import PropTypes from "prop-types";
function Card({ name, url }) {
  return (
    <>
      <img className="list__img" src={url} alt={name} />
      <h3>{name}</h3>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
