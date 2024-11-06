import {Navbar, Nav, Container} from 'react-bootstrap'
import './Header.css'

const Header = () =>{

    


    return(<>
        <div >
            <Navbar className='header-container' bg="light" expand="lg">
                <Container fluid>
                    
                    <Navbar.Brand href="#home">Aoshi Market</Navbar.Brand>

                        <Nav className='me-auto'>
                        <Navbar.Toggle aria-controls="bnavbar-content" />
                        <Navbar.Collapse id="navbar-content">
                        <Nav className="ml-auto">
                            <Nav.Link href="/home" activeClassName="active">Home</Nav.Link>
                            <Nav.Link href="#products" activeClassName="active">Cek Transaksi</Nav.Link>
                            <Nav.Link href="#contact" activeClassName="active">Kalkulator</Nav.Link>
                        </Nav>

                        <Nav className='mr-auto'>
                            <Nav.Link href="/search" activeClassName="active">Search</Nav.Link>
                            <Nav.Link href="/language" activeClassName="active">Language</Nav.Link>
                        </Nav>

                        </Navbar.Collapse>
                        </Nav>

                        

                </Container>
            </Navbar>
        </div>
    </>)
}

export default Header;