import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const propTypes = {
  letter: PropTypes.string.isRequired,
};

const LetterDivider = ({ letter }) => (
  <div className="letter-divider" key={letter}>
    {letter}
  </div>
);

LetterDivider.propTypes = propTypes;

export default LetterDivider;
