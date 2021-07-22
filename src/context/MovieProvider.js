import MovieContext from "./MovieContext";
import { Component } from 'react';

class MovieProvider extends Component {
    state = {
        movie: '',
       
    };

    render() {
        return(
            <MovieContext.Provider
                value  = {{
                    movie: this.state.movie,

                    setMovie: movi => {
                        this.setState(state => ({movie: movi}));
                    },
                }}
            >
                {this.props.children}
            </MovieContext.Provider>
        );
    }
}

export default MovieProvider;