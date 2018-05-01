import React, { Component } from 'react';
import Movies from './components/Movies';
import './App.css';
import $ from 'jquery';

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

  getMovie(){

     $.ajax({
      url: 'http://localhost:4000/getMovies',
      dataType: 'json',
      method: 'GET',
      success : function(data){
        this.setState({movies: data})
      }.bind(this)

     })
  }

  componentWillMount(){
    //get data from API
    this.getMovie();
      
  }


  componentDidMount(){
    //get data from API
    this.getMovie();
  }

  editMovie4(editedMovie){
    //update the state;
    let movie_name = editedMovie.movie_name;
    let currentState = this.state.movies;
    //remove the old record
    let index = currentState.findIndex(x => x.movie_name === editedMovie.movie_name);
    currentState.splice(index,1);

    //update the state
    this.setState({movies: [...currentState, editedMovie]})

  }

  deleteMovie4(name){
    let currentState = this.state.movies;
    //remove the old movie record
    let index = currentState.findIndex(x=> x.movie_name === name);
    currentState.splice(index,1);

    //update the state
    this.setState({movies:[...currentState]});
  }

  //still working on update record in database 
  handleSaveChange(event){
    event.preventDefault();
    let currentState = this.state.movies;
    currentState.forEach((movie)=>{

    })
    //call update router to update records 

  }


  render() {
    return (
      <div className="App well">
          
          <Movies editMovie3={this.editMovie4.bind(this)} 
            deleteMovie3={this.deleteMovie4.bind(this)}
            movie_data={this.state.movies} />
          
          
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

          <button  className="btn btn-primary add_movie" data-toggle="modal" data-target="#myModal"> Add Movie</button>
          
          
          <button className="btn btn-primary" onClick={this.handleSaveChange.bind(this)}>Save Changes</button>
          


      </div>


    );
  }
}

export default App;
