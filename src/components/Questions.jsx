import React from 'react';
import Question from "./Question";
import styled from "styled-components"


export default function Questions(props) {

    console.log(props)

    return (
        <BoxQuestion>
            {props.props.map(element => {
                return <Question element={element}/>
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

