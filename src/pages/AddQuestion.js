import React, { useState } from "react";

const AddQuestion = ({ setDisplay, onCreateQuestions }) => {
  const initialState = {
    question: "",
    options: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    answer: "",
  };
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { question: q, options, answer } = question;
    const isEmpty =
      !q || !options.A || !options.B || !options.C || !options.D || !answer;

    if (isEmpty) {
      alert("Semua field harus diisi!");
      return;
    }
    setMessage("Berhasil");
    setTimeout(() => setMessage(""), 3000);
    onCreateQuestions(question);
    setQuestion(initialState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("options.")) {
      const optionKey = name.split(".")[1];

      setQuestion((prev) => ({
        ...prev,
        options: {
          ...prev.options,
          [optionKey]: value,
        },
      }));
    } else {
      setQuestion((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <div className="h-full p-[15px] flex flex-col gap-1 items-center justify-center">
      <div>
        {message && (
          <div className="flex justify-center  bg-green-700 w-[500px] h-[50px] font-alfa text-white items-center">
            Berhasil Ditambahkan
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="">
          <input
            type="text"
            placeholder="ini soalnya"
            name="question"
            value={question.question}
            onChange={handleChange}
            className="w-[500px] bg-white text-copper h-[50px] text-center "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ini jawaban a"
            name="options.A"
            value={question.options.A}
            onChange={handleChange}
            className="w-[500px] bg-white text-copper h-[50px] text-center "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ini jawaban b"
            name="options.B"
            value={question.options.B}
            onChange={handleChange}
            className="w-[500px] bg-white text-copper h-[50px] text-center "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ini jawaban c"
            name="options.C"
            value={question.options.C}
            onChange={handleChange}
            className="w-[500px] bg-white text-copper h-[50px] text-center "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ini jawaban d"
            name="options.D"
            value={question.options.D}
            onChange={handleChange}
            className="w-[500px] bg-white text-copper h-[50px] text-center "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ini jawaban yang bener(abjadnya doang kapital)"
            name="answer"
            value={question.answer}
            onChange={handleChange}
            className="w-[500px] bg-white text-copper h-[50px] text-center "
          />
        </div>
        <div>
          <input
            type="submit"
            value="submit"
            className="w-[500px] bg-copper text-white h-[50px] "
          />
        </div>
      </form>
      <button
        type="button"
        onClick={() => setDisplay("start")}
        className="w-[500px] text-copper bg-white h-[50px] "
      >
        Kembali
      </button>
    </div>
  );
};

export default AddQuestion;
