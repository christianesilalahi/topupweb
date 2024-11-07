import {Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Button} from 'react-bootstrap'
import './Header.css'

const Header = () =>{

    


    return(<>
        <div >
            {/* <Navbar className='header-container' bg="light" expand="lg"> */}
            <Navbar bg="dark" variant="dark" expand="lg" className="px-3">

                <Container >
                    
                    <Navbar.Brand href="#home">Aoshi Market</Navbar.Brand>

                        {/* <Nav className='me-auto'>÷ */}
                        {/* <div className='container-fluid' min-width=""> */}

                        <Nav 
                        className="d-flex me-auto justify-content-between" 
                        // className="
                        // sticky top-0 z-40 w-full border-b border-border/50 bg-secondary/80 backdrop-blur print:hidden d-flex me-auto "
                        
                        >                            
                        {/* <Navbar.Collapse id="navbar-content"> */}

                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                            <Navbar.Collapse id="basic-navbar-nav" className="container-fluid" >
                                <div className='container-fluid d-flex justify-content-between'>
                                    <div className="d-flex ms-auto p-2">
                                        <Nav className="ml-auto">
                                            <Nav.Link href="/home" activeClassName="active">Home</Nav.Link>
                                            <Nav.Link href="#products" activeClassName="active">Cek Transaksi</Nav.Link>
                                            <Nav.Link href="#contact" activeClassName="active">Kalkulator</Nav.Link>
                                        </Nav>
                                    </div>

                                    <div className="d-flex me-auto p-2">
                                        <Form inline className="d-flex align-items-center">
                                        <InputGroup className="d-none d-lg-flex">
                                            <InputGroup.Text>
                                            {/* <FaSearch />  */}
                                            </InputGroup.Text>
                                            <FormControl
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                            className="me-2"
                                            />
                                        </InputGroup>

                                        {/* Dropdown for ID */}
                                        <Dropdown className="d-none d-lg-flex">
                                            <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="mx-2">
                                            ID
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            <Dropdown.Item href="#action/3.1">ID Option 1</Dropdown.Item>
                                            <Dropdown.Item href="#action/3.2">ID Option 2</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        {/* Login and Register Buttons */}
                                        <Button variant="outline-light" className="me-2 d-none d-lg-flex">Masuk</Button>
                                        <Button variant="primary" className="d-none d-lg-flex">Daftar</Button>
                                        </Form>
                                    </div>
                                </div>

                        {/* <Nav className='mr-auto'>
                            <Nav.Link href="/search" activeClassName="active">Search</Nav.Link>
                            <Nav.Link href="/language" activeClassName="active">Language</Nav.Link>
                        </Nav> */}

                                <Nav className="d-lg-none mt-3">
                                    <Nav.Link href="#home" className="text-green">Beranda</Nav.Link>
                                    <Nav.Link href="#cek-transaksi" className="text-green">Cek Transaksi</Nav.Link>
                                    <Nav.Link href="#kalkulator" className="text-green">Kalkulator</Nav.Link>
                                    <Nav.Link href="#login" className="text-green">Masuk</Nav.Link>
                                    <Nav.Link href="#register" className="text-green">Daftar</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Nav>
        {/* </div> */}

                        

                </Container>
            </Navbar>
        </div>
    </>)
}

export default Header;
