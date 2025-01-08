import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="landing-page">
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h1>Experience the Future of RV Living</h1>
              <p>Smart technology meets luxury on the road</p>
              <button className="cta-button">Explore Features</button>
            </div>
          </section>

          {/* Features Section */}
          <section className="features">
            <div className="feature-card">
              <div className="icon">📱</div>
              <h3>Mobile Control</h3>
              <p>Manage your RV's systems from anywhere using our smart app</p>
            </div>
            <div className="feature-card">
              <div className="icon">🌡️</div>
              <h3>Climate Control</h3>
              <p>Automated temperature regulation for optimal comfort</p>
            </div>
            <div className="feature-card">
              <div className="icon">🔋</div>
              <h3>Energy Management</h3>
              <p>Smart power optimization for extended off-grid living</p>
            </div>
          </section>
        </div>
      );
    }

    export default App;
