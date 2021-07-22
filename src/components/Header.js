import React, {useState} from 'react'
import logo from '../pic/rtlogo.png'
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header = ({callback}) => {

    const [search, setSearch] = useState([])
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("pressed")
        console.log(search)
        callback(search)
        history.push(`/search/${search}`) 
    }

    return (
        <React.Fragment>
            <Navbar height="10" className="color-nav text-white height-nav" variant="dark" expand="lg">
                <Nav className="mr-auto">
                
               
                
                </Nav>
                <Nav.Link className="text-white bold-txt font-txt" href="#home">Sign up</Nav.Link>
                <Nav.Link className="text-white bold-txt font-txt" href="#link">Log in</Nav.Link>
            
            </Navbar>

            

            <Navbar className="color-nav text-white py-1" variant="dark" expand="lg">
            <Navbar.Brand href="http://localhost:3000/">
            <img
                alt=""
                src={logo}
                width="200"
                height="60"
                className="d-inline-block align-top"
            />{' '}
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                <Form onSubmit={handleSubmit} inline>
                <FormControl type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="mr-sm-2 search-txt" />
                <Button type="submit" variant="outline-dark">Search</Button>
                </Form>
                
                </Nav>
                <Nav.Link className="text-white bold-txt" href="#home">Movies</Nav.Link>
                <Nav.Link className="text-white bold-txt" href="#link">Actors</Nav.Link>
                <Nav.Link className="text-white bold-txt" href="#link">Directors</Nav.Link>
            </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
Header.defaultProps = {
    callback: (a) => console.log(a + " from default")
}
export default Header
