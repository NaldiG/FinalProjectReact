import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './MovieList'
import Pagination from './Pagination'
import Header from './Header'

const Search = () => {

    const [movies, setMovies] = useState(['nothing'])
    const [currentPage, setCurrentPage] = useState([1])
    const { title } = useParams()
    const [url, setUrl] = useState([title])
    let lastIndex = currentPage * 10
    let firstIndex = lastIndex - 10
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/search/${url}`)
        .then(response => response.json())
        .then(data => {
            data.map(movie => movie.date = movie.date.substring(0, 4)) 
            setMovies([...data])
            console.log(data)
        })
    }, [url])

    const paginate = (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage(pageNumber)
    }

    return (
        <Container>
            <Header callback = {setUrl}/>
            <MovieList movies = {movies.slice(firstIndex, lastIndex)} />
            <Pagination itemsPerPage={10} totalItems={movies.length} paginate={paginate} />
        </Container>
    )
}

export default Search
