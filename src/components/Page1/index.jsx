import "./style.css";
import img1 from "../../assets/img1.png"

export default function Page1() {
  return (
    <div className="page1">
        <div className="page1-1">
            <h1>Making time a good time by making food the good food.</h1>
            <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment.</p>
            <div className="btns">
                <button className="order">Order Now</button>
                <button className="detail">Food Details</button>
            </div>
        </div>
        <div className="img">
            <img src={img1} alt="" />
        </div>
    </div>
  );
}