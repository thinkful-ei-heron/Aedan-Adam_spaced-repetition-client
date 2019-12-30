import React from 'react';

export default function Word(props) {

    return (
        <div className='word-container'>
            <div className='sub-word'>
                <p>{props.incoming.original}</p>
            </div>
            <div className='sub-word-small'>
                <p>{props.incoming.correct_count}</p>
            </div>
            <div className='sub-word-small'>
                <p>{props.incoming.incorrect_count}</p>
            </div>
        </div>    
    );
}