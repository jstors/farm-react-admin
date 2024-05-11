import React, { useEffect, useState } from 'react';
import { Strength } from './types'

const StrengthCheckInput = ({ password }) => {
  const [strength, setStrength] = useState<Strength>('weak');

  const strengthMeterColors = {
    weak: 'red',
    average: 'orange',
    strong: 'green',
  };

  useEffect(() => {
    checkPasswordStrength(password)
  },[password])

  const checkPasswordStrength = (password) => {
    if (password.length === 0) return;
    let strengthIndicator = 0;
    if (password.length >= 6) strengthIndicator++;
    if (password.match(/[a-z]+/)) strengthIndicator++;
    if (password.match(/[0-9]+/)) strengthIndicator++;
    if (password.match(/[A-Z]+/)) strengthIndicator++;
    if (password.match(/[\W_]+/)) strengthIndicator++;

    if (strengthIndicator <= 2) setStrength('weak');
    if (strengthIndicator === 3) setStrength('average');
    if (strengthIndicator > 3) setStrength('strong');
  };


  
  return (
    <div>
      <div
        style={{
          height: '10px',
          width: '100%',
          backgroundColor: strengthMeterColors[strength],
        }}
      />
      <p>Password strength: {strength}</p>
    </div>
  );
};

export default StrengthCheckInput;