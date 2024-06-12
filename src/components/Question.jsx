import React, { useState } from 'react';
import styled from "styled-components"
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"

export default function Question({ card }) {
    
    const [showAnswer, setShowAnswer] = useState(false);
    const [showResult, setShowResult] = useState(false);
    
    function AnswerCard() {
        setShowAnswer(!showAnswer);
    }

    return (
        <BoxQuestions showAnswer={showAnswer}>
                <span>{showAnswer ? card.answer : card.question}</span>
                <img src={(showAnswer) ? virar : play} alt={showAnswer ? "virar" : "play"} onClick={AnswerCard} />
        </BoxQuestions>
    )
}

const BoxQuestions = styled.li`
    background-color: ${({ showAnswer }) => (showAnswer ? "#FFFFD4" : "#FFF")};
    width: 300px;
    height: ${({ showAnswer }) => (showAnswer ? "131px" : "65px")};
    margin-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items:  ${({ showAnswer }) => (showAnswer ? "end" : "center")};
    padding: 0 15px;
    transition: background-color 0.5s, height 0.5s;

    span {
        margin-right: 10px;
        height: ${({ showAnswer }) => (showAnswer ? "90%" : "100%")};
        font-family: "Recursive", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #333333;
        display: flex;
        align-items: ${({ showAnswer }) => (showAnswer ? "" : "center")};
    }

    img {
        width: ${({ showAnswer }) => (showAnswer ? "20" : "30")};
        height: 23px;
        display: flex;
        align-items: ${({ showAnswer }) => (showAnswer ? "start" : "center")};
        margin-bottom: ${({ showAnswer }) => (showAnswer ? "10px" : "")};

    }
`