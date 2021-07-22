import React from 'react'
import { Card, Col} from 'react-bootstrap'
import {useHistory } from 'react-router-dom'


const MovieCard = ({movies}) => {

    const history = useHistory();

    const handleSubmit = (e, movie) => {
        e.preventDefault();
        // alert(textRef.current.value)
        history.push({
            pathname: '/detail',
            state: movie
          })
    }
    return (
        <React.Fragment>
            
            {movies.map((movie, index) => {
                return (<Col xs={2}>
                    <Card className="mb-3 mt-3" style={{height: 315}}>
                    <Card.Img style={{height: 220}} variant="top" src={movie.poster} />
                    <Card.Body>
                        <Card.Title><a className="text-dark" href="http://localhost:3000/detail" onClick={e => handleSubmit(e, movie)}>{movie.title}</a></Card.Title>
                        
                        
                    </Card.Body>
                    </Card>
                    </Col>)
            })}
            
        </React.Fragment>
    )
}

export default MovieCard
