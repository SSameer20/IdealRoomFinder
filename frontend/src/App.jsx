import { useState } from "react";
import { Navigation } from "./components/Navigation";
import Footer from "./components/Footer";
import "./styles/app.css";
function App() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 3000);
  if (load == true)
    return (
      <div
        id="loader"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span style={{ fontSize: "48px" }} id="IntroTitle">
          Ideal Stay
        </span>
      </div>
    );
  else
    return (
      <div className="main-app" style={{ overflowX: "hidden" }}>
        <Navigation style={{ position: "absolute" }} />
        <section className="hero">
          <div className="hero-content">
            <h1>Find Your Perfect Room or Roommate and Listing-Room</h1>
            <p>
              helps you connect with compatible roommates and find the perfect
              living space based on your preferences and location.
            </p>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter your location"
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="section-header">
            <h2 className="section-title">Why Choose Matez..</h2>
            <p>
              We offer a comprehensive platform to make your accommodation
              search simple, quick, and reliable.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Location-Based Search</h3>
              <p>
                Find rooms or roommates near your workplace, university, or
                preferred neighborhood with our advanced geo-location filters.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Advanced Matching</h3>
              <p>
                Our intelligent system matches you based on preferences
                including lifestyle, budget, amenities, and roommate
                compatibility.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Direct Messaging</h3>
              <p>
                Connect directly with potential roommates or property owners
                through our secure in-app messaging system.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Verified Listings</h3>
              <p>
                All PG and hostel owners are verified, ensuring safe and
                reliable accommodation options.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Market Insights</h3>
              <p>
                Get valuable insights on rent trends, popular locations, and
                demand patterns to make informed decisions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Social Integration</h3>
              <p>
                Connect your social profiles to build trust and share listings
                with friends across platforms.
              </p>
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <div className="section-header">
            <h2 className="section-title">How Matez.. Works</h2>
            <p>
              Finding your perfect room or roommate is just a few simple steps
              away
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Profile</h3>
              <p>
                Sign up and create your detailed profile with preferences and
                requirements
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Search & Filter</h3>
              <p>
                Use our advanced filters to find matches based on your criteria
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Connect</h3>
              <p>Message potential roommates or property owners directly</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Move In</h3>
              <p>Finalize details and start enjoying your Matez..</p>
            </div>
          </div>
        </section>
        <section className="cta">
          <h2>Ready to Find Your Matez..?</h2>
          <p>
            Join thousands of satisfied users who found their perfect living
            arrangement through our platform.
          </p>
          <div className="cta-buttons">
            <a href="#" className="Authbtn btn-outline">
              Find Rooms
            </a>
            <a href="#" className="Authbtn btn-filled">
              Find Roommates
            </a>
          </div>
        </section>
        <Footer />
      </div>
    );
}

export default App;
