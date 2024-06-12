import React from 'react';
import styled from "styled-components"

export default function Answer({ card }) {
    console.log(card);
    return (
        <>
            <AnswerCard>
                oi
                {/* <span>{card.answer}</span>
                <img src="../assets/seta_virar.png" alt="seta virar" /> */}
            </AnswerCard>
        </>
    )
}

const AnswerCard = styled.div`
    background-color: #FFFFD4;
    height: 131px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
`