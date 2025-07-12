import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
const EditQuestions = ({ questions, onEditQuestions, onDeleteQuestions }) => {
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const temp = questions.filter((que) =>
      que.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-[50px]">
      <form className="w-[700px] flex flex-row h-[40px]">
        <input
          type="text"
          className="w-full"
          name="message"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="w-[100px] bg-sky-500" onClick={handleSearch}>
          Search
        </button>
      </form>
      <p className="text-white text-[60px] font-alfa">Ini ngedit soal</p>
      {questions
        .filter((que) =>
          que.question.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestions}
            onEditQuestion={onEditQuestions}
            setMessage={setMessage}
          />
        ))}
      {message && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
          {message}
        </div>
      )}
    </div>
  );
};

export default EditQuestions;
