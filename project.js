import { useState } from "react";

const bikes = [
  { id: 1, name: "Street 500", brand: "Velocity", price: "₹2,75,000", engine: "499 cc", mileage: "32 km/l", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Thunder X", brand: "Rider", price: "₹3,0,000", engine: "650 cc", mileage: "28 km/l", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Urban 250", brand: "Velocity", price: "₹2,00,000", engine: "249 cc", mileage: "40 km/l", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "BMW S 1000 RR", brand: "BMW", price: "₹25,00,000", engine: "999 cc", mileage: "15 km/l",image: "https://th.bing.com/th/id/OIP.xBeEMLEvqeoTa_RV5hQbGQHaE8?w=275&h=183&c=7&r=0&o=7&pid=1.7&rm=3" }
];

function App() {
  const [page, setPage] = useState("home");
  const [selectedBike, setSelectedBike] = useState(null);

  const goTo = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:Arial,Helvetica,sans-serif;background:#09090b;color:white}
        button,input,textarea,select{font-family:inherit}
        button{cursor:pointer}
        .navbar{height:80px;padding:0 7%;display:flex;align-items:center;justify-content:space-between;background:#09090b;border-bottom:1px solid #252529;position:sticky;top:0;z-index:100}
        .logo{font-size:25px;font-weight:800;cursor:pointer}
        .logo span{color:#ff3b30}
        .nav-links{display:flex;gap:28px}
        .nav-links button{border:none;background:none;color:#bbb;font-size:15px}
        .nav-links button:hover,.nav-links .active{color:#ff3b30}
        .nav-button{background:#ff3b30;color:white;border:none;padding:12px 20px;border-radius:5px;font-weight:bold}
        .page{min-height:calc(100vh - 80px)}
        .label{color:#ff3b30;font-size:13px;font-weight:800;letter-spacing:2px;margin-bottom:15px}
        .primary{background:#ff3b30;color:white;border:none;padding:15px 25px;border-radius:5px;font-weight:bold}
        .primary:hover{background:#e52d24}
        .secondary{background:transparent;color:white;border:1px solid #777;padding:15px 25px;border-radius:5px}
        .hero{min-height:650px;display:flex;align-items:center;padding:80px 8%;background:linear-gradient(90deg,#080809 15%,rgba(8,8,9,.7),rgba(8,8,9,.1)),url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=90") center/cover}
        .hero-content{max-width:650px}
        .hero h1{font-size:clamp(50px,7vw,90px);line-height:.95;margin-bottom:25px}
        .hero h1 span{color:#ff3b30}
        .hero-description{color:#ccc;font-size:18px;line-height:1.7}
        .hero-buttons{display:flex;gap:15px;margin-top:35px}
        .stats{display:grid;grid-template-columns:repeat(4,1fr);background:#151518;padding:35px 8%}
        .stat{text-align:center;border-right:1px solid #333}
        .stat:last-child{border:none}
        .stat strong{display:block;color:#ff3b30;font-size:30px}
        .stat span{color:#aaa;font-size:13px}
        .section{padding:90px 8%}
        .section-title{text-align:center;margin-bottom:50px}
        .section-title h1{font-size:50px}
        .section-description{color:#999;max-width:600px;margin:20px auto;line-height:1.7}
        .bike-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:25px}
        .bike-card{background:#161619;border:1px solid #29292d;border-radius:8px;overflow:hidden;transition:.3s}
        .bike-card:hover{transform:translateY(-8px);border-color:#ff3b30}
        .bike-image{height:260px;position:relative;overflow:hidden}
        .bike-image img{width:100%;height:100%;object-fit:cover}
        .badge{position:absolute;top:15px;left:15px;background:#ff3b30;padding:7px 12px;font-size:11px;font-weight:bold}
        .bike-info{padding:25px}
        .brand{color:#888;font-size:13px}
        .bike-info h3{font-size:26px;margin:5px 0 20px}
        .bike-specs{display:flex;gap:20px;color:#aaa;font-size:13px;padding-bottom:20px;border-bottom:1px solid #29292d}
        .bike-bottom{padding-top:20px;display:flex;justify-content:space-between;align-items:center}
        .bike-bottom small{display:block;color:#777}
        .bike-bottom button{background:transparent;color:#ff3b30;border:1px solid #ff3b30;padding:9px 12px;border-radius:4px}
        .services{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .service{background:#171719;border:1px solid #29292d;padding:35px 25px;text-align:center;border-radius:8px}
        .service-icon{font-size:40px;margin-bottom:20px}
        .service h3{margin-bottom:12px}
        .service p{color:#999;line-height:1.6}
        .about{padding:90px 8%;display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
        .about-image img{width:100%;height:500px;object-fit:cover;border-radius:8px}
        .about h1,.contact h1{font-size:50px;margin-bottom:25px}
        .about-text{color:#aaa;line-height:1.8;margin-bottom:30px}
        .points{display:grid;grid-template-columns:1fr 1fr;gap:15px}
        .contact{padding:90px 8%;display:grid;grid-template-columns:1fr 1fr;gap:80px;background:#151518}
        .contact-text{color:#aaa;line-height:1.7;margin-bottom:30px}
        .contact-details p{margin:18px 0;color:#ddd}
        .contact-form{display:flex;flex-direction:column;gap:15px}
        .contact-form input,.contact-form textarea,.contact-form select{background:#0c0c0e;border:1px solid #333;color:white;padding:15px;border-radius:5px;outline:none}
        .contact-form input:focus,.contact-form textarea:focus,.contact-form select:focus{border-color:#ff3b30}
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;justify-content:center;align-items:center;z-index:1000;padding:20px}
        .modal{width:500px;max-width:100%;background:#18181b;padding:30px;border-radius:10px;position:relative}
        .modal img{width:100%;height:240px;object-fit:cover;border-radius:5px;margin-bottom:20px}
        .modal h2{font-size:35px;margin-bottom:20px}
        .close{position:absolute;top:15px;right:15px;width:35px;height:35px;border:none;border-radius:50%;background:#ff3b30;color:white;font-size:24px}
        .modal-specs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:25px}
        .modal-specs div{background:#101012;padding:15px;border-radius:5px}
        .modal-specs small{display:block;color:#777;margin-bottom:5px}
        .full{width:100%}
        footer{padding:35px 8%;background:#070708;display:flex;justify-content:space-between;align-items:center;color:#777}
        @media(max-width:900px){
          .nav-links{display:none}
          .bike-grid{grid-template-columns:1fr 1fr}
          .services{grid-template-columns:1fr 1fr}
          .about,.contact{grid-template-columns:1fr}
          .stats{grid-template-columns:1fr 1fr;gap:25px}
          .stat{border:none}
        }
        @media(max-width:600px){
          .navbar{padding:0 5%}
          .nav-button{display:none}
          .hero{padding:60px 6%}
          .hero h1{font-size:55px}
          .hero-buttons{flex-direction:column}
          .section,.about,.contact{padding:60px 6%}
          .bike-grid,.services{grid-template-columns:1fr}
          .about-image img{height:350px}
          .points{grid-template-columns:1fr}
          footer{flex-direction:column;gap:20px}
        }
      `}</style>

      <header className="navbar">
        <div className="logo" onClick={() => goTo("home")}>🏍️ RM Moto<span>Hub</span></div>
        <nav className="nav-links">
          <button className={page === "home" ? "active" : ""} onClick={() => goTo("home")}>Home</button>
          <button className={page === "bikes" ? "active" : ""} onClick={() => goTo("bikes")}>Bikes</button>
          <button className={page === "services" ? "active" : ""} onClick={() => goTo("services")}>Services</button>
          <button className={page === "about" ? "active" : ""} onClick={() => goTo("about")}>About</button>
          <button className={page === "contact" ? "active" : ""} onClick={() => goTo("contact")}>Contact</button>
        </nav>
        <button className="nav-button" onClick={() => goTo("contact")}>Buy</button>
      </header>

      {page === "home" && (
        <main className="page">
          <section className="hero">
            <div className="hero-content">
              <div className="label">WELCOME TO RM MOTOBHUB</div>
              <h1>Ride Your<br /><span>Dream Bike.</span></h1>
              <p className="hero-description">Discover premium motorcycles built for performance, style and unforgettable journeys.</p>
              <div className="hero-buttons">
                <button className="primary" onClick={() => goTo("bikes")}>Explore Bikes →</button>
                <button className="secondary" onClick={() => goTo("contact")}>Buy</button>
              </div>
            </div>
          </section>
          <section className="stats">
            <div className="stat"><strong>15+</strong><span>Years Experience</span></div>
            <div className="stat"><strong>5,000+</strong><span>Happy Customers</span></div>
            <div className="stat"><strong>50+</strong><span>Bike Models</span></div>
            <div className="stat"><strong>24/7</strong><span>Customer Support</span></div>
          </section>
        </main>
      )}

      {page === "bikes" && (
        <main className="page">
          <section className="section">
            <div className="section-title">
              <div className="label">OUR COLLECTION</div>
              <h1>Our Bikes</h1>
              <p className="section-description">Explore our collection of premium motorcycles. Choose your perfect ride and book a test ride.</p>
            </div>
            <div className="bike-grid">
              {bikes.map((bike) => (
                <div className="bike-card" key={bike.id}>
                  <div className="bike-image">
                    <img src={bike.image} alt={bike.name} />
                    <span className="badge">NEW</span>
                  </div>
                  <div className="bike-info">
                    <p className="brand">{bike.brand}</p>
                    <h3>{bike.name}</h3>
                    <div className="bike-specs"><span>⚙️ {bike.engine}</span><span>⛽ {bike.mileage}</span></div>
                    <div className="bike-bottom">
                      <div><small>Starting from</small><strong>{bike.price}</strong></div>
                      <button onClick={() => setSelectedBike(bike)}>Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {page === "services" && (
        <main className="page">
          <section className="section">
            <div className="section-title">
              <div className="label">WHAT WE OFFER</div>
              <h1>Our Services</h1>
              <p className="section-description">Everything you need to enjoy your motorcycle.</p>
            </div>
            <div className="services">
              <div className="service"><div className="service-icon">🏍️</div><h3>Test Ride</h3><p>Experience your dream bike before making your decision.</p></div>
              <div className="service"><div className="service-icon">🔧</div><h3>Bike Service</h3><p>Professional maintenance from trained technicians.</p></div>
              <div className="service"><div className="service-icon">💰</div><h3>Easy Finance</h3><p>Flexible financing options with simple monthly installments.</p></div>
              <div className="service"><div className="service-icon">🛡️</div><h3>Insurance</h3><p>Complete insurance assistance for your motorcycle.</p></div>
            </div>
          </section>
        </main>
      )}

      {page === "about" && (
        <main className="page">
          <section className="about">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1525160354320-d8e92641c563?auto=format&fit=crop&w=1000&q=80" alt="Motorcycle" />
            </div>
            <div>
              <div className="label">ABOUT MOTOBHUB</div>
              <h1>Your Journey Starts Here.</h1>
              <p className="about-text">MotoHub is a premium motorcycle dealership dedicated to helping riders find the perfect bike. From your first motorcycle to your dream upgrade, our team is here to make every step simple.</p>
              <div className="points">
                <div>✓ Genuine motorcycles</div>
                <div>✓ Expert guidance</div>
                <div>✓ Transparent pricing</div>
                <div>✓ Professional service</div>
              </div>
            </div>
          </section>
        </main>
      )}

      {page === "contact" && (
        <main className="page">
          <section className="contact">
            <div>
              <div className="label">GET IN TOUCH</div>
              <h1>Ready to Ride?</h1>
              <p className="contact-text">Visit our showroom or contact us to book a test ride today.</p>
              <div className="contact-details">
                <p>📍 Vaddem, Vasco, Goa</p>
                <p>📞 +91 74996 75832</p>
                <p>✉️ hello@rmmotohub.com</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will contact you shortly."); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <select defaultValue="" required>
                <option value="" disabled>Select a Bike</option>
                {bikes.map((bike) => <option key={bike.id}>{bike.name}</option>)}
              </select>
              <textarea placeholder="Your Message" rows="5" />
              <button className="primary" type="submit">Send Enquiry →</button>
            </form>
          </section>
        </main>
      )}

      <footer>
        <div className="logo">🏍️ RM Moto<span>Hub</span></div>
        <p>© 2026 MotoHub. All rights reserved.</p>
      </footer>

      {selectedBike && (
        <div className="modal-overlay" onClick={() => setSelectedBike(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedBike(null)}>×</button>
            <img src={selectedBike.image} alt={selectedBike.name} />
            <div className="label">{selectedBike.brand}</div>
            <h2>{selectedBike.name}</h2>
            <div className="modal-specs">
              <div><small>Engine</small><strong>{selectedBike.engine}</strong></div>
              <div><small>Mileage</small><strong>{selectedBike.mileage}</strong></div>
              <div><small>Price</small><strong>{selectedBike.price}</strong></div>
            </div>
            <button className="primary full" onClick={() => { setSelectedBike(null); goTo("contact"); }}>Buy</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;