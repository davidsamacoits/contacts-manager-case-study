import React from 'react';
import PropTypes from 'prop-types';

import ContactCard from '../../components/cards/ContactCard';
import LetterDivider from '../../components/dividers/LetterDivider';

import './style.css';

const propTypes = {
  contacts: PropTypes.array.isRequired,
  typeCard: PropTypes.string.isRequired,
  consoleLog: PropTypes.func.isRequired,
  changeTypeCard: PropTypes.func.isRequired,
};

const Directory = (props) => {
  const {
    contacts,
    typeCard,
    consoleLog,
    changeTypeCard,
  } = props;
  consoleLog();

  let currentLetter = '';

  const renderLetterDivider = (letter) => {
    if (letter !== currentLetter) {
      currentLetter = letter;
      return (
        <LetterDivider letter={currentLetter} />
      );
    }
    return null;
  };

  const renderContacts = () => contacts.map(item => ([
    renderLetterDivider(item.lastName.charAt(0)),
    <ContactCard
      firstName={item.firstName}
      lastName={item.lastName}
      picture={item.picture}
      id={item.id}
      jobTitle={item.jobTitle}
      className="contacts-container__card"
      type={typeCard}
    />,
  ]));

  return (
    <div className="directory">
      <button onClick={() => changeTypeCard('SMALL')}>SMALL</button>
      <button onClick={() => changeTypeCard('BIG')}>BIG</button>
      <div className="contacts-container">
        {renderContacts()}
      </div>
    </div>
  );
};

Directory.propTypes = propTypes;

export default Directory;
