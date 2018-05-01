import React, { Component } from 'react';
import './Movies.css';
import Movie_item from './Movie_item';

class Movies extends Component {
  editMovie2(editedMovie){
    this.props.editMovie3(editedMovie);
  }

  deleteMovie2(name){
    this.props.deleteMovie3(name);
  }

  render() {

    let m_item;
    if(this.props.movie_data){
      m_item = this.props.movie_data.map(movie =>{
        return(
          <Movie_item editMovie1={this.editMovie2.bind(this)}
            deleteMovie1 = {this.deleteMovie2.bind(this)} 
          key={movie.movie_name} movie_data={movie} />
        )
      })
    }
    
    return (

      <div>{m_item}</div>
    );
  }
}

export default Movies;
