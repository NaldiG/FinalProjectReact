import React from 'react'
import { Row, Col, ListGroup} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
const MovieList = ({movies}) => {

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
            <ListGroup variant="flush">
                {movies.map(movie => (
                    <ListGroup.Item>
                        <Row>
                            <Col xs={1}>
                            <img onClick={e => handleSubmit(e, movie)} style={{height: 130, width: 100}} src={movie.poster}></img>
                            </Col>
                            <Col xs={1}></Col>
                            <Col xs={1}>
                            <h5 className="mt-5">{movie.score}</h5>
                            </Col>
                            <Col xs={1}></Col>
                            <Col xs={8}>
                            <h6 className="mt-5">{movie.title} ({movie.date})</h6>
                            <h6>{movie.genre}</h6>
                            </Col>
                        </Row>
                        </ListGroup.Item>
                ))}
            </ListGroup>
        </React.Fragment>
    )
}

export default MovieList
