import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ massage }) {
  return <p className={s.message}>{massage}</p>;
}

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
