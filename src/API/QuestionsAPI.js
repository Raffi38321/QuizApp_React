import axios from "axios";

// Base URL untuk API
const API_BASE_URL = "http://127.0.0.1:3005";

// Membuat instance axios dengan konfigurasi default
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout setelah 10 detik
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk handling error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    // Bisa ditambahkan logika untuk handling error spesifik
    if (error.response) {
      // Server merespons dengan status code di luar range 2xx
      console.error("Response error data:", error.response.data);
      console.error("Response error status:", error.response.status);
    } else if (error.request) {
      // Request dibuat tapi tidak ada respons
      console.error("No response received:", error.request);
    } else {
      // Terjadi error saat setup request
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  }
);

/**
 * Mengambil semua pertanyaan dari API
 * @returns {Promise<Array>} Array berisi pertanyaan
 */
export const fetchQuestionsAPi = async () => {
  const response = await api.get("/questions");
  return response.data;
};

/**
 * Menghapus pertanyaan berdasarkan ID
 * @param {string} id - ID pertanyaan yang akan dihapus
 * @returns {Promise<void>}
 */
export const deleteQuestionsAPI = async (id) => {
  await api.delete(`/questions/${id}`);
};

/**
 * Mengedit pertanyaan berdasarkan ID
 * @param {string} id - ID pertanyaan yang akan diedit
 * @param {Object} data - Data pertanyaan yang baru
 * @returns {Promise<Object>} Data pertanyaan yang sudah diedit
 */
export const editQuestionsAPI = async (id, data) => {
  const response = await api.put(`/questions/${id}`, data);
  return response.data;
};

/**
 * Membuat pertanyaan baru
 * @param {Object} data - Data pertanyaan baru
 * @returns {Promise<Object>} Data pertanyaan yang sudah dibuat
 */
export const createQuestionsAPI = async (data) => {
  const response = await api.post(`/questions`, data);
  return response.data;
};
