import React, { useState } from "react";

const QuestionCard = ({ onEditQuestion, onDeleteQuestion, question }) => {
  const inisialState = {
    id: question.id,
    question: question.question,
    options: {
      A: question.options.A,
      B: question.options.B,
      C: question.options.C,
      D: question.options.D,
    },
    answer: question.answer,
  };
  const [edit, setEdit] = useState(inisialState);
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("options.")) {
      const optionKey = name.split(".")[1];

      setEdit((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          [optionKey]: value,
        },
      }));
    } else {
      setEdit((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSave = () => {
    setIsEdit(!isEdit);
    onEditQuestion(edit.id, edit);
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm("Yakin mau menghapus soal ini?");
    onDeleteQuestion(edit.id);
  };
  return (
    <div className="bg-white justify-center w-[700px] gap-[8px] rounded-[20px] px-[20px] py-[10px]">
      {!isEdit ? (
        <div className="flex flex-col gap-2 font-alfa text-red-900">
          <p>Soal : {edit.question}</p>
          <p>A. {edit.options.A}</p>
          <p>B. {edit.options.B}</p>
          <p>C. {edit.options.C}</p>
          <p>D. {edit.options.D}</p>
          <p>Jawaban : {edit.answer}</p>
        </div>
      ) : (
        <form className="flex flex-col gap-2 font-alfa text-sky-900">
          <input
            name="question"
            value={edit.question}
            onChange={handleChange}
          />
          <input
            name="options.A"
            value={edit.options.A}
            onChange={handleChange}
          />
          <input
            name="options.B"
            value={edit.options.B}
            onChange={handleChange}
          />
          <input
            name="options.C"
            value={edit.options.C}
            onChange={handleChange}
          />
          <input
            name="options.D"
            value={edit.options.D}
            onChange={handleChange}
          />
          <input name="answer" value={edit.answer} onChange={handleChange} />
        </form>
      )}
      <div className="flex justify-end">
        {!isEdit && (
          <button
            className=" bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded mx-[20px]"
            onClick={() => setIsEdit(!isEdit)}
          >
            Edit
          </button>
        )}
        {isEdit && (
          <button
            className=" bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded mx-[20px]"
            onClick={handleSave}
          >
            Save
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
