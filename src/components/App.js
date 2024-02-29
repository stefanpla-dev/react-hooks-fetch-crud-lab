import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List"); //enables toggle between list and form
  const [questions, setQuestions]=useState([]) //setting state here so we can pass the question data to the list below.

  useEffect(()=> {
    fetch ("http://localhost:4000/questions")
      .then(response=>response.json())
      .then(data=>{
        setQuestions(data)
        // console.log(data)
      });
  },[]); // importing question data above, setQuestions so questions can be passed as prop to list

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestions={setQuestions}/> : <QuestionList questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
