import React, { Component } from 'react';
import Word from '../../components/Word/Word';
import languageApi from '../../services/language-api-service';
import Button from '../../components/Button/Button';
import './Dashboard.css';

class DashboardRoute extends Component {
  state = {
    language: {},
    words: []
  }

  componentDidMount = () => {
    languageApi.getAllLanguage()
      .then(res => {
        this.setState({
          language: res.language,
          words: res.words
        })
      })
  }

  render() {
    let counter = 0;
    // let listOfWords = [<Word incoming={{
    //   original: 'Word',
    //   correct_count: 'Correct Counter',
    //   incorrect_count: 'Incorrect Counter'
    // }}/>]

    let listOfWords = this.state.words.map(word => {
      counter += word.correct_count;
      return (<Word incoming={word} />);
    });

    return (
      <section className='dashboard'>
        <h2>{this.state.language.name}<span className='total-counter'>Total Correct: {counter}</span></h2>
        <div className='word-container'>
          <div className='sub-word'>
            <h3>Word</h3>
          </div>
          <div className='sub-word-small'>
            <h3>Correct Counter</h3>
          </div>
          <div className='sub-word-small'>
            <h3>Incorrect Counter</h3>
          </div>
        </div>
        {listOfWords}
        <Button type='submit' className='start-button'>
          Sign up
        </Button>
      </section>
    );
  }
}

export default DashboardRoute
