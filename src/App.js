import Feedback from './components/Feedback/Feedback';
import React, { Component } from 'react';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  feedbackIncrease = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackIncrease}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
