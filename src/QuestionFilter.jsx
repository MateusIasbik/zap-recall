import React from 'react';
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import Top from "./components/Top";
import styled from "styled-components"

export default function QuestionFilter({cards, counter, setCounter}) {
    return (
        <Container>
          <Top />
          <Questions cards={cards} counter={counter} setCounter={setCounter}/>
          <Footer counter={counter} setCounter={setCounter}/>
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