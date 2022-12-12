import * as genresAPI from "./fakeGenreService"

const movies = [
    {
        _id: "1",
        title: "Terminator",
        genre: {_id: 1, name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
    },
    {
        _id: "2",
        title: "Die Hard",
        genre: {_id: 1, name: "Action"},
        numberInStock: 4,
        dailyRentalRate: 2,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "3",
        title: "Get Out",
        genre: {_id: 3, name: "Thriller"},
        numberInStock: 9,
        dailyRentalRate: 1.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "4",
        title: "Trip to Italy",
        genre: {_id: 5, name: "Comedy"},
        numberInStock: 12,
        dailyRentalRate: 3,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "5",
        title: "Airplane",
        genre: {_id: 5, name: "Comedy"},
        numberInStock: 8,
        dailyRentalRate: 1.75,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "6",
        title: "Inception",
        genre: {_id: 3, name: "Thriller"},
        numberInStock: 2,
        dailyRentalRate: 5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "7",
        title: "Avengers",
        genre: {_id: 2, name: "Scifi"},
        numberInStock: 14,
        dailyRentalRate: 4,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "8",
        title: "Conjuring",
        genre: {_id: 4, name: "Horror"},
        numberInStock: 5,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "9",
        title: "PK",
        genre: {_id: 5, name: "Comedy"},
        numberInStock: 3,
        dailyRentalRate: 3.8,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "10",
        title: "Freddy",
        genre: {_id: 3, name: "Thriller"},
        numberInStock: 3,
        dailyRentalRate: 3.2,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "11",
        title: "Interstellar",
        genre: {_id: 2, name: "Scifi"},
        numberInStock: 3,
        dailyRentalRate: 4.8,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "12",
        title: "Grey Hound",
        genre: {_id: 1, name: "Action"},
        numberInStock: 3,
        dailyRentalRate: 3.9,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "Shutter Islands",
        title: "PK",
        genre: {_id: 3, name: "Thriller"},
        numberInStock: 3,
        dailyRentalRate: 4.8,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "Mask",
        title: "PK",
        genre: {_id: 5, name: "Comedy"},
        numberInStock: 3,
        dailyRentalRate: 4.3,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "15",
        title: "Aquaman",
        genre: {_id: 2, name: "Scifi"},
        numberInStock: 3,
        dailyRentalRate: 4.2,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "16",
        title: "BayWatch",
        genre: {_id: 5, name: "Comedy"},
        numberInStock: 3,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "17",
        title: "Megaledon",
        genre: {_id: 1, name: "Action"},
        numberInStock: 3,
        dailyRentalRate: 3,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}