import { mainSearchValue } from "./Header";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.querySelector("header").style.visibility = "visible";

    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
    });

    const installApp = document.getElementById("appDownloadButton");

    installApp.addEventListener("click", (e) => {
      // Hide the app provided install promotion
      // Show the install prompt

        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            // User accepted the install prompt
          } else {
            // User dismissed the install prompt
          }
        });
      // Wait for the user to respond to the prompt
    });
  }, []);

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#fff";
  }, []);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") == "newUser") {
    } else {
      navigate("/reciters");
    }
  });

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
      <Link
        to="/reciters"
        onClick={() => {
          localStorage.setItem("user", "alreadyUser");
        }}
        className="button-home"
      >
        Get Started
      </Link>
      <a id="appDownloadButton" className="button-home second-button">
        Download App
      </a>
      <div className="dec1 display-flex-row">
        <i className="fa-solid fa-play"></i>
        <h4>Al-Fatihah</h4>
        <i className="bi bi-file-earmark-arrow-down-fill"></i>
      </div>
      <div className="dec2 display-flex-row">
        <i className="fa-solid fa-pause"></i>
        <h4>Al-Baqarah</h4>
        <i className="bi bi-file-earmark-arrow-down-fill"></i>
      </div>
    </div>
  );
}

export default Home;
