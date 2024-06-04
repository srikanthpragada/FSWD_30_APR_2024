import React from 'react'
import PropTypes from 'prop-types';

export default function Customer(props) {
  return (
      <>
          <h2>{props.name}</h2>
          <h3>{props.email}</h3>
          <h3>{props.age}</h3>
      </>
  )
}

Customer.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};
