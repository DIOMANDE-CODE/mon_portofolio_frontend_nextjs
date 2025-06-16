import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // important
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ajout d'un intercepteur

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Erreur API :', error.response?.data || error.message);
        return Promise.reject(error)
        
    }
)

export default api