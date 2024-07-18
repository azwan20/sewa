import Footer from "../footer";
import Navbar from "../navbar";

export default function Home() {
    return (
        <>
            <div className="home">
                <div>
                    <Navbar />
                </div>
                <div className="container produk mb-5 mt-4" >
                    <div id="tenda">
                        <section>
                            <h5>Tenda</h5>
                        </section>
                        <section className="card-containers">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                                <div class="card" style={{ width: '15rem' }}>
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <span>
                                            <h5 class="card-title">Tenda 4 orang</h5>
                                            <p><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FF8A00" />
                                            </svg>
                                                4.9</p>
                                        </span>
                                        <span>
                                            <a href="#" class="btn btn-primary">Tambah Keranjang</a>
                                            <b>Rp 20.000</b>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                    <div id="camping tools" className="mt-5">
                        <section>
                            <h5>Camping Tools</h5>
                        </section>
                        <section className="card-containers">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                                <div class="card" style={{ width: '15rem' }}>
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <span>
                                            <h5 class="card-title">Tenda 4 orang</h5>
                                            <p><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FF8A00" />
                                            </svg>
                                                4.9</p>
                                        </span>
                                        <span>
                                            <a href="#" class="btn btn-primary">Tambah Keranjang</a>
                                            <b>Rp 20.000</b>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                    <div id="alat masak" className="mt-5">
                        <section>
                            <h5>Alat Masak</h5>
                        </section>
                        <section className="card-containers">
                            {[0, 1, 2, 3].map((index) => (
                                <div class="card" style={{ width: '15rem' }}>
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <span>
                                            <h5 class="card-title">Tenda 4 orang</h5>
                                            <p><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FF8A00" />
                                            </svg>
                                                4.9</p>
                                        </span>
                                        <span>
                                            <a href="#" class="btn btn-primary">Tambah Keranjang</a>
                                            <b>Rp 20.000</b>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
