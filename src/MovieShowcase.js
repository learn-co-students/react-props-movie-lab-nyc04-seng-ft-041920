import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

   generateMovieCards = () => {
    //console.log(this.props) //this props is empty
    return movieData.map((item, index) => <MovieCard
       key={item.index}
       title={item.title} 
       IMDBRating= {item.IMDBRating}
       genres= {item.genres}
       poster= {item.poster}
       />
       )
  }
      // map over your movieData array and return an array of the correct JSX

      //JSX i can't send whole obj. it has to be value.  

  render() {
    return (
      <div id="movie-showcase">  
        {this.generateMovieCards()},  
      </div>
    )
  }
}