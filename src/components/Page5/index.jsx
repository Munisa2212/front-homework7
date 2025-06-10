import "./style.css";
import img12 from "../../assets/img12.png"


export default function Page5() {
  return (
   <div className="page5">
        <div className="content5">
            <h2>Take away</h2>
            <h1>Food Stalls with Persons but  to  Product marketing plane. </h1>
            <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>
            <div className="buttons">
            <button className="appstore">
                <h1>
                    App Store
                </h1>
            </button>
            <button className="googleplay">
                <h1>
                Google Play
                </h1>
            </button>
            </div>
        </div>
        <div className="imgdiv">
            <img src={img12} alt="" />
        </div>
   </div>
  );
}
