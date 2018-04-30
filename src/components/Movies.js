import React, { Component } from 'react';
import './Movies.css';
import Movie_item from './Movie_item';

class Movies extends Component {
  render() {

    let m_item;
    if(this.props.movie_data){
      m_item = this.props.movie_data.map(movie =>{
        return(
          <Movie_item key={movie.movie_name} movie_data={movie} />
        )
      })
    }
    
    return (

      <div>{m_item}</div>
    );
  }
}

export default Movies;
