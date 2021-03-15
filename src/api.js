import films from "./mocks/films"

const getFilms = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(films)
    }, 2000)
})

export default getFilms