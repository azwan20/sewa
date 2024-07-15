import Navbar from "../navbar";

export default function Home() {
    return (
        <>
            <div className="detail">
                <div>
                    <Navbar />
                </div>
                <div className="content">
                    <div className="d-flex">
                        <section className="imgDetail d-flex align-items-center" style={{ width: '30%' }}><div></div></section>
                        <section style={{ width: '70%' }}>
                            <span>
                                <h3>Tenda 4 Orang</h3>
                                <button className="buttonF">Tersedia</button>
                                <p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z" fill="#226B5A" />
                                    </svg>
                                    4.9</p>
                                <p>Tenda ini bisa digunakan dengan maksimal kapasitas 4 orang</p>
                            </span>
                            <hr />
                            <span>
                                <h5>Rp 20.000 / Hari</h5>
                                <p>Tnda ini dapat disewa maksimal 10 hari</p>
                            </span>
                            <hr />
                            <span className="">
                                    <b>Hitung similasi harga /hari</b>
                                <div className="d-flex">
                                    <div className="d-flex simF">
                                        <button>1</button>
                                        <p>Hanya Tersisa <b>100 stok</b>! <br /> Segera sewakan</p>
                                    </div>
                                    <div className="simSec">
                                        <p>Total harga :</p>
                                        <button>Rp 20.000</button>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button>Tambah Keranjang</button>
                                    <button style={{backgroundColor: 'transparent', color: '#000'}}>Sewa Sekarang</button>
                                </div>
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}