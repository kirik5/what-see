import axios from 'axios'

const instance = axios.create({
    baseURL: "https://htmlacademy-react-2.appspot.com/wtw",
    timeout: 5000,
    withCredentials: true,
});

export const serverAPI = {
    getFilms: () => instance.get('/questions'),
    authorising: ({email, password}) => instance.post('/login', {email, password}),
};