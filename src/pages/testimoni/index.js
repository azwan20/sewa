import Footer from "../footer";
import Navbar from "../navbar";

export default function Testimoni() {
    return (
        <>
            <div className="testimoni">
                <div>
                    <Navbar />
                </div>
                <div className="container testimonis mt-5 mb-5">
                    <div className="review">
                        <h1>Apa Kata Mereka?</h1>
                        <div className="d-flex justify-content-between">
                            <section></section>
                            <section style={{ scale: '120%' }}></section>
                            <section></section>
                        </div>
                    </div>
                    <div>
                        <h3>Gallery Kami</h3>
                        <div className="d-flex flex-wrap justify-content-between">
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                                <div className="card" key={index} style={{ marginRight: index % 4 !== 3 ? '15px' : '0', marginBottom: index < 4 ? '10px' : '0' }}>
                                    <img style={{objectFit: 'cover', height: '100%'}} src="https://img.freepik.com/free-photo/group-man-woman-enjoy-camping-picnic-barbecue-lake-with-tents-background-young-mixed-race-asian-woman-man-young-people-s-hands-toasting-cheering-bottles-beer_1253-1041.jpg?t=st=1713257897~exp=1713261497~hmac=aaa0f020fb45570e9d1a457f9c9fd11b5bdcde8a2146a0a52107f6dd48fef8a6&w=900" alt={`Card ${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}