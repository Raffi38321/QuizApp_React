import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Start from "./pages/Start";
import Question from "./pages/Question";
import Review from "./pages/Review";
import Score from "./pages/Score";
import {
  fetchQuestionsAPi,
  editQuestionsAPI,
  createQuestionsAPI,
  deleteQuestionsAPI,
} from "./API/QuestionsAPI";
import AddQuestion from "./pages/AddQuestion";
import EditQuestions from "./pages/EditQuestions";

function App() {
  const [display, setDisplay] = useState("start");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    onFetchQuestions();
  }, []);

  const onFetchQuestions = async () => {
    const response = await fetchQuestionsAPi();
    setQuestions(response);
  };

  const onDeleteQuestions = async (id) => {
    await deleteQuestionsAPI(id);
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };
  const onEditQuestions = async (id, data) => {
    const response = await editQuestionsAPI(id, data);
    const editedQuestions = questions.map((ques) => {
      if (ques.id === id) {
        return { ...ques, ...response };
      }
      return ques;
    });
    setQuestions(editedQuestions);
  };

  const onCreateQuestions = async (data) => {
    const response = await createQuestionsAPI(data);
    setQuestions([...questions, response]);
  };
  const handleReset = () => {
    setDisplay("start");
    setIndex(0);
    setAnswer({});
    setScore({});
  };

  const handlePrev = () => {
    setIndex((index) => index - 1);
  };

  const handleNext = () => {
    setIndex((index) => index + 1);
  };
  return (
    <div className="h-screen flex flex-col ">
      <Header display={display} />
      <div className="w-full bg-charcoal flex-1">
        {display === "start" && <Start setDisplay={setDisplay} />}
        {display === "question" && (
          <Question
            index={index}
            handleNext={handleNext}
            handlePrev={handlePrev}
            answer={answer}
            setAnswer={setAnswer}
            setScore={setScore}
            setDisplay={setDisplay}
            questions={questions}
          />
        )}
        {display === "review" && (
          <Review
            answer={answer}
            index={index}
            setDisplay={setDisplay}
            handleNext={handleNext}
            handlePrev={handlePrev}
            questions={questions}
          />
        )}
        {display === "score" && (
          <Score score={score} setDisplay={setDisplay} setIndex={setIndex} />
        )}
        {display === "add" && (
          <AddQuestion
            setDisplay={setDisplay}
            onCreateQuestions={onCreateQuestions}
          />
        )}
        {display === "edit" && (
          <EditQuestions
            questions={questions}
            onEditQuestions={onEditQuestions}
            onDeleteQuestions={onDeleteQuestions}
          />
        )}
      </div>
      <Footer handleReset={handleReset} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
