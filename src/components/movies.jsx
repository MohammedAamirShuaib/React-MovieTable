import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import Table from './common/table';
import Like from './common/like';
import { paginate } from '../utils/paginate'
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies : [],
        genres: [],
        pageSize:5,
        currentPage:1,
        sortColumn: {name: 'title', order: 'asc'},
        columns : [
            {name: 'title', label: 'Title'},
            {name: 'genre.name', label: 'Genre'},
            {name: 'numberInStock', label: 'Stock'},
            {name: 'dailyRentalRate', label: 'Rate'},
            {key: 'Like' ,content: (item, onLike, onDelete ) =><Like liked={item.liked} onLike={() =>onLike(item)} />},
            {key: 'Delete',content: (item, onLike, onDelete) => <button style={{cursor: "pointer"}} onClick={() => onDelete(item)} className="btn btn-danger btn-sm">Delete</button>}
        ]
    };

    componentDidMount() {
        const genres = [{_id:'',name: 'All Generes'},...getGenres()]
        this.setState({movies: getMovies(), genres});
    }

    handlePageChange = (page) => {
        this.setState({currentPage : page});
    }

    deleteMovieHandler = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    handleLiked = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handleGenresSelect = (genre) => {
        this.setState({selectedGenre : genre});
        this.setState({currentPage : 1})
    }

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    }

    render() { 
        const {movies: allMovies, pageSize, currentPage, selectedGenre, sortColumn, columns} = this.state;
        const filteredMovies = selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id) : allMovies;
        const sortedMovies = _.orderBy(filteredMovies,[sortColumn.name], [sortColumn.order]);
        const movies = paginate(sortedMovies, currentPage, pageSize)
        const {length: count} = this.state.movies;
        if(this.state.movies.length === 0) return <p align="center">There are no movies to display.</p>
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                    items={this.state.genres} 
                    selectedItem={this.state.selectedGenre}
                    onItemSelected={this.handleGenresSelect}/>
                </div>
                <div className="col">
                    <p align="center">Showing {filteredMovies.length} movies</p>

                    <Table 
                    data={movies} 
                    columns={columns}
                    onSort={this.handleSort}
                    sortColumn={sortColumn}
                    onLike={this.handleLiked}
                    onDelete={this.deleteMovieHandler} />

                    <Pagination 
                    itemsCount={filteredMovies.length} 
                    pageSize={this.state.pageSize} 
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }
}
export default Movies;