import React, { useState } from 'react'
import CARDS from "./questionsList"
import QuestionFilter from './components/QuestionFilter'

export default function App() {

  const [counter, setCounter] = useState(0);

  return <QuestionFilter cards={CARDS} counter={counter} setCounter={setCounter} />
}