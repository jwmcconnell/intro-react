import React from 'react';
import PropTypes from 'prop-types';

const Dog = ({ dog }) => {
  const fields = Object.keys(dog)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd>{dog[key]}</dd>
        </>
      );
    });

  return (
    <dl>
      {fields}
    </dl>
  );
};

Dog.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired
  }),
};

export default Dog;
