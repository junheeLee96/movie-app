import React from "react";
import axios from "axios";
import Movie from "./Movie"

class App extends React.Component{
  state = {
    isloading:true,
    movies: []
  };

  getMovies = async () =>{
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isloading:false})
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isloading, movies} = this.state;
    return <div>{isloading ? "loading...." : movies.map(movie=>{
      return <Movie id={movie.id} year={movie.year} title={movie.tile} summary={movie.summary} poster={movie.medium_cover_image} />
    })
    }</div>
  }
  
}

export default App;
 