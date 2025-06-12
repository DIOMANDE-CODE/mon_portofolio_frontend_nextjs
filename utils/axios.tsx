import axios from "axios";

const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/',
    timeout : 10000,
    headers: {
        'Content-Type':'application/json',
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