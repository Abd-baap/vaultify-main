"use client"

// components/BitaegirisSecurity.jsx
import React, { useEffect, useRef, useState } from 'react';

const BitaegirisSecurity = () => {
  const transformedPasswordRef = useRef(null);
  const finalMessageRef = useRef(null);
  const [lockState, setLockState] = useState('closed'); // 'closed', 'opening', 'open'
  const [checkmarkVisible, setCheckmarkVisible] = useState(false);

  // Generic typewriter effect function adapted for React refs
  const typewriterEffect = (elementRef, text, speed = 50, callback = null) => {
    if (!elementRef.current) return;

    let i = 0;
    elementRef.current.innerHTML = ''; // Use innerHTML to preserve existing spans/markup
    elementRef.current.classList.add('typing-active');

    const interval = setInterval(() => {
      if (i < text.length) {
        // Check if the next character is part of an HTML tag
        if (text.substring(i, i + 1) === '<') {
          const tagEnd = text.indexOf('>', i);
          if (tagEnd !== -1) {
            elementRef.current.innerHTML += text.substring(i, tagEnd + 1);
            i = tagEnd + 1;
          } else {
            // Fallback if tag is malformed, just add char
            elementRef.current.innerHTML += text.charAt(i);
            i++;
          }
        } else {
          elementRef.current.innerHTML += text.charAt(i);
          i++;
        }
      } else {
        clearInterval(interval);
        elementRef.current.classList.remove('typing-active');
        if (callback) callback();
      }
    }, speed);
  };

  // Step 2: Password Encryption Logic animation
  const animatePasswordTransformation = () => {
    const examplePasswords = [
      'your_password + 1234 = your_password1234',
      'email_pass + code = encrypted_email_pass',
      'another_pass + code = complex_secure_pass',
    ];
    let currentExampleIndex = 0;

    const typeEffectPassword = (elementRef, text) => {
      if (!elementRef.current) return;
      let i = 0;
      elementRef.current.textContent = '';
      elementRef.current.classList.add('typing-active');

      const interval = setInterval(() => {
        if (i < text.length) {
          elementRef.current.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          elementRef.current.classList.remove('typing-active');
          setTimeout(() => {
            currentExampleIndex = (currentExampleIndex + 1) % examplePasswords.length;
            typeEffectPassword(elementRef, examplePasswords[currentExampleIndex]);
          }, 1500); // Wait 1.5 seconds before typing next
        }
      }, 50); // Typing speed
    };
    typeEffectPassword(transformedPasswordRef, examplePasswords[currentExampleIndex]);
  };

  // Step 4: Decryption Process animation
  const animateDecryptionLock = () => {
    setLockState('closed'); // Reset to initial state
    const decryptionInputs = document.querySelectorAll('.decryption-inputs .input-item');

    let delay = 0;
    decryptionInputs.forEach((input, index) => {
      setTimeout(() => {
        input.style.transform = 'translateY(-20px)'; // Simple bounce
        input.style.filter = 'drop-shadow(0 0 10px #00e0ff)'; // Glowing effect (neon-blue)
        input.style.opacity = 1; // Ensure visibility
        setTimeout(() => {
          input.style.transform = 'translateY(0)';
          input.style.filter = 'none';
        }, 400);
      }, delay);
      delay += 300;
    });

    setTimeout(() => {
      setLockState('opening'); // Trigger opening animation
      setTimeout(() => {
        setLockState('open'); // Lock fully open
      }, 500); // Half second for closed lock to fade out
    }, delay + 800); // After all inputs are highlighted
  };

  // Final Message animation
  const triggerFinalMessageAnimation = () => {
    setCheckmarkVisible(true);
  };

  useEffect(() => {
    // Trigger animations after component mounts
    const initialDelay = 500; // Delay before first animation starts

    // Step 2: Password Encryption Logic animation
    setTimeout(() => {
      animatePasswordTransformation();
    }, initialDelay);

    // Step 4: Decryption Process animation
    setTimeout(() => {
      animateDecryptionLock();
    }, initialDelay + 2000); // Start after 2 seconds from previous animation

    // Final Message animation (typewriter + checkmark)
    setTimeout(() => {
      const originalFinalText = `"Your passwords stay safe — even we can't see them. 🔒"`;
      typewriterEffect(finalMessageRef, originalFinalText, 50, triggerFinalMessageAnimation);
    }, initialDelay + 5000); // Start after 5 seconds from previous animation

    // Cleanup intervals if component unmounts (important for SPA)
    return () => {
      // No specific cleanup for these animations as they are one-shot or self-cycling
      // If you had continuous loops, you'd clear them here.
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-blue-100 w-full max-w-4xl p-8 mx-auto my-12 flex flex-col items-center justify-start gap-10">
      <h1 className="font-inter text-center text-blue-600 mb-5 text-4xl font-bold drop-shadow-lg">
        Your Trust, Our Priority: Bitaegiris Security Explained
      </h1>

      {/* Step 1: Mastercode Setup */}
      <div className="step w-full px-5 opacity-100">
        <div className="step-content text-center w-full">
          <h2 className="font-inter text-blue-600 mb-6 text-3xl font-bold drop-shadow-sm">
            Step 1: Mastercode Setup
          </h2>
          <p className="text-lg leading-relaxed mb-5">
            You choose a <span className="text-blue-600 font-bold">Mastercode</span> of your choice, for example:{' '}
            <span className="font-inter text-gray-800 font-bold bg-yellow-100 px-2 py-1 rounded-md whitespace-nowrap inline-block mx-1">1234</span>.
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center bg-gray-50 rounded-xl p-4 border border-blue-100 shadow-sm">
              <i className="fas fa-key text-blue-500 text-2xl mr-4"></i>
              <input type="text" placeholder="e.g., 1234" disabled className="bg-transparent border-none text-gray-800 text-lg outline-none text-center w-36" />
            </div>
            <p className="text-lg leading-relaxed mb-5">
              This Mastercode is <span className="text-blue-600 font-bold">hashed</span> (transformed into an irreversible string) and securely stored in <span className="text-blue-600 font-bold">Clerk</span>.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 border border-blue-100 shadow-sm flex flex-col items-center w-fit">
              <span className="text-blue-600 mb-2">Your Mastercode becomes:</span>
              <span className="font-inter text-blue-400 text-2xl tracking-wider font-bold">#######</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Password Encryption Logic */}
      <div className="step w-full px-5 opacity-100">
        <div className="step-content text-center w-full">
          <h2 className="font-inter text-blue-600 mb-6 text-3xl font-bold drop-shadow-sm">
            Step 2: Password Encryption Logic
          </h2>
          <p className="text-lg leading-relaxed mb-5">
            Every password you save is combined with your Mastercode before encryption, for example:
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center bg-gray-50 rounded-xl p-4 border border-blue-100 shadow-sm">
              <span className="font-inter text-gray-800 text-xl whitespace-nowrap">
                <span className="text-blue-600">your_password</span>
                <i className="fas fa-plus-circle text-blue-400 mx-3"></i>
                <span className="text-blue-500">Mastercode</span>
                <i className="fas fa-arrow-right text-blue-400 mx-3"></i>
                <span ref={transformedPasswordRef} className="font-inter text-blue-400 relative overflow-hidden"></span>
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-5">
              There is internal logic where the Mastercode may modify the password (e.g., add characters if the password has numbers).
            </p>
          </div>
        </div>
      </div>

      {/* Step 3: Dual Database Structure */}
      <div className="step w-full px-5 opacity-100">
        <div className="step-content text-center w-full">
          <h2 className="font-inter text-blue-600 mb-6 text-3xl font-bold drop-shadow-sm">
            Step 3: Dual Database Structure
          </h2>
          <div className="flex justify-around gap-8 flex-wrap mt-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-blue-100 shadow-sm w-full md:w-5/12 flex flex-col items-center text-left transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-md">
              <i className="fas fa-database text-blue-600 text-4xl mb-4"></i>
              <h3 className="font-inter text-blue-600 mb-4 text-xl text-center font-bold">MongoDB Stores:</h3>
              <ul className="list-none p-0 m-0 w-full">
                <li className="bg-blue-50 px-4 py-2 mb-2 rounded-lg border-l-4 border-blue-600 text-base text-gray-800">Website</li>
                <li className="bg-blue-50 px-4 py-2 mb-2 rounded-lg border-l-4 border-blue-600 text-base text-gray-800">Username</li>
                <li className="bg-blue-50 px-4 py-2 mb-2 rounded-lg border-l-4 border-blue-600 text-base text-gray-800">IV (Initialization Vector)</li>
                <li className="bg-blue-50 px-4 py-2 mb-2 rounded-lg border-l-4 border-blue-600 text-base text-gray-800">Encrypted password</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-blue-100 shadow-sm w-full md:w-5/12 flex flex-col items-center text-left transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-md">
              <i className="fas fa-lock text-blue-600 text-4xl mb-4"></i>
              <h3 className="font-inter text-blue-600 mb-4 text-xl text-center font-bold">Clerk Stores:</h3>
              <ul className="list-none p-0 m-0 w-full">
                <li className="bg-blue-50 px-4 py-2 mb-2 rounded-lg border-l-4 border-blue-600 text-base text-gray-800">Encryption key</li>
                <li className="bg-blue-50 px-4 py-2 mb-2 rounded-lg border-l-4 border-blue-600 text-base text-gray-800">User ID</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 italic text-gray-600">This separation enhances security by distributing critical components.</p>
        </div>
      </div>

      {/* Step 4: Decryption Process */}
      <div className="step w-full px-5 opacity-100">
        <div className="step-content text-center w-full">
          <h2 className="font-inter text-blue-600 mb-6 text-3xl font-bold drop-shadow-sm">
            Step 4: Decryption Process
          </h2>
          <p className="text-lg leading-relaxed mb-5">To decrypt a password, the system securely retrieves 3 things:</p>
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="input-item bg-gray-50 rounded-xl p-4 border border-blue-100 shadow-sm flex flex-col items-center w-36 transition-transform duration-300">
              <i className="fas fa-fingerprint text-blue-600 text-3xl mb-2"></i>
              <span className="text-gray-800 text-base text-center">IV (from MongoDB)</span>
            </div>
            <div className="input-item bg-gray-50 rounded-xl p-4 border border-blue-100 shadow-sm flex flex-col items-center w-36 transition-transform duration-300">
              <i className="fas fa-key text-blue-600 text-3xl mb-2"></i>
              <span className="text-gray-800 text-base text-center">Key (from Clerk)</span>
            </div>
            <div className="input-item bg-gray-50 rounded-xl p-4 border border-blue-100 shadow-sm flex flex-col items-center w-36 transition-transform duration-300">
              <i className="fas fa-shield-alt text-blue-600 text-3xl mb-2"></i>
              <span className="text-gray-800 text-base text-center">Encrypted Password (from MongoDB)</span>
            </div>
          </div>
          <p className="text-lg leading-relaxed mt-5 mb-5">
            Decryption only happens <span className="text-blue-600 font-bold">after you sign in</span> and{' '}
            <span className="text-blue-600 font-bold">enter the correct Mastercode</span>.
          </p>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <i className={`fas fa-lock text-blue-600 text-5xl absolute transition-all duration-500 ${lockState === 'open' ? 'opacity-0 scale-80' : 'opacity-100 scale-100'}`}></i>
              <i className={`fas fa-lock-open text-blue-400 text-5xl absolute transition-all duration-500 ${lockState === 'open' ? 'opacity-100 scale-100 drop-shadow-lg' : 'opacity-0 scale-80'}`}></i>
            </div>
            <p className="text-lg text-gray-700">{lockState === 'open' ? 'Password decrypted!' : 'Lock remains closed...'}</p>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="step final-message w-full px-5 opacity-100">
        <div className="step-content text-center w-full">
          <div className="bg-gray-50 rounded-xl p-8 border border-blue-100 shadow-sm w-fit max-w-4xl mx-auto">
            <p ref={finalMessageRef} className="font-inter text-blue-400 text-3xl drop-shadow-md text-center mb-6 font-bold"></p>
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <i className={`fas fa-check-circle text-blue-400 text-5xl transition-all duration-1000 ${checkmarkVisible ? 'opacity-100 scale-100 animate-glow-pulse' : 'opacity-0 scale-50'}`}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations not directly supported by Tailwind */}
      <style jsx>{`
        @keyframes typing-cursor {
          from, to { border-color: transparent }
          50% { border-color: var(--primary-blue); }
        }

        .typing-active {
          border-right: .15em solid var(--primary-blue);
          animation: typing-cursor .75s step-end infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 1.5s infinite alternate;
        }

        @keyframes glow-pulse {
            0% { text-shadow: 0 0 5px #00e0ff, 0 0 10px #00e0ff; }
            100% { text-shadow: 0 0 15px #00e0ff, 0 0 30px #00e0ff; }
        }
      `}</style>
    </div>
  );
};

export default BitaegirisSecurity;
