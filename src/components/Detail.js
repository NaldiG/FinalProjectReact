import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'

const Detail = (props) => {
    console.log("Hello")
    const { state } = props.location
    console.log(state);
    return (
        <Container>
            <Header />
            <Row>
            <Col  xs={3}>
                <img className="mt-3" src={state.poster}></img>
            </Col>
            <Col xs={1}></Col>
            <Col  xs={8}>
                <h4 style={{width: 220}} class=" panel-heading what-to-know__header mt-3 mb-5"> ..-Title</h4>
                <p>{state.title}</p>
                <h4 class=" panel-heading what-to-know__header mt-5 mb-5"> ..-Synopsis</h4>
                <p>{state.plot}</p>
                <h4 class=" panel-heading what-to-know__header mt-5 mb-5"> ..-More Details</h4>
                <p>
                    Genre: {state.genre}<br/>
                    Rating: {state.rating}<br/>
                    Release Date: {state.date}<br/>
                    Runtime: {state.duration}<br/>
                    Production Co: {state.production}<br/>
                    Score: {state.score}
                </p>
            </Col>
            </Row>
        </Container>
    )
}

export default Detail
