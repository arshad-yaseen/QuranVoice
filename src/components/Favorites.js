import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { favContext } from "../context/AppProvider";
import "../Css/Favorites.css";

function Favorites() {
  const allFavDetails = useContext(favContext);
  const [favElement, setFavElement] = useState();
  const [reciterId, setReciterId] = useState();
  const navigate = useNavigate();

  let favDetailslocalStorage =
    JSON.parse(localStorage.getItem("favDetailsLocal")) || [];

  useEffect(() => {
    let favItemsWrapper = document.getElementById("favItemsWrapper");
    if (favItemsWrapper.firstChild.id == "favItemNotFoundSvg") {
      let favItemNotFoundSvg = document.getElementById("favItemNotFoundSvg");
      favItemNotFoundSvg.style.visibility = "visible";
    } else {
      let favItemNotFoundSvg = document.getElementById("favItemNotFoundSvg");
      favItemNotFoundSvg.style.visibility = "hidden";
    }
  }, [favElement]);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.querySelector("header").style.opacity = "0";
    let favElement =
      allFavDetails &&
      favDetailslocalStorage
        .filter((item, index) => {
          return index != 0;
        })
        .map((item, index) => {
          setReciterId(item.reciterId);
          return (
            <div id={`favItem${index}`} className="fav-item">
              <audio id="favAudio" src={item.recitationUrl}></audio>
              <div className="fav-play-pause-button-wrapper display-flex-row">
                <i
                  onClick={() => {
                    window.open(item.recitationUrl);
                  }}
                  id="favPlayPauseButtonIcon"
                  class="fa-solid fa-circle-play"
                ></i>
              </div>
              <div className="fav-names-wrapper">
                <h2>{item.reciterName}</h2>
                <h4>{item.chapterName}</h4>
              </div>
              <div className="fav-extra-wrapper">
                <div class="more-info-button-wrapper">
                  <span>{item.rewaya}</span>
                  <i
                    id="favMoreInfoButton"
                    class="fa-solid fa-info-circle fav-more-info-button"
                  ></i>
                </div>
                <div className="go-to-icon-wrapper">
                  <i
                    onClick={() => {
                      window.open(item.recitationUrl);
                    }}
                    class="fa-solid fa-square-arrow-up-right"
                  ></i>
                </div>
                <div className="fav-download-button-wrapper">
                  <i
                    onClick={() => {
                      window.open(item.recitationUrl);
                    }}
                    class="fa-solid fa-circle-arrow-down fav-download-button"
                    id="favDownloadButton"
                  ></i>
                </div>
                <div className="fav-delete-icon-wrapper">
                  <i
                    onClick={(e) => {
                      let favDeleteElement = document.getElementById(
                        `favItem${e.target.classList[3]}`
                      );
                      favDeleteElement.remove();
                    }}
                    id="favDeleteIcon"
                    class={`fa-solid fa-circle-xmark fav-delete-icon ${index}`}
                  ></i>
                </div>
                <p id="favAudioTime">{`${item.durmins}:${item.dursecs}`}</p>
              </div>
              <div className="fav-seek-bar-base">
                <div className="fav-seek-bar"></div>
              </div>
            </div>
          );
        });
    setFavElement(favElement);
  }, []);

  return (
    <div className="favorites display-flex-row">
      <div className="fav-heading-wrapper">
        <i
          onClick={() => {
            if (reciterId) {
              navigate(`/recitations/${reciterId}`);
            } else {
              navigate("/reciters");
            }
          }}
          class="fa-solid fa-arrow-left-long"
        ></i>
        <h1>Favorites</h1>
      </div>
      <div id="favItemsWrapper" className="fav-items-wrapper">
        {favElement}
        <svg
          id="favItemNotFoundSvg"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M23.5,27.5H6.5l-1-15.19a.76.76,0,0,1,.77-.81H10a1.11,1.11,0,0,1,.89.44l1.22,1.56H23.5v2"
          />
          <path
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M26.3,20.7l.84-3.2H9.25L6.5,27.5H23.41a1.42,1.42,0,0,0,1.37-1.06l.76-2.88"
          />
          <path
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5,24.5h0a1.42,1.42,0,0,1,2,0h0"
          />
          <line
            x1="13.5"
            x2="14.5"
            y1="21.5"
            y2="21.5"
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="20.5"
            x2="21.5"
            y1="21.5"
            y2="21.5"
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.62,3.61C18.25,4,16.5,5.37,16.5,7a2.57,2.57,0,0,0,.7,1.7l-.7,2.8,2.86-1.43A8.12,8.12,0,0,0,22,10.5c3,0,5.5-1.57,5.5-3.5,0-1.6-1.69-2.95-4-3.37"
          />
          <line
            x1="21.25"
            x2="22.75"
            y1="6.25"
            y2="7.75"
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="22.75"
            x2="21.25"
            y1="6.25"
            y2="7.75"
            fill="none"
            stroke="#29abe2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Favorites;
