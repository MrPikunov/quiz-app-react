// src/components/Quiz.js
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Question from './Question';
import Result from './Result';
import './Quiz.css'; // Import your CSS file for styling

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
            correctAnswer: 'Paris',
        },
        // Add more questions as needed
    ];

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    };

    return (
        <div className="quiz-container">
            <TransitionGroup>
                {showResult ? (
                    <CSSTransition key="result" classNames="fade" timeout={300}>
                        <Result score={score} restartQuiz={restartQuiz} />
                    </CSSTransition>
                ) : (
                    <CSSTransition key={currentQuestion} classNames="fade" timeout={300}>
                        <Question
                            question={questions[currentQuestion]}
                            handleAnswer={handleAnswer}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default Quiz;
