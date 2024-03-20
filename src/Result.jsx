// src/components/Result.js
import React from 'react';

const Result = ({ score, restartQuiz }) => {
    return (
        <div className="result-container">
            <h2>Your Score: {score}</h2>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default Result;
