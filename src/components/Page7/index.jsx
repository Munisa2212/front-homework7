import "./style.css";

export default function Page7() {
  return (
    <div className="page7">
        <h2>Contact </h2>
        <h1>Food Stalls with Persons but also specialized equipment, Skills to manage.</h1>
        <div className="message-container">
            <input
                type="text"
                placeholder="Enter your message"
                className="message-input"
            />
            <button className="send-button">Send</button>
        </div>
    </div>
  );
}