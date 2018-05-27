import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

const propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Input = (props) => {
  const {
    type,
    name,
    id,
    className,
  } = props;
  return (
    <div className="input-container">
      <input type={type} name={name} id={id} className={cx('input', className)} />
    </div>
  );
};

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
