import "./App.css";
import logo from "./assets/round-logo.png";
import paleVioletLogo from "./assets/pale-violet-logo.png";
import { Carousel } from "bootstrap";
import { CarouselItem } from "react-bootstrap";

function App() {
  return (
    <div className="">
      <header className="">

        <img src={logo} className="logo" alt="chica chingona logo"></img>
        <h1>Chica Chingona Crafts</h1>
      </header>
    </div>
  );
}

export default App;
