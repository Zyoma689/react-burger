import PropTypes from 'prop-types';

export const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  uuid: PropTypes.string,
});

export const routePropTypes = PropTypes.shape({
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  computedMatch: PropTypes.object.isRequired,
});