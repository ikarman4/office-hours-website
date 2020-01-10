import React from 'react';
import './index.css';

function Footer() {
  return (
    <div className="footer">
      <h3 className="dark">GET IN TOUCH</h3>
      <p>For Inquiries or Potential Speaking Engagements</p>
      <p className="dark">Ian Karman<a href="mailto:ikarman4@bu.edu">ikarman4@bu.edu</a></p>
      <p className="dark">Ankur Barmezai<a href="mailto:ankurbam@bu.edu">ankurbam@bu.edu</a></p>
      <div className="divider"/>
      <p className="dark">© KarmanBamezai LLC. All rights reserved.</p>
    </div>
  );
}

export default Footer;
