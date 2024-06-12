import React from 'react';
import Question from "./Question";
import styled from "styled-components"


export default function Questions({cards}) {
    return (
        <BoxQuestion>
            {cards.map((card, index) => {
                return <Question key={index} card={card}/>
            })}
        </BoxQuestion>
    )
}

const BoxQuestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 70px;
`

