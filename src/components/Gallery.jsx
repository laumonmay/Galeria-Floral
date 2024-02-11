import Card from "./Card";
import PropTypes from "prop-types";

function Gallery({ flowers }) {
  const htmlGallery = flowers.map((flower, index) => (
    <li key={index} className="list__card">
      <Card name={flower.name} url={flower.url} />
    </li>
  ));

  return <ul className="list">{htmlGallery}</ul>;
}
Gallery.propTypes = {
  flowers: PropTypes.array,
};

export default Gallery;
