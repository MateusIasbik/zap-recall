import styled from "styled-components"

export default function Question() {
    return (
        <>
            <ul>
                <BoxQuestions>
                    <span>Pergunta 1</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>

                <BoxQuestions>
                    <span>Pergunta 2</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>

                <BoxQuestions>
                    <span>Pergunta 3</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>

                <BoxQuestions>
                    <span>Pergunta 4</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>

                <BoxQuestions>
                    <span>Pergunta 5</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>

                <BoxQuestions>
                    <span>Pergunta 6</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>

                <BoxQuestions>
                    <span>Pergunta 7</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>

                <BoxQuestions>
                    <span>Pergunta 8</span>
                    <ion-icon name="play-outline"></ion-icon>
                </BoxQuestions>
            </ul>
        </>
    )
}

const BoxQuestions = styled.li`
    background-color: #FFF;
    color: #333333;
    width: 300px;
    height: 65px;
    margin-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;

    ion-icon {
        font-weight: 700;
        font-size: 30px;
        color: #333333;
    }
`