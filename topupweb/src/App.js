import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/components/Header/Header';
import { Container } from 'react-bootstrap';
import { ProductList } from './shared/components/ProductList/ProductList';
import { Footer } from './shared/components/Footer/Footer';
import { Home } from './features/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div>

      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header/>
            <Container className='flex-grow-1 mt-4'>
              <Home/>
            </Container>
          <Footer/>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
