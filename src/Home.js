import "./css/Home.css";
import home1 from "./imgs/home1.png";
import home2 from "./imgs/home2.png";

function Home() {
  return (
    <div className="Home">
      <img src={home1} alt="" className="converstaion-img" />
      <div>
        <h1>
          B<span>i</span>ngue
        </h1>
        <p>One World One Conversation</p>
      </div>
      <img src={home2} alt="" className="talking-img" />
    </div>
  );
}

export default Home;