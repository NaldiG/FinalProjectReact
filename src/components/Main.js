import Header from './Header'
import MovieCard from './MovieCard'
import MainCarousel from './MainCarousel'
import { Container, Row} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Main = () => {
    const [random, setRandom] = useState(['nothing'])
    const [best, setBest] = useState(['nothing'])
    const [popular, setpopular] = useState(['nothing'])
    useEffect(() => {
        fetch('http://localhost:8080/api/five')
        .then(response => response.json())
        .then(data => {
            setRandom([...data])
        })

        fetch('http://localhost:8080/api/best')
        .then(response => response.json())
        .then(data => {
            setBest([...data])
        })
        
        fetch('http://localhost:8080/api/popular')
        .then(response => response.json())
        .then(data => {
            setpopular([...data])
        })
        
    }, [])

    return (
        
        <Container>
        <Header />
        <MainCarousel movies = {random}/>
        <h6 className="font-weight-bold mt-2">Best Rated</h6>
        <Row>
        <MovieCard movies = {best}/>
        </Row>
        <h6 className="font-weight-bold mt-2">Most Polular</h6>
        <Row>
        <MovieCard movies = {popular}/>
        </Row>
        <h6 className="font-weight-bold mt-2">Recomendet</h6>
        <Row>
        <MovieCard movies = {random}/>
        </Row>
        </Container>
        
    )
}

export default Main
