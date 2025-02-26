// App.js
import React from 'react';
import './App.css';
import { FaDownload, FaGift, FaInfoCircle, FaQrcode } from 'react-icons/fa';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="app">

      <Helmet>
      <title>Oplite Connect - Seamlessly Connect, Communicate, and Collaborate</title>
        <meta name="description" content="Oplite Connect is your app for collaboration, rewards, and QR code functionality. Download the APK now!" />
        <meta name="keywords" content="Oplite Connect, QR Code App, Rewards App, APK Download, Collaboration App, oplite, oplite-connect, Oplite-Connect" />
        <meta name="author" content="Oplite Connect Team" />
        <meta property="og:title" content="Oplite Connect - Connect, Collaborate, and Reward" />
        <meta property="og:description" content="Oplite Connect allows users to stay updated with schemes, earn rewards, and access exclusive features. Download the APK today!" />
        <meta property="og:image" content="/images/app_logo.png" />
        <meta property="og:url" content="https://oplite-connect.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      </Helmet>

      {/* Header Section */}
      <header className="header">
        <div className="container">
           {/* Logo */}
           <img
            src="/images/app_logo.png" // Path to your logo image
            alt="Oplite Connect Logo"
            className="app-logo"
          />
          <h1 className="app-name">Oplite Connect</h1>
          <p className="tagline">Seamlessly Connect, Communicate, and Collaborate</p>
          <a
            href="https://drive.google.com/file/d/1SoZqA9lNgEuqAWhBnJuV7HlRSDKfa9XI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <FaDownload /> Download APK
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>App Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <FaInfoCircle size={50} color="#fff" />
              <h3>Scheme Information</h3>
              <p>Stay updated with the latest schemes and offers available exclusively for users.</p>
            </div>
            <div className="feature">
              <FaQrcode size={50} color="#fff" />
              <h3>QR Code Functionality</h3>
              <p>Scan QR codes to quickly access scheme details or validate rewards.</p>
            </div>
            <div className="feature">
              <FaGift size={50} color="#fff" />
              <h3>Earn and Redeem Points</h3>
              <p>Accumulate points through various activities and redeem them for exciting rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="app-preview">
        <div className="container">
          <h2>See How the App Looks</h2>
          <div className="app-images">
            <img src="/images/app_4.jpg" alt="App Screenshot 1" />
            <img src="/images/app_7.jpg" alt="App Screenshot 2" />
            <img src="/images/app_5.jpg" alt="App Screenshot 3" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Oplite Connect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
