import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { NOTIFICATION_TYPES } from './constants';

import './style.css';

const propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
};

const defaultProps = {
  type: NOTIFICATION_TYPES.SUCCESS,
  content: '',
};

const NotificationBox = (props) => {
  const {
    type,
    content,
  } = props;
  return (
    <div className={cx(
        'notification-box',
        { 'notification-box--success': type === NOTIFICATION_TYPES.SUCCESS },
        { 'notification-box--danger': type === NOTIFICATION_TYPES.DANGER },
      )}
    >
      <p>{content}</p>
    </div>
  );
};

NotificationBox.defaultProps = defaultProps;
NotificationBox.propTypes = propTypes;

export default NotificationBox;
