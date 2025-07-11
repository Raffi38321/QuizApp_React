import axios from "axios";

export const fetchQuestionsAPi = async () => {
  const response = await axios.get("http://127.0.0.1:3005/questions");
  return response.data;
};

export const deleteQuestionsAPI = async (id) => {
  await axios.delete(`http://127.0.0.1:3005/questions/${id}`);
};

export const editQuestionsAPI = async (id, data) => {
  const response = await axios.put(
    `http://127.0.0.1:3005/questions/${id}`,
    data
  );
  return response.data;
};

export const createQuestionsAPI = async (data) => {
  const response = await axios.post(`http://127.0.0.1:3005/questions`, data);
  return response.data;
};
