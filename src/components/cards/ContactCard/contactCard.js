import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CARD_TYPES } from './constants';

import './style.css';

const propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  picture: PropTypes.string,
  id: PropTypes.string,
  jobTitle: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf([CARD_TYPES.BIG, CARD_TYPES.SMALL]),
};

const defaultProps = {
  firstName: '',
  lastName: '',
  picture: '',
  id: '',
  jobTitle: '',
  className: '',
  type: CARD_TYPES.BIG,
};

const ContactCard = (props) => {
  const {
    firstName,
    lastName,
    picture,
    id,
    jobTitle,
    className,
    type,
  } = props;
  // Get initials
  const getInitials = () => `${firstName.charAt(0)}${lastName.charAt(0)}`;
  // Get name
  const getName = () => `${firstName} ${lastName}`;
  return (
    <button
      id={id}
      className={cx(className, 'contact-card', { 'contact-card--small': type === CARD_TYPES.SMALL })}
      onClick={() => {}}
    >
      {type === CARD_TYPES.SMALL &&
      <div className="contact-card__avatar">
        <img src={picture} alt={getName()} />
      </div>
        }
      <div className="contact-card__right-block">
        <div className="contact-card__header">
          <div className="contact-card__initials">
            {getInitials()}
          </div>
          <div className="contact-card__name">
            {getName()}
          </div>
        </div>
        {type === CARD_TYPES.BIG &&
        <div className="contact-card__picture" style={{ backgroundImage: `url(${picture})` }} />
          }
        <div className="contact-card__footer">
          {jobTitle}
        </div>
      </div>
    </button>
  );
};

ContactCard.defaultProps = defaultProps;
ContactCard.propTypes = propTypes;

export default ContactCard;
