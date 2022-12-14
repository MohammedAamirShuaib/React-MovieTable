import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import {getGenres} from '../services/fakeGenreService'
import {getMovie, saveMovie} from '../services/fakeMovieService'
import { max, min } from 'lodash';

class NewMovie extends Form {
    state = {
        data: {title: '', genreId: '' , numberInStock: '', dailyRentalRate: ''},
        genres:[],
        errors: {},
    }

    schema = {
        title: Joi.string().required().label('Movie Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(0).max(100).required().label('Number In Stock'),
        dailyRentalRate: Joi.number().required().label('Daily Rental Rate')
    }

    componentDidMount() {
        this.setState({genres: getGenres()});

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({data: this.mapToViewModel(movie)});
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
        }
    }
    
    doSubmit = () => {
        saveMovie(this.state.data);
        this.props.history.push("/movies");
    }

    render() { 
        return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderFormInput("title","Movie Title")}
                {this.renderSelect("genreId","Genre", this.state.genres)}
                {this.renderFormInput("numberInStock","Stock")}
                {this.renderFormInput("dailyRentalRate","Rate")}
                {this.renderSubmitButton('Add Movie')}
            </form>
        </div>
        );
    }
}
 
export default NewMovie;