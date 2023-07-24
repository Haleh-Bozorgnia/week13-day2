import Movie from "./Movie";
function Movies(props) {
      return (
        <div className="Movies">
          
          {props.movies.map((item, index) => (
            //  <li>{item.name}</li>
            <Movie movie={item} />
          ))}
        </div>
      );

}

export default Movies;
