import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // maps the original array and converts into moviecards
    return movieData.map((movies, index) => {
      return <MovieCard
        title = {movies.title}
        IMDBRating = {movies.IMDBRating}
        genres = {movies.genres}
        poster = {movies.poster}
        key = {index}
      />
    })
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
