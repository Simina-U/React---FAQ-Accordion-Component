import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
