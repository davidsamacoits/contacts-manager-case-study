import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ContactForm from '../../forms/ContactForm';

import './style.css';

const propTypes = {
  contact: PropTypes.object,
  className: PropTypes.string,
};

const defaultProps = {
  contact: {},
  className: '',
};

const Panel = (props) => {
  const {
    contact,
    className,
  } = props;
  return (
    <div className={cx('sidepanel', className)}>
      {contact && contact.picture &&
        <div className="panel-picture-container">
          <img src={contact.picture} className="panel-picture" alt={`${contact.firstName} ${contact.lastName}`} />
        </div>
      }
      <ContactForm contact={contact} />
    </div>
  );
};

Panel.defaultProps = defaultProps;
Panel.propTypes = propTypes;

export default Panel;
