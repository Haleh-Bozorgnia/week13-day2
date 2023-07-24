function Movie(props){

    return (
      <li className="Movie">
        <h2>{props.movie.name}</h2>
        <h4>Year:{props.movie.year}</h4>
        <h4>Rating: {props.movie.rating}</h4>
        <div className="img-container">
          <img src={props.movie.image} alt={props.movie.name} />
        </div>
      </li>
    );
}

export default Movie