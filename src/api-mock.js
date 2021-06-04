import films from "./mocks/films"


const getFilms = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(films)
        // reject('Server is not availabled!!!')
    }, 1000)
})

const authorizing = ({user, password}) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({user: 'alkir'})
        // reject('Error in username or password')
    }, 1000)
})

const serverAPI = {
    getFilms,
    authorizing,
}


export default serverAPI