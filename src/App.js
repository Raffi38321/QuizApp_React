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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "./constants/routes";

function App() {
  const [display, setDisplay] = useState(ROUTES.START);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onFetchQuestions();
  }, []);

  const onFetchQuestions = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchQuestionsAPi();
      setQuestions(response);
    } catch (error) {
      setError("Gagal memuat pertanyaan. Silakan coba lagi.");
      toast.error("Gagal memuat pertanyaan");
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteQuestions = async (id) => {
    try {
      await deleteQuestionsAPI(id);
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.id !== id)
      );
      toast.success("Soal berhasil dihapus!");
    } catch (err) {
      toast.error("Gagal menghapus soal.");
    }
  };
  const onEditQuestions = async (id, data) => {
    try {
      const response = await editQuestionsAPI(id, data);
      const editedQuestions = questions.map((ques) => {
        if (ques.id === id) {
          return { ...ques, ...response };
        }
        return ques;
      });
      setQuestions(editedQuestions);
      toast.success("berhasil edit soal");
    } catch (error) {
      toast.error("gagal edit soal");
    }
  };

  const onCreateQuestions = async (data) => {
    try {
      const response = await createQuestionsAPI(data);
      setQuestions([...questions, response]);
      toast.success("berhasil menambahkan soal");
    } catch (error) {
      toast.error("Gagal menambahkan soal");
    }
  };
  const handleReset = () => {
    setDisplay(ROUTES.START);
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
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pastelPink"></div>
          </div>
        )}

        {error && !isLoading && (
          <div className="flex justify-center items-center h-full">
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{error}</span>
              <button
                className="bg-pastelPink hover:bg-copper text-white font-bold py-2 px-4 rounded mt-4"
                onClick={onFetchQuestions}
              >
                Coba Lagi
              </button>
            </div>
          </div>
        )}

        {!isLoading && !error && (
          <>
            {display === ROUTES.START && <Start setDisplay={setDisplay} />}
            {display === ROUTES.QUESTION && (
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
            {display === ROUTES.REVIEW && (
              <Review
                answer={answer}
                index={index}
                setDisplay={setDisplay}
                handleNext={handleNext}
                handlePrev={handlePrev}
                questions={questions}
              />
            )}
            {display === ROUTES.SCORE && (
              <Score
                score={score}
                setDisplay={setDisplay}
                setIndex={setIndex}
              />
            )}
            {display === ROUTES.ADD && (
              <AddQuestion
                setDisplay={setDisplay}
                onCreateQuestions={onCreateQuestions}
              />
            )}
            {display === ROUTES.EDIT && (
              <EditQuestions
                questions={questions}
                onEditQuestions={onEditQuestions}
                onDeleteQuestions={onDeleteQuestions}
              />
            )}
          </>
        )}
      </div>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer handleReset={handleReset} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
