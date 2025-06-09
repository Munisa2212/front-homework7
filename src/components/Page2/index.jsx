import "./style.css";
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

export default function Page2() {
  return (
    <div className="page2">
        <div>
            <h2>Features</h2>
            <h1>Food with a New Passion</h1>
        </div>
        <div className="cards">
            <div className="card">
                <img src={img2} alt="" />
                <h1>Quality Food</h1>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
            </div>
            <div className="card">
                <img src={img3} alt="" />
                <h1>Food Delivery</h1>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
            </div>
            <div className="card">
                <img src={img4} alt="" />
                <h1>Super Taste</h1>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
            </div>
        </div>
    </div>
  );
}