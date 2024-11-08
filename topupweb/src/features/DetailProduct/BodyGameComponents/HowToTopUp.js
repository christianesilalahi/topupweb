import { Card, Col } from 'react-bootstrap'
import './../DetailProduct.css'

export const HowToTopUp = ({game="nama game", currency="currency game"}) => {
    let text = `Top Up ${currency} ${game} Harga Paling Murah
    Cara Top Up ${currency} ${game} Termurah :`
    return (<>
        <div className="text-box">
            {text}

            <ol>
                <li>Masukkan ID & Server</li>
                <li>Pilih Nominal</li>
                <li>Pilih Pembayaran</li>
                <li>Tulis Kode Promo (jika ada)</li>
                <li>Masukkan No WhatsApp</li>
                <li>Klik Order Now & Lakukan Pembayaran</li>
                <li>Diamonds Otomatis Masuk Ke Akun Game</li>
                <li>Masukkan No WhatsApp</li>
            </ol>

            <Col >
                <Card 
                    // className="mb-4"
                    >
                    <Card.Body>
                        <Card.Title>Deskripsi dan Cara Melakukan Transaksi</Card.Title>
                        <ul>
                            <li>Masukkan ID & Server</li>
                            <li>Pilih Nominal</li>
                            <li>Pilih Pembayaran</li>
                            <li>Tulis Kode Promo (jika ada)</li>
                            <li>Masukkan No WhatsApp</li>
                            <li>Klik Order Now & Lakukan Pembayaran</li>
                            <li>Diamonds Otomatis Masuk Ke Akun Game</li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    </>)
}