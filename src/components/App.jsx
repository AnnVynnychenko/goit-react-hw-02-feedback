import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = feedbackType => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    const PositiveFeedbackPercentage = Math.round((good * 100) / totalFeedback);
    if (totalFeedback === 0) {
      return 0;
    }
    return PositiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.leaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
