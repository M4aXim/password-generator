  import React, { useState } from 'react';
  import './App.css';
  import zxcvbn from 'zxcvbn';


  const PasswordGenerator = () => {
    
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [score, setScore] = useState(0);


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
      setScore(zxcvbn(result).score);
    }
    const passwordLabel = [
      "Very Weak",
      "Weak",
      "Fair",
      "Strong",
      "Very Strong"
    ];
  
    const passwordColor = [
      "#cb473e",
      "#f07d58",
      "#f5b461",
      "#8bd468",
      "#4ac566"
    ];
    
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
        <p className='support'>Contact us at <a href="mailto:projects@maksimmalbasa.in.rs">projects@maksimmalbasa.in.rs</a> for support or suggestions.</p>
        <progress
  className="password-strength"
  style={{ backgroundColor: passwordColor[score] }}
  value={score}
  max="4"
/>
<br />
<label style={{ color: passwordColor[score] }}>
  {passwordLabel[score]}
</label>
      </div>
    )
  }

  export default PasswordGenerator;
