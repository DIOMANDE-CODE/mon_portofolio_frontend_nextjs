import axios from "axios";
// import { getCookie } from "cookies-next"; // ou ton utilitaire perso

// const token = getCookie('csrftoken');

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true, // ✅ pour envoyer les cookies (CSRF + session)
  headers: {
    "Content-Type": "application/json",
    // 'X-CSRFToken': typeof token === 'string' ? token : '', // ✅ bien envoyé
  },
})

// Ajout d'un intercepteur

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Erreur API :', error.response?.data || error.message);
        return Promise.reject(error)
        
    }
)

export default api