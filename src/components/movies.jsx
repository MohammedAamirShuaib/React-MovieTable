import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import Table from "./common/table";
import Like from "./common/like";
import SearchBox from "./common/searchBox";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { name: "title", order: "asc" },
    columns: [
      {
        name: "title",
        label: "Title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      { name: "genre.name", label: "Genre" },
      { name: "numberInStock", label: "Stock" },
      { name: "dailyRentalRate", label: "Rate" },
      {
        key: "Like",
        content: (item, onLike, onDelete) => (
          <Like liked={item.liked} onLike={() => onLike(item)} />
        ),
      },
      {
        key: "Delete",
        content: (item, onLike, onDelete) => (
          <button
            style={{ cursor: "pointer" }}
            onClick={() => onDelete(item)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ],
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Generes" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  getPagedData() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;
    let filteredMovies = allMovies;
    if (searchQuery)
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      allMovies.filter((m) => m.genre._id === selectedGenre._id);
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.name],
      [sortColumn.order]
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);
    const { length: filteredcount } = filteredMovies;
    return { filteredcount, data: movies };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  deleteMovieHandler = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenresSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, selectedGenre: null });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p align="center">There are no movies to display.</p>;
    const { filteredcount, data } = this.getPagedData();
    const { sortColumn, columns, currentPage, searchQuery } = this.state;
    const totalCount = this.state.movies.length;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelected={this.handleGenresSelect}
          />
        </div>
        <div className="col">
          <Link className="btn btn-primary" to="/movies/new">
            Add Movie
          </Link>
          <p align="center">Showing {filteredcount} movies</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />

          <Table
            data={data}
            columns={columns}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            onLike={this.handleLiked}
            onDelete={this.deleteMovieHandler}
          />

          <Pagination
            itemsCount={filteredcount}
            pageSize={this.state.pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
