import React, { Component } from 'react';


class ShowInfo extends Component {
	

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

					<button className="btn btn-primary info_button1">Edit</button>
					<button className="btn btn-danger info_button1">Delete</button>
				</div>

			</div>
		</div>



       
      </div>
    );
  }
}

export default ShowInfo;
