import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as Icons from 'react-icons/lib/md';

import { NOTIFICATION_TYPES } from './constants';

import './style.css';

const propTypes = {
  type: PropTypes.string,
};

const defaultProps = {
  type: NOTIFICATION_TYPES.SUCCESS,
};

const NotificationBox = (props) => {
  const {
    type,
  } = props;
  return (
    <div className={cx(
        'notification-box',
        { 'notification-box--success': type === NOTIFICATION_TYPES.SUCCESS },
        { 'notification-box--danger': type === NOTIFICATION_TYPES.DANGER },
      )}
    >
      {type === NOTIFICATION_TYPES.SUCCESS &&
        <p><Icons.MdCheck size={16} /> All set, you're good to go</p>
      }
      {type === NOTIFICATION_TYPES.DANGER &&
        <p><Icons.MdClose size={16} /> Oops something went wrong, please try again</p>
      }
    </div>
  );
};

NotificationBox.defaultProps = defaultProps;
NotificationBox.propTypes = propTypes;

export default NotificationBox;
