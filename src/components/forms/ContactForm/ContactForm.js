import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/lib/md';

import Input from '../../inputs/Input';

import './style.css';
import NotificationBox from '../../notifications/NotificationBox';

import { NOTIFICATION_TYPES } from '../../notifications/NotificationBox/constants';

const propTypes = {
  contactSubmitted: PropTypes.func.isRequired,
  updateFieldContact: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  contact: PropTypes.object,
};

const defaultProps = {
  contact: {},
};

const ContactForm = (props) => {
  const {
    updateFieldContact,
    contactSubmitted,
    contact,
    error,
  } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    contactSubmitted();
  };

  return (
    <form className="contact-form" onSubmit={e => onSubmit(e)}>
      {error &&
        <NotificationBox type={NOTIFICATION_TYPES.DANGER} content={error} />
      }
      <Input
        type="text"
        id="firstName"
        label="First name"
        value={contact && contact.firstName}
        placeholder="Jane"
        onChange={e => updateFieldContact('firstName', e.target.value)}
      />
      <Input
        type="text"
        id="lastName"
        label="Last name"
        value={contact && contact.lastName}
        placeholder="Doe"
        onChange={e => updateFieldContact('lastName', e.target.value)}
      />
      <Input
        type="text"
        id="jobTitle"
        label="Job title"
        value={contact && contact.jobTitle}
        placeholder="Developer"
        onChange={e => updateFieldContact('jobTitle', e.target.value)}
      />
      <Input
        type="tel"
        id="phoneHome"
        label="Phone (home)"
        value={contact && contact.phoneHome}
        placeholder="514-999-9999"
        onChange={e => updateFieldContact('phoneHome', e.target.value)}
      />
      <Input
        type="tel"
        id="phoneWork"
        label="Phone (work)"
        value={contact && contact.phoneWork}
        placeholder="514-999-9991"
        onChange={e => updateFieldContact('phoneWork', e.target.value)}
      />
      <Input
        type="text"
        id="email"
        label="Email"
        value={contact && contact.email}
        placeholder="jane@doe.com"
        onChange={e => updateFieldContact('email', e.target.value)}
      />
      <Input
        type="text"
        id="picture"
        label="Picture link"
        value={contact && contact.picture}
        placeholder="https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B.jpeg"
        onChange={e => updateFieldContact('picture', e.target.value)}
      />
      <button type="submit" className="contact-form__submit">
        <Icons.MdSave size={20} />
        Save
      </button>
    </form>
  );
};

ContactForm.defaultProps = defaultProps;
ContactForm.propTypes = propTypes;

export default ContactForm;
