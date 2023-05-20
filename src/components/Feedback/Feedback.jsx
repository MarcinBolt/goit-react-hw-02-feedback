import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Feedback.module.css';
// import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    step: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  feedbackButtonHandle = e => {
    // let buttonValueTarget = e.target.value;
    // console.log(buttonValueTarget);
    if (e.target.textContent === 'Good') {
      return this.setState((state, props) => ({
        good: state.good + props.step,
      }));
    }
    if (e.target.textContent === 'Neutral') {
      return this.setState((state, props) => ({
        neutral: state.neutral + props.step,
      }));
    }
    if (e.target.textContent === 'Bad') {
      return this.setState((state, props) => ({
        bad: state.bad + props.step,
      }));
    }
  };

  countTotalFeedback = (good, neutral, bad) => {
    const totalFeedbackCounter = good + neutral + bad;
    return totalFeedbackCounter;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const totalPositiveFeedbackPercentageCounter =
      (100 * good) / (good + neutral + bad);
    if (totalPositiveFeedbackPercentageCounter) {
      return Math.round(totalPositiveFeedbackPercentageCounter);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      <>
        <div className={css.feedbackDiv}>
          <h1 className={css.feedbackTitle}>Please leave feedback</h1>
          <div className={css.buttonsDiv}>
            <button
              type="button"
              value="good"
              className={css.feedbackButton}
              onClick={this.feedbackButtonHandle}
            >
              Good
            </button>
            <button
              type="button"
              value="neutral"
              className={css.feedbackButton}
              onClick={this.feedbackButtonHandle}
            >
              Neutral
            </button>
            <button
              type="button"
              value="bad"
              className={css.feedbackButton}
              onClick={this.feedbackButtonHandle}
            >
              Bad
            </button>
          </div>
        </div>
        {(good || neutral || bad) !== 0 && (
          <section className={css.statisticDiv}>
            <h2 className={css.statisticTitle}>Statistics</h2>
            <p className={css.statisticParagraph}>
              Good:
              <span>{good}</span>
            </p>
            <p className={css.statisticParagraph}>
              Neutral: <span>{neutral}</span>
            </p>
            <p className={css.statisticParagraph}>
              Bad: <span>{bad}</span>
            </p>
            <p className={css.statisticParagraph}>
              Total: <span>{this.countTotalFeedback(good, neutral, bad)}</span>
            </p>
            <p className={css.statisticParagraph}>
              Positive feedback:{' '}
              <span>
                {this.countPositiveFeedbackPercentage(good, neutral, bad)}%
              </span>
            </p>
          </section>
        )}

        {/* <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercentage={this.countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        ></Statistics> */}
      </>
    );
  }
}

export default Feedback;
