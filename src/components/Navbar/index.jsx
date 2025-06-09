import "./style.css";

export default function Navbar() {
  return (
    <div className="header">
      <div className="header-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Food_Network_logo.svg/1200px-Food_Network_logo.svg.png"
          alt=""
          className="logo"
        />
        <ul>
          <li id="home">Home</li>
          <li>About us</li>
          <li>Menu</li>
          <li>Features</li>
          <li>Contact us</li>
        </ul>
      </div>
      <button className="booking-btn">Booking Now</button>
    </div>
  );
}
