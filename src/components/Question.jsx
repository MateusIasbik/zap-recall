import React from 'react';
import styled from "styled-components"

export default function Question({card}) {


    
    return (
        <>
            <ul>
                <BoxQuestions>
                    <span>{card.question}</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>
            </ul>
        </>
    )
}

const BoxQuestions = styled.li`
    background-color: #FFF;
    width: 300px;
    height: 65px;
    margin-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    span {
        margin-right: 10px;
        font-family: "Recursive", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }

    ion-icon {
        font-weight: 700;
        font-size: 30px;
        color: #333333;
    }
`