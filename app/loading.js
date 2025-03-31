"use client"
import { useEffect, useState } from "react";

export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading delay (remove this if not needed)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <p className="font-bold text-3xl">Loading, please wait...</p>
    <p className="font-bold text-xl">We will never break your trust or your expectation </p>
        </div>
      ) : (
        <p>Content Loaded!</p>
      )}

      {/* Global CSS for optimization */}
      <style jsx>{`
        /* General styles */
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
          text-align: center;
          flex-direction: column;
          font-family: Arial, sans-serif;
        }

        /* Loader styles */
        .loader-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(255, 255, 255, 0.3);
          border-top: 5px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 15px;
        }

        /* Loading text */
        p {
          font-size: 18px;
          font-weight: 500;
        }

        /* Keyframes for animation */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive styles */
        @media (max-width: 480px) {
          .loader {
            width: 40px;
            height: 40px;
            border-width: 4px;
          }
          p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
        }
