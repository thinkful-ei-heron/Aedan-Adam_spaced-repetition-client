import React from 'react';
import Button from '../Button/Button';

export default function PendingPage(props) {
    return (
        <div className='center-container'>
            <h3>{props.head.nextWord}</h3>
            <form onSubmit={(event) => props.submit(event)}>
                <label htmlFor='learn-guess-input'>Input the translation</label>
                <input type='text' id='learn-guess-input' required></input>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}