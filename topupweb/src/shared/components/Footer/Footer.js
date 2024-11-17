
import { Container } from "react-bootstrap"
import './Footer.css'

export const Footer = () => {
    return(<>
        {/* <footer className="bg-light text-center py-4">
            <Container>
                <p className="mb-0">© 2023 Aoshi Market</p>
            </Container>
        </footer> */}
        <footer>
            <div className="footer-container">
            <div className="footer-column">
                <h4>Peta Situs</h4>
                <ul>
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Masuk</a></li>
                <li><a href="#">Daftar</a></li>
                <li><a href="#">Cek Transaksi</a></li>
                <li><a href="#">Hubungi Kami</a></li>
                <li><a href="#">Ulasan</a></li>
                </ul>
            </div>
        
            <div className="footer-column">
                <h4>Dukungan</h4>
                <ul>
                <li><a href="#">WhatsApp</a></li>
                </ul>
            </div>
        
            <div className="footer-column">
                <h4>Legalitas</h4>
                <ul>
                <li><a href="#">Kebijakan Privasi</a></li>
                <li><a href="#">Syarat & Ketentuan</a></li>
                </ul>
            </div>
        
            <div className="footer-column">
                <h4>Ikuti Kami</h4>
                <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                </ul>
            </div>

            </div>
        
            <div className="footer-bottom">
            <p>&copy; 2024 RacoonId. All rights reserved.</p>
            </div>
        </footer>
    </>)
}