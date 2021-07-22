import React from 'react'
import { Carousel } from 'react-bootstrap'
const MainCarousel = ({movies}) => {
    return (
        <React.Fragment>
            <Carousel className="mb-4" >
            {movies.map((movie, index) => {
                return (<Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={movie.poster}
                            
                            height="500"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.genre}</p>
                            </Carousel.Caption>
                        </Carousel.Item>)
            })}
                
                
            </Carousel>
        </React.Fragment>
    )
}

export default MainCarousel
