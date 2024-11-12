import React from 'react';
import grisha from './assets/grishunka.jpg';
import hate from './assets/hate.jpeg';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="party-title">Georgia United Party</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">About Us</a></li>
            <li className="nav-item"><a href="#contact">Call Us</a></li>
            <li className="nav-item"><a href="#program">Our Program</a></li>
            <li className="nav-item"><a href="#join">Join Us</a></li>
          </ul>
        </nav>
      </header>

      <div className="main-content">
        <p className="slogan">Together with Stalin, Only Communism, No to America!</p>
        <p className="vote-message">Vote for our party on the 21st, Communist-Socialist Movement in Georgia.</p>
        <p className="vote-message">Grisha Oniani Will Make Georgia Great Again!</p>
        <img src={hate} alt="Hate Symbol" className="hate-image" />
      </div>

      <div className="info">
        <p className="info-message">For more information, contact us at: info@georgiaunited.ge</p>
      </div>

      <style jsx>{`
        .app {
          background-image: url(${grisha});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100vw;
          height: 100vh;
          color: white;
          text-align: center;
          font-family: 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          position: relative;
        }
        
        .header {
          background-color: rgba(0, 0, 0, 0.7);
          width: 100%;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
          transition: background-color 0.3s ease;
        }

        .header:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .party-title {
          font-size: 3em;
          margin: 0;
          color: #ffeb3b;
          font-weight: bold;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: 40px;
          padding: 0;
          margin: 0;
        }

        .nav-item a {
          color: white;
          text-decoration: none;
          font-size: 1.3em;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-item a:hover {
          color: #ffeb3b;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .nav-item a::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #ffeb3b;
          bottom: -5px;
          left: 0;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }

        .nav-item a:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .main-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.75);
          padding: 40px;
          border-radius: 15px;
          max-width: 80%;
          text-align: center;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
          animation: fadeIn 1.5s ease-in-out;
        }

        .info {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.8);
          padding: 15px 30px;
          border-radius: 10px;
          font-size: 1.2em;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.8s ease-out;
        }

        .info-message {
          font-size: 1.1em;
          margin: 0;
        }

        .hate-image {
          width: 150px;
          height: auto;
          margin: 20px auto;
          border-radius: 10px;
          border: 2px solid #ffeb3b;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .slogan {
          font-size: 2em;
          font-weight: bold;
          color: #ffeb3b;
          margin: 15px 0;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
        }

        .vote-message {
          font-size: 1.5em;
          margin: 10px 0;
          color: #ffffff;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .party-title {
            font-size: 2em;
          }

          .nav-list {
            gap: 20px;
          }

          .main-content {
            padding: 25px;
          }

          .slogan {
            font-size: 1.6em;
          }

          .vote-message {
            font-size: 1.3em;
          }

          .info-message {
            font-size: 1em;
          }

          .hate-image {
            width: 130px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
