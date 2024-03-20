// src/components/Question.js
import React, { useState } from 'react';


const Question = ({ question, handleAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleOptionClick = (option) => {
        setSelectedAnswer(option);
    };

    const handleSubmit = () => {
        if (selectedAnswer) {
            handleAnswer(selectedAnswer);
            setSelectedAnswer('');
        } else {
            // Optionally, you can display a message or prevent submission if no option is selected.
            console.log('Please select an answer before submitting.');
        }
    };

    return (
        <div className="question-container">
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={selectedAnswer === option ? 'selected' : ''}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
};

export default Question;

