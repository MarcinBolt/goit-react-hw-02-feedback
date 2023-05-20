import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from '../Statistics/Statistics.module.css';
import { Notification } from 'components/Notification/Notification';

export class Statistics extends Component {
  render() {
    return (
      <>
        {!this.props.total ? (
          <Notification />
        ) : (
          <ul className={css.list}>
            <li className={css.listItem}>
              <p className={css.listItemParagraph}>
                Good:
                <span className={css.listItemSpan}>
                  {this.props.good}
                </span>
              </p>
            </li>
            <li className={css.listItem}>
              <p className={css.listItemParagraph}>
                Neutral:
                <span className={css.listItemSpan}>
                  {this.props.neutral}
                </span>
              </p>
            </li>
            <li className={css.listItem}>
              <p className={css.listItemParagraph}>
                Bad:
                <span className={css.listItemSpan}>{this.props.bad}</span>
              </p>
            </li>
            <li className={css.listItem}>
              <p className={css.listItemParagraph}>
                Total:
                <span className={css.listItemSpan}>{this.props.total}</span>
              </p>
            </li>
            <li className={css.listItem}>
              <p className={css.listItemParagraph}>
                Positive feedback:
                <span className={css.listItemSpan}>{this.props.positive}%</span>
              </p>
            </li>
          </ul>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  total: PropTypes.number,
  positive: PropTypes.number,
};
