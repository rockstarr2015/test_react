import React, { Component } from 'react';


class ShowInfo extends Component {
	constructor(){
		super();
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEditMovie = this.handleEditMovie.bind(this);
	}

	handleDelete(event){
		event.preventDefault();
		this.props.onDelete(this.props.movie_info.movie_name);
	}


	handleEditMovie(event){
		event.preventDefault();
		let editedMovie = {
      				  movie_name: this.props.movie_info.movie_name,
                      movie_director: this.refs.movie_director.value,
                      movie_year: this.refs.movie_year.value,
                      movie_genere: this.refs.movie_genere.value,
                      movie_image: this.props.movie_info.movie_image
                    }
        this.props.onEdit(editedMovie);


    
	}
	

  render() {
    
    return (
      <div className="ShowInfo">

		<div className=" information panel panel-default">
			<div className="panel-body">

				<div className="col-sm-4">
					<img src={this.props.movie_info.movie_image} className="img-rounded movie_image" alt="No Image" />
				</div>

				<div className="col-sm-8">
					<ul className="list-group">
						<li className="list-group-item">{this.props.movie_info.movie_year}</li>
						<li className="list-group-item">{this.props.movie_info.movie_genere}</li>
						<li className="list-group-item">{this.props.movie_info.movie_director}</li>
					</ul>

					<button className="btn btn-primary info_button1" data-toggle="modal" data-target="#myModal">Edit</button>

					<button className="btn btn-danger info_button1" onClick={this.handleDelete}>Delete</button>
				</div>


          	<div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">


              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Edit Movie</h4>
                </div>
                <div className="modal-body">

                  <form>
                     <div className="form-group">
                      <label >Movie Year:</label>
                      <input type="text" className="form-control" 
                      defaultValue={this.props.movie_info.movie_year}
                      ref="movie_year"/>
                    </div>
                     <div className="form-group">
                      <label >Movie Genere:</label>
                      <input type="text" className="form-control"
                      defaultValue={this.props.movie_info.movie_genere} 
                      ref="movie_genere"/>
                    </div>
                    <div className="form-group">
                      <label >Movie Director:</label>
                      <input type="text" className="form-control" 
                      defaultValue={this.props.movie_info.movie_director}
                      ref="movie_director"/>
                    </div>
                     

                    <button data-dismiss="modal" className="btn btn-primary" type="submit"  onClick={this.handleEditMovie.bind(this)}>Edit Movie</button>
                  </form>
       
                </div>
              </div>

            </div>
          </div>

			</div>
		</div>



       
      </div>
    );
  }
}

export default ShowInfo;
