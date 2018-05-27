import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as Icons from 'react-icons/lib/md';
import uniqueId from 'lodash/uniqueId';

import ContactCard from '../../components/cards/ContactCard';
import LetterDivider from '../../components/dividers/LetterDivider';

import { CARD_TYPES } from '../../components/cards/ContactCard/constants';

import { ORDER, PANEL_STATUS } from '../../constants';

import './style.css';

const propTypes = {
  contacts: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
  typeCard: PropTypes.string.isRequired,
  changeTypeCard: PropTypes.func.isRequired,
  changeOrder: PropTypes.func.isRequired,
  contactDeleteRequest: PropTypes.func.isRequired,
  panelStatus: PropTypes.string.isRequired,
  tooglePanel: PropTypes.func.isRequired,
};

const Directory = (props) => {
  const {
    contacts,
    order,
    typeCard,
    changeTypeCard,
    changeOrder,
    contactDeleteRequest,
    panelStatus,
    tooglePanel,
  } = props;

  let currentLetter = '';

  const renderLetterDivider = (letter) => {
    if (letter !== currentLetter) {
      currentLetter = letter;
      return (
        <LetterDivider letter={currentLetter} key={uniqueId(currentLetter)} />
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
      key={uniqueId(item.id)}
      onClick={() => console.log('>>>> CLICK', item.id)}
      onDelete={() => contactDeleteRequest(item.id)}
    />,
  ]));

  return ([
    <div className={cx('directory', { 'directory--panel-open': panelStatus === PANEL_STATUS.OPEN })}>
      <header>
        <div className="filters-container">
          <div className="filters-order">
            <span className="filters-name"><Icons.MdFilterList size={28} /></span>
            <button
              className={cx('filters-order__btn', { 'filters-order__btn--active': order === ORDER.ASC })}
              onClick={() => changeOrder(ORDER.ASC)}
            >A-Z
            </button>
            <button
              className={cx('filters-order__btn', { 'filters-order__btn--active': order === ORDER.DESC })}
              onClick={() => changeOrder(ORDER.DESC)}
            >Z-A
            </button>
          </div>
          <div className="filters-search" />
        </div>
        <div className="card-types-switch-container">
          <button
            onClick={() => changeTypeCard(CARD_TYPES.BIG)}
            className={cx({ active: typeCard === CARD_TYPES.BIG })}
          >
            <Icons.MdViewModule size={38} />
          </button>
          <button
            onClick={() => changeTypeCard(CARD_TYPES.SMALL)}
            className={cx({ active: typeCard === CARD_TYPES.SMALL })}
          >
            <Icons.MdViewList size={38} />
          </button>
        </div>
      </header>
      <div className="contacts-container">
        {contacts.length ? renderContacts() : (
          <p className="contacts--empty">Oops, it is a bit empty here <span role="img" aria-label=":(">😞</span></p>
        )}
      </div>
      <button
        className="add-contact__bt"
        onClick={() => {
        tooglePanel();
        console.log('>>>>> TOOGLE PANEL');
      }}
      >
        <Icons.MdAdd size={38} />
      </button>
    </div>,
    <div className={cx('sidepanel', { 'sidepanel--open': panelStatus === PANEL_STATUS.OPEN })}>
      PANEL
    </div>,
  ]);
};

Directory.propTypes = propTypes;

export default Directory;
