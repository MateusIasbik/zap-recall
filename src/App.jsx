import React, { useState } from 'react';
import QuestionFilter from "./QuestionFilter";
import CARDS from "./questionsList"

export default function App() {

  const [counter, setCounter] = useState(0);

  return <QuestionFilter cards={CARDS} counter={counter} setCounter={setCounter}/>
}