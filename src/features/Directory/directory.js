import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as Icons from 'react-icons/lib/md';

import ContactCard from '../../components/cards/ContactCard';
import LetterDivider from '../../components/dividers/LetterDivider';
import Input from '../../components/inputs/Input';
import Panel from '../../components/layouts/Panel';
import NotificationBox from '../../components/notifications/NotificationBox';

import { CARD_TYPES } from '../../components/cards/ContactCard/constants';

import { ORDER, PANEL_STATUS, INPUT_TYPES } from '../../constants';

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
  searchContact: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  contactDetailLoadRequest: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  contactDetailReset: PropTypes.func.isRequired,
  notification: PropTypes.string.isRequired,
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
    searchContact,
    search,
    contactDetailLoadRequest,
    contact,
    contactDetailReset,
    notification,
  } = props;

  let currentLetter = '';

  const openSidePanel = () => {
    // Forcing empty contact detail before opening it
    if (panelStatus === PANEL_STATUS.CLOSE) {
      contactDetailReset();
    }
    tooglePanel();
  };

  const renderLetterDivider = (letter) => {
    if (letter !== currentLetter) {
      currentLetter = letter;
      return (
        <LetterDivider letter={currentLetter} key={currentLetter} />
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
      key={item.id}
      onClick={() => contactDetailLoadRequest(item.id)}
      onDelete={() => contactDeleteRequest(item.id)}
    />,
  ]));

  return ([
    <div className={cx('directory', { 'directory--panel-open': panelStatus === PANEL_STATUS.OPEN })} key="directory">
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
          <Input
            type={INPUT_TYPES.TEXT}
            id="search-input"
            name="search-input"
            className="search-input"
            placeholder="Search..."
            onChange={e => searchContact(e.target.value)}
            value={search}
          />
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
      {notification &&
        <NotificationBox content={notification} />
      }
      <div className="contacts-container">
        {contacts && contacts.length ? renderContacts() : (
          <p className="contacts--empty">Oops, it is a bit empty here <span role="img" aria-label=":(">🙈</span></p>
        )}
      </div>
      <button
        className="add-contact__bt"
        onClick={() => openSidePanel()}
      >
        {panelStatus === PANEL_STATUS.OPEN ? (
          <Icons.MdClose size={38} />
        ) : (
          <Icons.MdAdd size={38} />
        )}
      </button>
    </div>,
    <Panel
      contact={contact}
      key="panel"
      className={cx({ 'sidepanel--open': panelStatus === PANEL_STATUS.OPEN })}
    />,
  ]);
};

Directory.propTypes = propTypes;

export default Directory;
