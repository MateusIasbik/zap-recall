import React, { useState } from 'react';
import styled from "styled-components"


export default function Buttons({ setShowAnswer, counter, setCounter }) {

    return (
        <BoxResult>
            <Wrong onClick={() => {setShowAnswer(3); setCounter(counter + 1)}}>Não Lembrei</Wrong>


            <Almost onClick={() => {setShowAnswer(4); setCounter(counter + 1)}}>Quase não lembrei</Almost>


            <Right onClick={() => {setShowAnswer(5); setCounter(counter + 1)}}>Zap!</Right>
        </BoxResult>
    )
}

const BoxResult = styled.div`
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
    line-height: 14px;
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