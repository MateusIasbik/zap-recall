import React, { useState } from 'react'
import Buttons from './Buttons'
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import erro from "../assets/icone_erro.png"
import certo from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import styled from "styled-components"

export default function Question({ card, index, counter, setCounter }) {

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
                            showAnswer === 2 ? card.answer :
                                showAnswer >= 3 ? (`Pergunta ${index + 1}`) :
                                    undefined
                }
            </span>

            {(showAnswer === 0 || showAnswer === 1 || showAnswer === 3 || showAnswer === 4 || showAnswer === 5) && (
                <StyledImg $showAnswer={showAnswer}
                    src={
                        showAnswer === 0 ? play :
                            showAnswer === 1 ? virar :
                                showAnswer === 3 ? erro :
                                    showAnswer === 4 ? quase :
                                        showAnswer === 5 ? certo :
                                            undefined
                    }

                    alt={
                        showAnswer === 0 ? "play" :
                            showAnswer === 1 ? "virar" :
                                undefined
                    }

                    onClick={AnswerCard}

                    disabled={showAnswer >= 3}
                />
            )}

            {showAnswer === 2 ? (
                <Buttons showAnswer={showAnswer} setShowAnswer={setShowAnswer} counter={counter} setCounter={setCounter} />
            ) : undefined}

        </BoxQuestions >
    )
}

const BoxQuestions = styled.li`
    background-color: ${({ $showAnswer }) => (($showAnswer === 1 || $showAnswer === 2) ? "#FFFFD4" : "#FFF")};
    width: 300px;
    height: ${({ $showAnswer }) => (($showAnswer === 1 || $showAnswer === 2) ? "131px" : "65px")};
    margin-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items:  ${({ $showAnswer }) => (($showAnswer === 1 || $showAnswer === 2) ? "end" : "center")};
    padding: 0 15px;
    transition: background-color 0.5s, height 0.5s;

    span {
        margin-right: 10px;
        line-height: 22px;
        height: ${({ $showAnswer }) => (($showAnswer === 1 || $showAnswer === 2) ? "90%" : "100%")};
        font-family: "Recursive", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: ${({ $showAnswer }) =>
        ($showAnswer === 3) ? "#FF3030" :
            ($showAnswer === 4) ? "#FF922E" :
                ($showAnswer === 5) ? "#2FBE34" :
                    "#333333"}; 
        display: flex;
        text-decoration: ${({ $showAnswer }) => (($showAnswer === 3 || $showAnswer === 4 || $showAnswer === 5) ? "line-through" : "")};
        align-items: ${({ $showAnswer }) => (($showAnswer === 1 || $showAnswer === 2) ? "" : "center")};
    }
    `

const StyledImg = styled.img`
    width: 23px;
    height: ${({ $showAnswer }) => (($showAnswer === 1 || $showAnswer === 2) ? "20px" : "23px")};
    display: flex;
    align-items: ${({ $showAnswer }) => (($showAnswer === 1 || $showAnswer === 2) ? "start" : "center")};
    margin-bottom: ${({ $showAnswer }) => (($showAnswer === 1) ? "10px" : $showAnswer === 2 ? "20px" : "0px")};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`