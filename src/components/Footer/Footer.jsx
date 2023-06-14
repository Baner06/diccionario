import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer>
      <p
        className={`Footer ${isHovered ? 'Transparent' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Created By <br />
        Junior Rodriguez, Luis Pinto AND Benigno Neira.
      </p>
    </footer>
  );
}
