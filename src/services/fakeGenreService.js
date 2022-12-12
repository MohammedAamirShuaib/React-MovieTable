export const genres = [
    {_id:1, name:'Action'},
    {_id:2, name:'Scifi'},
    {_id:3, name:'Thriller'},
    {_id:4, name:'Horror'},
    {_id:5, name:'Comedy'}
];

export function getGenres() {
    return genres.filter(g => g);
}