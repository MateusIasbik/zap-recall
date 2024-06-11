import Question from "./Question";
import styled from "styled-components"


export default function Questions({question, answer}) {
    return (
        <BoxQuestion>
            <Question question={question} answer={answer}/>
        </BoxQuestion>
    )
}

const BoxQuestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 70px;
`

