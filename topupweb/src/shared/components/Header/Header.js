import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <h1>Racoon <span>Store</span></h1>
          </div>
          <nav>
            <ul>
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Cek Transaksi</a></li>
              <li><a href="#">Kalkulator</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <input type="text" placeholder="Search"/>
            <select>
              <option>ID</option>
            </select>
            <button className="btn">Masuk</button>
            <button className="btn primary">Daftar</button>
          </div>
      </div>
      </header>
    </>
  );
}

export default Header;
