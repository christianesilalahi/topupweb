import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/components/Header/Header';
import { Container } from 'react-bootstrap';
import { Footer } from './shared/components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './apps/Routes/Routes';


function App() {

  return (
    <div>

      <Router>
        <div className="d-flex flex-column min-vh-100 body background-dark">
          <Header/>
            <Container className='flex-grow-1 mt-4'>
              <div className='width-device'>

                <AppRoutes />
              </div>
            </Container>
          <Footer/>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
