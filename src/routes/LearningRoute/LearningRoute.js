import React, { Component } from 'react'
import PendingPage from '../../components/Pending/PendingPage';
import FeedbackPage from '../../components/Feedback/FeedbackPage';
import languageApi from '../../services/language-api-service';
import './LearningRoute.css';


class LearningRoute extends Component {

  state = {
    head: {},
    prevHead: {},
    userGuess: '',
    loading: true,
    waitingForInput: true
  }

  next = () => {
    this.setState({
      waitingForInput: true
    })
  }


  submitForm = (e) => {
    e.preventDefault();
    let guess = e.target['learn-guess-input'].value;

    if (guess) {
      this.setState({
        loading: true
      })

      languageApi.guess(guess)
        .then(resp => {
  
          if (!resp.error) {
            this.setState({
              waitingForInput: false,
              loading: false,
              prevHead: this.state.head,
              head: resp,
              userGuess: guess
            })
          }
        })
    }
  }


  componentDidMount() {
    languageApi.getHead()
      .then(resp => {
        this.setState({
          head: resp,
          loading: false
        })
      })
  }

  render() {

    let currentPage = this.state.waitingForInput ? <PendingPage head={this.state.head} submit={this.submitForm} /> : <FeedbackPage state={this.state} next={this.next} />;
    let loadingMessage = this.state.loading ? `Loading...` : null;

    let correctCounter = null;
    let incorrectCounter = null;

    if(this.state.waitingForInput) {
      correctCounter = this.state.head.wordCorrectCount;
      incorrectCounter = this.state.head.wordIncorrectCount;
    } else {
      let bool = this.state.head.isCorrect;
      if(bool) {
        correctCounter = this.state.prevHead.wordCorrectCount + 1;
        incorrectCounter = this.state.prevHead.wordIncorrectCount;
      } else if(bool === false) {
        correctCounter = this.state.prevHead.wordCorrectCount;
        incorrectCounter = this.state.prevHead.wordIncorrectCount + 1;
      } else {
        correctCounter = 0;
        incorrectCounter = 0;
      }
    }

    let currentTotalCounter = correctCounter + incorrectCounter;

    return (
      <section>
        <header id='learning-route-header'>
          <span className='counter'>All card successes: {this.state.head.totalScore}</span>
          <span className='counter'>Current card success: {`${correctCounter}/${currentTotalCounter}`}</span>
          <span className='counter'>Current card failure: {`${incorrectCounter}/${currentTotalCounter}`}</span>
        </header>
        {loadingMessage}
        {currentPage}
      </section>
    );
  }
}

export default LearningRoute
