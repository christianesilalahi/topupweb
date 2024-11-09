// import {Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Button} from 'react-bootstrap'
// import './Header.css'

// const Header = () =>{

    


//     return(<>
//         <div >
//             {/* <Navbar className='header-container' bg="light" expand="lg"> */}
//             <Navbar bg="dark" variant="dark" expand="lg" className="px-3">

//                 <Container >
                    
//                     <Navbar.Brand href="#home">Aoshi Market</Navbar.Brand>

//                         {/* <Nav className='me-auto'>÷ */}
//                         {/* <div className='container-fluid' min-width=""> */}

//                         <Nav 
//                         className="d-flex me-auto justify-content-between" 
//                         // className="
//                         // sticky top-0 z-40 w-full border-b border-border/50 bg-secondary/80 backdrop-blur print:hidden d-flex me-auto "
                        
//                         >                            
//                         {/* <Navbar.Collapse id="navbar-content"> */}

//                             <Navbar.Toggle aria-controls="basic-navbar-nav"/>

//                             <Navbar.Collapse id="basic-navbar-nav" className="container-fluid" >
//                                 <div className=' d-flex justify-content-between width-full'>
//                                     <div className="d-flex ms-auto p-2">
//                                         <Nav className="ml-auto">
//                                             <Nav.Link href="/home" activeClassName="active">Home</Nav.Link>
//                                             <Nav.Link href="#products" activeClassName="active">Cek Transaksi</Nav.Link>
//                                         </Nav>
//                                     </div>

//                                     <div className="d-flex me-auto p-2">
//                                         <Form inline 
//                                         className="d-flex align-items-center width-full"
//                                         >
//                                         <InputGroup className="d-none d-lg-flex">
//                                             <InputGroup.Text>
//                                             {/* <FaSearch />  */}
//                                             </InputGroup.Text>
//                                             <FormControl
//                                             type="text"
//                                             placeholder="Search"
//                                             aria-label="Search"
//                                             className="me-2"
//                                             />
//                                         </InputGroup>

//                                         {/* Dropdown for ID */}
//                                         <Dropdown 
//                                         // className="d-none d-lg-flex"
//                                         className='d-flex width-full' 
//                                         >
//                                             <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="mx-2">
//                                             ID
//                                             </Dropdown.Toggle>
//                                             <Dropdown.Menu>
//                                             <Dropdown.Item href="#action/3.1">ID Option 1</Dropdown.Item>
//                                             <Dropdown.Item href="#action/3.2">ID Option 2</Dropdown.Item>
//                                             </Dropdown.Menu>
//                                         </Dropdown>
//                                         </Form>
//                                     </div>
//                                 </div>

//                         {/* <Nav className='mr-auto'>
//                             <Nav.Link href="/search" activeClassName="active">Search</Nav.Link>
//                             <Nav.Link href="/language" activeClassName="active">Language</Nav.Link>
//                         </Nav> */}

//                                 <Nav className="d-lg-none mt-3">
//                                     <Nav.Link href="#home" className="text-green">Beranda</Nav.Link>
//                                     <Nav.Link href="#cek-transaksi" className="text-green">Cek Transaksi</Nav.Link>
//                                 </Nav>
//                             </Navbar.Collapse>
//                         </Nav>
//         {/* </div> */}

                        

//                 </Container>
//             </Navbar>
//         </div>
//     </>)
// }

// export default Header;


// import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown } from 'react-bootstrap';
// import './Header.css';

// const Header = () => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
//         <Container fluid className="header-container">
//           <Navbar.Brand href="#home">Aoshi Market</Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
//             {/* Left Side Links */}
//             <Nav className="me-auto">
//               <Nav.Link href="/home" activeClassName="active">Home</Nav.Link>
//               <Nav.Link href="#products" activeClassName="active">Cek Transaksi</Nav.Link>
//             </Nav>

//             {/* Right Side: Search and Dropdown */}
//             <div className="d-flex align-items-center me-0">
//               <Form inline className="d-none d-lg-flex me-0">
//                 <InputGroup>
//                   <InputGroup.Text>
//                     {/* <FaSearch /> */}
//                   </InputGroup.Text>
//                   <FormControl
//                     type="text"
//                     placeholder="Search"
//                     aria-label="Search"
//                     className="me-2"
//                   />
//                 </InputGroup>
//               </Form>

//               <Dropdown className="d-none d-lg-flex">
//                 <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
//                   ID
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#action/3.1">ID Option 1</Dropdown.Item>
//                   <Dropdown.Item href="#action/3.2">ID Option 2</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Mobile Links */}
//       <Nav className="d-lg-none">
//         <Nav.Link href="#home" className="text-white">Home</Nav.Link>
//         <Nav.Link href="#cek-transaksi" className="text-white">Cek Transaksi</Nav.Link>
//       </Nav>
//     </>
//   );
// };

// export default Header;

// import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown } from 'react-bootstrap';
// import './Header.css';

// const Header = () => {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg" className="px-3 header-container">
//         <Container fluid>
//           {/* Brand and Left Side Links */}
//           <Navbar.Brand >Aoshi Market</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
//             <Nav className="me-auto">
//               <Nav.Link href="/home" activeClassName="active">Home</Nav.Link>
//               <Nav.Link href="#products" activeClassName="active">Cek Transaksi</Nav.Link>
//             </Nav>

//             {/* Right Side: Search bar and Dropdown */}
//             <div className="d-flex align-items-center ms-auto">
//               <Form inline className="d-none d-lg-flex me-2">
//                 <InputGroup>
//                   <InputGroup.Text>🔍</InputGroup.Text>
//                   <FormControl
//                     type="text"
//                     placeholder="Search"
//                     aria-label="Search"
//                     className="me-2"
//                   />
//                 </InputGroup>
//               </Form>

//               <Dropdown className="d-none d-lg-flex">
//                 <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="mx-2">
//                   ID
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#action/3.1">ID Option 1</Dropdown.Item>
//                   <Dropdown.Item href="#action/3.2">ID Option 2</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </Navbar.Collapse>

//           {/* Mobile-only: Search and Dropdown stay on the right side */}
//           <Nav className="d-lg-none">
              
//             <div className="d-flex align-items-center ms-auto">
//               <Form inline className="me-2">
//                 <InputGroup>
//                   <FormControl
//                     type="text"
//                     placeholder="Search"
//                     aria-label="Search"
//                     className="me-2"
//                   />
//                 </InputGroup>
//               </Form>
//               <Dropdown>
//                 <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="mx-2">
//                   ID
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#action/3.1">ID Option 1</Dropdown.Item>
//                   <Dropdown.Item href="#action/3.2">ID Option 2</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;

import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3 header-container">
        <Container fluid className="header-content">
          {/* Left Side: Brand, Home, Cek Transaksi */}
          <Navbar.Brand href="#home">Aoshi Market</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`navbar-collapse-custom ${isSidebarOpen ? 'show' : ''}`}
          >
            {/* Sidebar Content for Smaller Screens */}
            <div className='side-bar-container'>
            <div className="d-lg-none sidebar-content">
              <Navbar.Brand className='width-full'>Aoshi Market</Navbar.Brand>
              <Button variant="link" className="close-btn" onClick={toggleSidebar}>X</Button>
            </div>

            {/* Left Side Links */}
            <div className='side-bar-item'>
            <Nav className="me-auto">
              <Nav.Link href="/home" activeClassName="active">Home</Nav.Link>
              <Nav.Link href="#products" activeClassName="active">Cek Transaksi</Nav.Link>
            </Nav>
            </div>
            </div>

            {/* Right Side: Search bar and Dropdown */}
            <div className="d-flex align-items-center ms-auto right-side">
              <Form inline className="d-none d-lg-flex me-2">
                <InputGroup>
                  <InputGroup.Text>🔍</InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    className="me-2"
                  />
                </InputGroup>
              </Form>

              <Dropdown className="d-none d-lg-flex">
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="mx-2">
                  ID
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action/3.1">ID Option 1</Dropdown.Item>
                  <Dropdown.Item href="#action/3.2">ID Option 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>

          {/* Mobile version for search and dropdown */}
          <Nav className="d-lg-none">
            <div className="d-flex align-items-center ms-auto right-side">
              <Form inline className="me-2">
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    className="me-2"
                  />
                </InputGroup>
              </Form>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="mx-2">
                  ID
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action/3.1">ID Option 1</Dropdown.Item>
                  <Dropdown.Item href="#action/3.2">ID Option 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
