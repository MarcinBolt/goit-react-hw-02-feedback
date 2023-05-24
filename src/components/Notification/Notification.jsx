import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    return <h5 className={css.notification}>{this.props.message}</h5>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
