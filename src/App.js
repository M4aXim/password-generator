import React, { useState } from 'react';
import './App.css';

const PasswordGenerator = () => {
  
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let chars = '';
    if (includeUpper) chars += upperChars;
    if (includeLower) chars += lowerChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  }
  
  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="input-container">
        <label>Password Length:</label>
        <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
      </div>
      <div className="input-container">
        <label>Include Uppercase:</label>
        <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} />
      </div>
      <div className="input-container">
        <label>Include Lowercase:</label>
        <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} />
      </div>
      <div className="input-container">
        <label>Include Numbers:</label>
        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
      </div>
      <div className="input-container">
        <label>Include Symbols:</label>
        <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div className="password-container">
        <span>{password}</span>
        <i className="far fa-copy copy-icon" onClick={() => navigator.clipboard.writeText(password)}></i>
      </div>
    </div>
  )
}

export default PasswordGenerator;