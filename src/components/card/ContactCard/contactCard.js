import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  picture: PropTypes.string,
};

const defaultProps = {
  firstName: '',
  lastName: '',
  picture: '',
};

const ContactCard = (props) => {
  const {
    firstName,
    lastName,
    picture,
  } = props;
  return (
    <p>{firstName}</p>
  );
};

ContactCard.defaultProps = defaultProps;
ContactCard.propTypes = propTypes;

export default ContactCard;
