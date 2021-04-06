import films from "./mocks/films"

const getFilms = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(films)
        // reject('Server is not availabled!!!')
    }, 2000)
})

export default getFilms