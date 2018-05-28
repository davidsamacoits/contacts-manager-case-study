import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as Icons from 'react-icons/lib/md';

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
      {type === NOTIFICATION_TYPES.SUCCESS &&
        <p><Icons.MdCheck size={16} /> {content}</p>
      }
      {type === NOTIFICATION_TYPES.DANGER &&
        <p><Icons.MdClose size={16} /> {content}</p>
      }
    </div>
  );
};

NotificationBox.defaultProps = defaultProps;
NotificationBox.propTypes = propTypes;

export default NotificationBox;
