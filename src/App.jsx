import React from 'react';
import QuestionFilter from "./QuestionFilter";
import CARDS from "./questionsList"

export default function App() {
  return <QuestionFilter cards={CARDS} />
}