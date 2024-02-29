import React, { useState } from "react";

function QuestionItem({ question, id, answers, prompt, correctIndex, handleDelete}) {

  const [newIndex, setNewIndex]=useState(correctIndex);

  function handleIndexChange(e) {
    fetch("http://localhost:4000/questions/"+question.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({correctIndex: e.target.value})
    })
    .then(response=>response.json())
    .then(data=>{
      setNewIndex(data.correctIndex)
      console.log(data)
    })}

  // const { id, prompt, answers, correctIndex } = question;
  //commented out above line (came with lab) and imported props the way I wanted to
  //20 mins later - had to import regular question as a prop anyway so I can handle delete in here.
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleIndexChange}>{options}</select>
      </label>
      <button onClick={()=>handleDelete(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
