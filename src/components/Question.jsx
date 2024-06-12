import React, { useState } from 'react';
import styled from "styled-components"
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"

export default function Question({ card, index }) {

    const [showAnswer, setShowAnswer] = useState(0);

    function AnswerCard() {
        const novoValor = showAnswer + 1;
        setShowAnswer(novoValor);
    }

    return (
        <BoxQuestions $showAnswer={showAnswer}>
            <span>
                {
                    showAnswer === 0 ? `Pergunta ${index + 1}` :
                        showAnswer === 1 ? card.question :
                            card.answer
                }
            </span>

            {showAnswer <= 1 && (
                <img
                    src={
                        showAnswer === 0 ? play :
                            showAnswer === 1 && virar
                    }

                    alt={
                        showAnswer === 0 ? "play" :
                            showAnswer === 1 && "virar"
                    }

                    onClick={AnswerCard}
                />
            )}

            {showAnswer > 1 && (
                <BoxResult>
                    <Wrong>Não Lembrei</Wrong>
                    <Almost>Quase não lembrei</Almost>
                    <Right>Zap!</Right>
                </BoxResult>
            )}

        </BoxQuestions >
    )
}

const BoxQuestions = styled.li`
    background-color: ${({ $showAnswer }) => (($showAnswer > 0) ? "#FFFFD4" : "#FFF")};
    width: 300px;
    height: ${({ $showAnswer }) => ($showAnswer ? "131px" : "65px")};
    margin-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items:  ${({ $showAnswer }) => ($showAnswer ? "end" : "center")};
    padding: 0 15px;
    transition: background-color 0.5s, height 0.5s;

    span {
        margin-right: 10px;
        line-height: 22px;
        height: ${({ $showAnswer }) => ($showAnswer ? "90%" : "100%")};
        font-family: "Recursive", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #333333;
        display: flex;
        align-items: ${({ $showAnswer }) => ($showAnswer ? "" : "center")};
    }

    img {
        width: ${({ $showAnswer }) => ($showAnswer ? "30px" : "20px")};
        height: ${({ $showAnswer }) => ($showAnswer ? "20px" : "23px")};
        display: flex;
        align-items: ${({ $showAnswer }) => ($showAnswer ? "start" : "center")};
        margin-bottom: ${({ $showAnswer }) => ($showAnswer ? "10px" : "")};
    }
`

const BoxResult = styled.li`
    font-family: "Recursive", sans-serif;
    color: #FFF;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 300px;
    height: 37px;
    margin-bottom: 10px;
`

const Wrong = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    background-color: #FF3030;
    border-radius: 5px;
    text-align: center;
`

const Almost = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    background-color: #FF922E;
    border-radius: 5px;
    text-align: center;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    background-color: #2FBE34;
    border-radius: 5px;
    text-align: center;
`