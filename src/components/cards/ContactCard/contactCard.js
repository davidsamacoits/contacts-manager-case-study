import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as Icons from 'react-icons/lib/md';

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
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

const defaultProps = {
  firstName: '',
  lastName: '',
  picture: '',
  id: '',
  jobTitle: '',
  className: '',
  type: CARD_TYPES.BIG,
  onClick: () => {},
  onDelete: () => {},
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
    onClick,
    onDelete,
  } = props;
  // Get initials
  const getInitials = () => `${firstName.charAt(0)}${lastName.charAt(0)}`;
  // Get name
  const getName = () => `${firstName} ${lastName}`;
  return (
    <div
      id={id}
      className={cx(className, 'contact-card', { 'contact-card--small': type === CARD_TYPES.SMALL })}
      onClick={() => onClick()}
      onKeyPress={() => onClick()}
      role="button"
      tabIndex={0}
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
          <button
            className="contact-card__bt-delete"
            onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          >
            <Icons.MdClose size={22} />
          </button>
        </div>
        {type === CARD_TYPES.BIG &&
        <div className="contact-card__picture" style={{ backgroundImage: `url(${picture})` }} />
          }
        <div className="contact-card__footer">
          {jobTitle}
        </div>
      </div>
    </div>
  );
};

ContactCard.defaultProps = defaultProps;
ContactCard.propTypes = propTypes;

export default ContactCard;
