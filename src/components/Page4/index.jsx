import "./style.css";
import img6 from "../../assets/img6.jpg"
import img7 from "../../assets/img7.jpg"
import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"

export default function Page4() {
  return (
    <div className="page4">
        <h3>Menu</h3>
        <h1>Food Full of treaty Love</h1>
        <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
        <div className="cards">
            <div className="card">
                <img src={img6} alt="" />
                <div className="card-price">
                    <h1>Vegie Muffen</h1>
                    <h1>16$</h1>
                </div>
                <p>There are many things are needed to start the Fast Food Business.</p>
                <h1 className="plus">+</h1>
            </div>

            <div className="card">
                <img src={img7} alt="" />
                <div className="card-price">
                    <h1>Salads</h1>
                    <h1>12$</h1>
                </div>
                <p>There are many things are needed to start the Fast Food Business.</p>
                <h1 className="plus">+</h1>
            </div>

            <div className="card">
                <img src={img8} alt="" />
                <div className="card-price">
                    <h1>Burger</h1>
                    <h1>10$</h1>
                </div>
                <p>There are many things are needed to start the Fast Food Business.</p>
                <h1 className="plus">+</h1>
            </div>

            <div className="card">
                <img src={img9} alt="" />
                <div className="card-price">
                    <h1>Delmonico Steak dish</h1>
                    <h1>14$</h1>
                </div>
                <p>There are many things are needed to start the Fast Food Business.</p>
                <h1 className="plus">+</h1>
            </div>

            <div className="card">
                <img src={img10} alt="" />
                <div className="card-price">
                    <h1>Egg Masala</h1>
                    <h1>9$</h1>
                </div>
                <p>There are many things are needed to start the Fast Food Business.</p>
                <h1 className="plus">+</h1>
            </div>

            <div className="card">
                <img src={img11} alt="" />
                <div className="card-price">
                    <h1>Peach Melba dish</h1>
                    <h1>15$</h1>
                </div>
                <p>There are many things are needed to start the Fast Food Business.</p>
                <h1 className="plus">+</h1>
            </div>
        </div>
        <button className="learn">Learn More</button>
    </div>
  );
}