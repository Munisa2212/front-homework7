import "./style.css";
import img13 from "../../assets/img13.jpg"

export default function Page6() {
  return (
    <div className="page6">
        <h2>Testimonial</h2>
        <h1>Making Food great again and again</h1>
        <p className="firstP">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
        <img src={img13} alt="" />
        <p className="secondP">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
        {/* <div className="stars">
            <p><i className="fa-solid fa-star" style={{ color: '#DC780B' }}></i></p>
            <p><i className="fa-solid fa-star" style={{ color: '#DC780B' }}></i></p>
            <p><i className="fa-solid fa-star" style={{ color: '#DC780B' }}></i></p>
            <p><i className="fa-solid fa-star" style={{ color: '#DC780B' }}></i></p>
            <p><i className="fa-solid fa-star" style={{ color: '#C4C4C4' }}></i></p>
        </div> */}
        <h4>Augusta W. Reynoso</h4>
        <p className="secondP">UI&UX DESIGNER</p>
    </div>
  );
}