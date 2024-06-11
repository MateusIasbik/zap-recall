import Question from "./Question";
import styled from "styled-components"


export default function Questions() {
    return (
        <BoxQuestion>
            <Question />
        </BoxQuestion>
    )
}

const BoxQuestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 70px;
`

