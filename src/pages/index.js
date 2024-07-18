import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navbar";
import React, { useRef } from 'react';

export default function Home() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  const scrollLeft = (scrollRef) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (scrollRef) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const detail = () => {
      window.location.href ='/details';
  }

  return (
    <>
      <div className="home">
        <div>
          <Navbar />
        </div>
        <div className="container mb-5" >
          <div className="caraousel">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img align="center" src="https://img.freepik.com/free-photo/tourist-tents-are-green-misty-forest-mountains_146671-18467.jpg?t=st=1711644724~exp=1711648324~hmac=ed5bc00a51d43a15744df8099ae303e6ac9afd5b231ecdf920040cfe03185b6e&w=900" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img align="center" src="https://img.freepik.com/free-photo/man-building-up-tent_23-2147632835.jpg?t=st=1711644883~exp=1711648483~hmac=83117f372c741e5173fbbb27123cfe2ba890b31602c5b1676db7f8fe0bde257f&w=900" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img align="center" src="https://img.freepik.com/free-photo/rear-view-young-backpacker-couple-sitting-relax-front-tent-near-lake-with-coffee-set-making-fresh-coffee-grinder-while-camping-trip-summer-vacation_1150-48396.jpg?t=st=1711645732~exp=1711649332~hmac=7cf4e3ba624afc485378c50621f4222db608eed2b9eef316e4c8d662f97af6b9&w=900" class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div id="carouselExample" class="carousel slide">
            <section>
              <h5>Paling Sering Disewa</h5>
            </section>
            <div style={{ width: '100%', overflowX: 'hidden', padding: '0 50px' }} className="cardContain" >
              <div className="d-flex" style={{ overflowX: 'hidden' }} ref={scrollRef1}>
                <section className="d-flex justify-content-between">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <div key={index} className="card" style={{ width: '15rem' }} onClick={detail}>
                      <img src="https://img.freepik.com/free-photo/green-tent-set-up-forest_23-2148456476.jpg?t=st=1711645011~exp=1711648611~hmac=fbf3d5e84813d8dc70c4d7e731473ccc9c5051cb7136ba031ad0d983fb24481d&w=900" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <span>
                          <h5 className="card-title">Tenda 4 orang</h5>
                          <p>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FF8A00" />
                            </svg>
                            4.9
                          </p>
                        </span>
                        <span>
                          <a href="#" className="btn btn-primary">Tambah Keranjang</a>
                          <b>Rp 20.000</b>
                        </span>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
              <button style={{ position: 'absolute', top: '30%', left: '-5%' }} onClick={() => scrollLeft(scrollRef1)} className="btn buttonScrool"><svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.625 66.75L33.375 44.5L55.625 22.25" stroke="#226B5A" stroke-width="2" />
              </svg>
              </button>
              <button style={{ position: 'absolute', top: '30%', right: '-5%' }} onClick={() => scrollRight(scrollRef1)} className="btn buttonScrool"><svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.375 22.25L55.625 44.5L33.375 66.75" stroke="#226B5A" stroke-width="2" />
              </svg>
              </button>
            </div>
          </div>
          <div id="carouselExample" class="carousel slide">
            <section>
              <h5>Tenda</h5>
            </section>
            <div style={{ width: '100%', overflowX: 'hidden', padding: '0 50px' }} className="cardContain" >
              <div className="d-flex" style={{ overflowX: 'hidden' }} ref={scrollRef2}>
                <section className="d-flex justify-content-between">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="card" style={{ width: '15rem' }}>
                      <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSQaxfGJrHZPUgkXudUiKNIKfEL2DY-jOtHcK4YoFkPjd4vJpIFT8fE9kA7KDcNH_B5yFcR2n_E-KG223CYscXyBaCEsARrjsXQWgDbT716Ad2SDgBHOukH&usqp=CAE" class="card-img-top" alt="..." />
                      <div className="card-body">
                        <span>
                          <h5 className="card-title">Tenda 4 orang</h5>
                          <p>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FF8A00" />
                            </svg>
                            4.9
                          </p>
                        </span>
                        <span>
                          <a href="#" className="btn btn-primary">Tambah Keranjang</a>
                          <b>Rp 20.000</b>
                        </span>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
              <button style={{ position: 'absolute', top: '30%', left: '-5%' }} onClick={() => scrollLeft(scrollRef2)} className="btn buttonScrool"><svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.625 66.75L33.375 44.5L55.625 22.25" stroke="#226B5A" stroke-width="2" />
              </svg>
              </button>
              <button style={{ position: 'absolute', top: '30%', right: '-5%' }} onClick={() => scrollRight(scrollRef2)} className="btn buttonScrool"><svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.375 22.25L55.625 44.5L33.375 66.75" stroke="#226B5A" stroke-width="2" />
              </svg>
              </button>
            </div>
          </div>
          <div id="carouselExample" class="carousel slide">
            <section>
              <h5>Alat Masak</h5>
            </section>
            <div style={{ width: '100%', overflowX: 'hidden', padding: '0 50px' }} className="cardContain" >
              <div className="d-flex" style={{ overflowX: 'hidden' }} ref={scrollRef3}>
                <section className="d-flex justify-content-between">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="card" style={{ width: '15rem' }}>
                      <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBcJlYhEQC6MGcQnP5jj3M-nCFOSU3VHWXuWThixQl5-HyTYDF25se82vOtdOMrJS-9H2OqOg_44Fx7HswvQPojFgnhsT2YscP6yfkivM&usqp=CAE" class="card-img-top" alt="..." />
                      <div className="card-body">
                        <span>
                          <h5 className="card-title">Tenda 4 orang</h5>
                          <p>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#FF8A00" />
                            </svg>
                            4.9
                          </p>
                        </span>
                        <span>
                          <a href="#" className="btn btn-primary">Tambah Keranjang</a>
                          <b>Rp 20.000</b>
                        </span>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
              <button style={{ position: 'absolute', top: '30%', left: '-5%' }} onClick={() => scrollLeft(scrollRef3)} className="btn buttonScrool"><svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.625 66.75L33.375 44.5L55.625 22.25" stroke="#226B5A" stroke-width="2" />
              </svg>
              </button>
              <button style={{ position: 'absolute', top: '30%', right: '-5%' }} onClick={() => scrollRight(scrollRef3)} className="btn buttonScrool"><svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.375 22.25L55.625 44.5L33.375 66.75" stroke="#226B5A" stroke-width="2" />
              </svg>
              </button>
            </div>
          </div>
          <div className="mt-5 category">
            <section>
              <h5>Category</h5>
            </section>
            <section className="d-flex justify-content-between">
              {[0, 1, 2, 3].map((index) => (
                <div class="card" style={{ width: '16rem' }}>
                  <Link href="/produk/#produk">
                    <button style={{ backgroundColor: index % 2 ? 'red' : 'green' }}>Tenda</button>
                  </Link>
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
