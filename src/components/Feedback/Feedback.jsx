import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    step: 1,
  };

  static propTypes = {};

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  feedbackButtonHandle = e => {
    let buttonAttributeTarget = e.target.getAttribute('datatype');
    if (buttonAttributeTarget === 'buttonGood') {
      return this.setState((state, props) => ({
        good: state.good + props.step,
      }));
    }
    if (buttonAttributeTarget === 'buttonNeutral') {
      return this.setState((state, props) => ({
        neutral: state.neutral + props.step,
      }));
    }
    if (buttonAttributeTarget === 'buttonBad') {
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
              datatype="buttonGood"
              className={css.feedbackButton}
              onClick={this.feedbackButtonHandle}
            >
              Good
            </button>
            <button
              type="button"
              datatype="buttonNeutral"
              className={css.feedbackButton}
              onClick={this.feedbackButtonHandle}
            >
              Neutral
            </button>
            <button
              type="button"
              datatype="buttonBad"
              className={css.feedbackButton}
              onClick={this.feedbackButtonHandle}
            >
              Bad
            </button>
          </div>
        </div>
        {(good || neutral || bad) !== 0 && (
          <div className={css.statisticDiv}>
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
          </div>
        )}
      </>
    );
  }
}

export default Feedback;
