import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import FilterAnswer from "./FilterAnswer";
const EditQuestions = ({ questions, onEditQuestions, onDeleteQuestions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAnswer, setSearchAnswer] = useState("ALL");
  const [showSearchAnswer, setShowSearchAnswer] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredQuestions = questions
    .filter((q) => q.question.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((q) => (searchAnswer === "ALL" ? true : q.answer === searchAnswer));
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
      {showSearchAnswer ? (
        <FilterAnswer
          setSearchAnswer={setSearchAnswer}
          setShowSearchAnswer={setShowSearchAnswer}
        />
      ) : (
        <button
          onClick={() => setShowSearchAnswer(!showSearchAnswer)}
          className="bg-sky-700 w-[500px] h-[50px] text-white rounded-lg"
        >
          Cari berdasarkan Jawaban
        </button>
      )}
      <p className="text-white text-[60px] font-alfa">Ini ngedit soal</p>
      {filteredQuestions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          onDeleteQuestion={onDeleteQuestions}
          onEditQuestion={onEditQuestions}
        />
      ))}
    </div>
  );
};

export default EditQuestions;
