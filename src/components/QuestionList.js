import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, setQuestions }) {
  console.log(questions)

  function handleDelete(question) {
    let newQuestionList = questions.filter((item)=>
    item !== question)

    setQuestions(newQuestionList);
    //front end delete. makes it disappear from screen

    fetch("http://localhost:4000/questions/"+question.id, {
      method: "DELETE",
    })
      .then(response=>response.json())
      .then(data=>setQuestions(newQuestionList))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question)=>(
        <QuestionItem
          handleDelete={handleDelete}
          question={question}
          key={question.id}
          index={question.id}
          correctIndex={question.correctIndex}
          prompt={question.prompt}
          answers={question.answers}
        />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
