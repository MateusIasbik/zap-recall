import Footer from "./components/Footer";
import Questions from "./components/Questions";
import Top from "./components/Top";
import styled from "styled-components"

export default function QuestionFilter({question, answer}) {

    return (
        <Container>
          <Top />
          <Questions question={question} answer={answer}/>
          <Footer />
        </Container>
    )
  }
  
  const Container = styled.div`
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  `