import React, { Component } from 'react';
import css from './Notification.module.css'

export class Notification extends Component {
  render() {
    return <h5 className={ css.notification} >No feedback given</h5>;
  }
}
