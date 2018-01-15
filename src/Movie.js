import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

/*
class Movie extends Component{

	static propTypes = {
		title : PropTypes.string.isRequired,
		poster: PropTypes.string.isRequired
	}

	render(){
		return(<div>
			<h1>{this.props.title}</h1>
			<MoviePoster poster={this.props.poster} />
			</div>
		)
	
	}
}
*/

function Movie({title, poster, genres, synopsis}){
	return (
		<div className="Movie">
		  <div className="Movie__Columns">
                        <MoviePoster poster={poster} alt={title} />
		  </div>
		  <div className="Movie__Columns">
			<h1>{title}</h1>
			<div className="Movie__Genres">
			  {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
			</div>
			<p className="Movie__Synopsis">
			  {synopsis}
			</p>
		  </div>
               </div>

	)
}

/*
class MoviePoster extends Component{

        static propTypes = {
                poster: PropTypes.string.isRequired
        }

	render(){
		return(
			<img src={this.props.poster} />
		)
	}

}
*/

function MoviePoster({poster, alt}){
	return (
		<img src={poster} alt={alt} title={alt}  className="Movie__Poster"/>
	)
}

function MovieGenre({genre}){
	return (
		<span className="Movie__Genre">{genre}</span>
	)
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
	poster : PropTypes.string.isRequired,
	alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired
}

export default Movie;
