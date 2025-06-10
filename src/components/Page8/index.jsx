import React from 'react';
import './style.css';

export default function Page8() {
  return (
    <div className="page8">
      <ul className="footer-column">
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Food_Network_logo.svg/1200px-Food_Network_logo.svg.png"
            alt="Company Logo"
            className="logo"
          />
        </li>
        <li>www.companyname.com</li>
        <li>companyname@gmail.com</li>
        <li>Phone: +7 485-118-03-25</li>
      </ul>

      <ul className="footer-column">
        <li><h3>Home</h3></li>
        <li>Landing Page</li>
        <li>Documentation</li>
        <li>Referral Program</li>
        <li>UI & UX Design</li>
        <li>Web Design</li>
      </ul>

      <ul className="footer-column">
        <li><h3>Menu</h3></li>
        <li>Landing Page</li>
        <li>Documentation</li>
        <li>Referral Program</li>
        <li>UI & UX Design</li>
        <li>Web Design</li>
      </ul>

      <ul className="footer-column">
        <li><h3>Company</h3></li>
        <li>Landing Page</li>
        <li>Documentation</li>
        <li>Referral Program</li>
      </ul>
    </div>
  );
}
