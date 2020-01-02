import React from 'react';
import Button from '../Button/Button';

export default function FeedbackPage(props) {

    let result = props.state.head.isCorrect? 'Correct': 'Incorrect';
    let message = props.state.head.isCorrect?'Congratulations': 'Do better next time.'

    return (
        <div className='center-container'>
            <h2>{result}</h2>
            <h3>{props.state.prevHead.nextWord}</h3>
            <p>You answered: {props.state.userGuess}</p>
            <p>The Correct Answer is: {props.state.head.answer}</p>
            <p>{message}</p>
            <Button onClick={() => props.next()}>
                Next Card?
            </Button>
        </div>
    )
}