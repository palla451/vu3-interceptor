import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";

// Configura Axios
axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;

// Interceptor di richiesta
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log('Token:', token);
            router.push('/');
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.error('Token non presente. Utente non autorizzato.');
            router.push('about');
            return Promise.reject(new Error('Utente non autorizzato'));
        }

        return config;
    },
    (error) => {
        console.error('Request Interceptor Error:', error);
        return Promise.reject(error);
    }
);

// Interceptor di risposta
axios.interceptors.response.use(
    (response) => {
        console.log('Response Interceptor:', response);
        return response;
    },
    (error) => {
        console.error('Response Interceptor Error:', error);
        return Promise.reject(error);
    }
);

// Esporta l'istanza di axios con gli interceptor configurati
export const axiosInstance = axios;

// Esporta il plugin VueAxios
export const VueAxiosPlugin = {
    install(app) {
        app.use(VueAxios, axiosInstance);
    }
};
