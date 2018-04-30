import React, { Component } from 'react';
import Movies from './components/Movies';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.state = {
      movies : [],
      isNewMovie: false
    }
  }

  handleAddMovie(event){
    event.preventDefault();
    let newMovie = {
                      movie_name: this.refs.movie_name.value,
                      movie_director: this.refs.movie_director.value,
                      movie_year: this.refs.movie_year.value,
                      movie_genere: this.refs.movie_genere.value,
                      movie_image: this.refs.movie_image.value
                    }
    this.setState({
      movies:[...this.state.movies, newMovie]
    });

  }


  componentWillMount(){
      this.setState({
         movies : [
              {
                movie_name: 'The Godfather',
                movie_director: 'Francis Ford Coppola',
                movie_year: 1972,
                movie_genere: 'Crime, Drama',
                movie_image: 'https://image.ibb.co/jeAAOc/godfather1.jpg'
              },
               {
                movie_name: 'The Godfather1',
                movie_director: 'Francis Ford Coppola',
                movie_year: 1972,
                movie_genere: 'Crime, Drama',
                movie_image: 'https://image.ibb.co/jeAAOc/godfather1.jpg'
              },
               {
                movie_name: 'The Godfather2',
                movie_director: 'Francis Ford Coppola',
                movie_year: 1972,
                movie_genere: 'Crime, Drama',
                movie_image: 'https://image.ibb.co/jeAAOc/godfather1.jpg'
              },
               {
                movie_name: 'The Godfather3',
                movie_director: 'Francis Ford Coppola',
                movie_year: 1972,
                movie_genere: 'Crime, Drama',
                movie_image: 'https://image.ibb.co/jeAAOc/godfather1.jpg'
              }

          ]
      });
    }


  render() {
    return (
      <div className="App well">
          
          <Movies movie_data={this.state.movies} />
          <button className="btn btn-primary add_movie" data-toggle="modal" data-target="#myModal"> Add Movie</button>

          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">


              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Add New Movie</h4>
                </div>
                <div className="modal-body">

                  <form>
                    <div className="form-group">
                      <label >Movie Name:</label>
                      <input type="text" className="form-control" ref="movie_name"/>
                    </div>
                     <div className="form-group">
                      <label >Movie Year:</label>
                      <input type="text" className="form-control" ref="movie_year"/>
                    </div>
                     <div className="form-group">
                      <label >Movie Genere:</label>
                      <input type="text" className="form-control" ref="movie_genere"/>
                    </div>
                    <div className="form-group">
                      <label >Movie Director:</label>
                      <input type="text" className="form-control" ref="movie_director"/>
                    </div>
                     <div className="form-group">
                      <label>Movie Image URL:</label>
                      <input type="text" className="form-control" ref="movie_image"/>
                    </div>

                    <button data-dismiss="modal" className="btn btn-primary" type="submit"  onClick={this.handleAddMovie}>Add Movie</button>
                  </form>
       
                </div>
              </div>

            </div>
          </div>









      </div>


    );
  }
}

export default App;
