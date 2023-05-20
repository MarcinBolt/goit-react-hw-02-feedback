import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.feedbackButtonsDiv}>
        {this.props.options.map(btn => (
          <button
            className={css.feedbackButton}
            type="button"
            key={nanoid()}
            onClick={this.props.onLeaveFeedback}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};
