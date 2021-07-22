import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main';
import Search from './components/Search';
import Detail from './components/Detail';
import MovieProvider from './context/MovieProvider'

function App() {
  
  
  return (
    <MovieProvider>
    <Router>
      <main>
        <Container>
          <Route exact path='/' component={Main} />
          <Route path='/detail' component={Detail} />
          <Route exact path='/search/:title' component={Search} />
        </Container>
      </main> 
    </Router>
    </MovieProvider>
  );
}

export default App;
