import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Pigeon Hat Collective</p>
      </div>
    </footer>
  );
};

export default Footer;
