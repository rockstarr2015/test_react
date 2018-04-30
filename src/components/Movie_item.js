import React, { Component } from 'react';
import ShowInfo from './ShowInfo';
import './Movie_item.css';

class Movie_item extends Component {
	constructor(){
		super();
		this.handleListClick = this.handleListClick.bind(this);
		this.state  = {
			isToggled: false,
		}
	}

	handleListClick(event){
		event.preventDefault();
		console.log(this.state.isToggled);
		 this.setState(prevState => ({
	      isToggled: !prevState.isToggled
	    }));

	}

  render() {
    
    return (
      <div className="Movie_item">
        <button className="btn btn-info info_button" onClick={this.handleListClick} >
        	<b>{this.props.movie_data.movie_name}</b>
        </button>

        {this.state.isToggled ? <ShowInfo movie_info={this.props.movie_data} /> : null}

        
      
        <br />
  
      </div>
    );
  }
}

export default Movie_item;
