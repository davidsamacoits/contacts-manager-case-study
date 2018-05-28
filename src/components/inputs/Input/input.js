import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

const propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

const defaultProps = {
  className: '',
  placeholder: null,
  name: null,
  value: '',
  onChange: () => {},
  label: '',
};

const Input = (props) => {
  const {
    type,
    name,
    value,
    id,
    className,
    placeholder,
    onChange,
    label,
  } = props;

  const inputToRender = () => (
    <input
      type={type}
      name={name}
      id={id}
      className={cx('input', className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
  return (
    <div className="input-container">
      {label ? (
        <label htmlFor={id}>
          <span className="label">{ label }</span>
          {inputToRender()}
        </label>
      ) : (
        inputToRender()
      )}
    </div>
  );
};

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
