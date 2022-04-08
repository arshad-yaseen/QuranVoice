import { mainSearchValue } from "./Header";
import 'animate.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#fff";
  }, []);

  function userCheckHandler() {
    localStorage.setItem("user", "alreadyUser");
  }

  useEffect(() => {
    let isUser = localStorage.getItem("user");
    if (isUser == "alreadyUser") {
      window.location.pathname = "/reciters";
    }
  }, []);

  return (
    <div className="home">
      <audio></audio>
      <div className="intro-wrapper display-flex-row">
        <h1>﷽</h1>
      </div>

      <h3>The light of</h3>
      <h1>Quran</h1>
      <p>
        Welcome to the world of quran. Quran recitations of your <br />{" "}
        favourite reciter. Translations, tafseers, quran index
      </p>
      <Link to="/reciters" className="button-home" onClick={userCheckHandler}>
        Get Started
      </Link>
      <a href="" className="button-home second-button">
        Download App 
      </a>
      <div className="dec1 display-flex-row">
        <i class="fa-solid fa-play"></i>
        <h4>Al-Fatihah</h4>
        <i class="bi bi-file-earmark-arrow-down-fill"></i>
      </div>
      <div className="dec2 display-flex-row">
        <i class="fa-solid fa-pause"></i>
        <h4>Al-Baqarah</h4>
        <i class="bi bi-file-earmark-arrow-down-fill"></i>
      </div>
    </div>
  );
}



export default Home;
