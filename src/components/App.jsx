import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // feedbackButtonHandle = (buttonValueTarget) => {
  //   console.log(buttonValueTarget);
  //   // let buttonValueTarget = e.target.value;
  //   if (buttonValueTarget === 'good') {
  //     return this.setState((state, props) => ({
  //       good: state.good + props.step,
  //     }));
  //   }
  //   if (buttonValueTarget === 'neutral') {
  //     return this.setState((state, props) => ({
  //       neutral: state.neutral + props.step,
  //     }));
  //   }
  //   if (buttonValueTarget === 'bad') {
  //     return this.setState((state, props) => ({
  //       bad: state.bad + props.step,
  //     }));
  //   }
  // };

  incrementTargetStateKey = stateKey =>
    this.setState(prevState => {
      return { [stateKey]: prevState[stateKey] + 1 };
    });

  onLeaveFeedback = e => {
    this.incrementTargetStateKey(e.target.textContent);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    // this.total = good + neutral + bad;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (good || neutral || bad) {
      const totalPositiveFeedbackPercentageCounter = Math.round(
        (100 * good) / (good + neutral + bad)
      );
      return totalPositiveFeedbackPercentageCounter;
    }
    return 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
