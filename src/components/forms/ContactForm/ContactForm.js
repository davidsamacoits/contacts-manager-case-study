import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/lib/md';

import Input from '../../inputs/Input';

import './style.css';

const propTypes = {
  contact: PropTypes.object,
};

const defaultProps = {
  contact: {},
};

const ContactForm = (props) => {
  const {
    contact,
  } = props;
  return (
    <form className="contact-form">
      <Input type="text" id="firstName" label="First name" value={contact && contact.firstName} placeholder="Jane" />
      <Input type="text" id="lastName" label="Last name" value={contact && contact.lastName} placeholder="Doe" />
      <Input type="text" id="jobTitle" label="Job title" value={contact && contact.jobTitle} placeholder="Developer" />
      <Input type="text" id="phoneHome" label="Phone (home)" value={contact && contact.phoneHome} placeholder="514-999-9999" />
      <Input type="text" id="phoneWork" label="Phone (work)" value={contact && contact.phoneWork} placeholder="514-999-9991" />
      <Input type="text" id="email" label="Email" value={contact && contact.email} placeholder="jane@doe.com" />
      <Input type="text" id="picture" label="Picture link" value={contact && contact.picture} placeholder="https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B.jpeg" />
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
