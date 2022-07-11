import React, { useEffect, useContext, useState } from "react";
import { AllReciters } from "../context/Context";
import { mainSearchValue } from "./Header";
import { Link } from "react-router-dom";
import { GetReciterFunction } from "../context/AppProvider";

function Reciters() {
  const fullReciters = useContext(AllReciters);
  const searchValue = useContext(mainSearchValue);
  const ReciterFunction = useContext(GetReciterFunction);

  let [reciters, setReciters] = useState([]);

  useEffect(() => {
    let header = document.querySelector("header");
    header.style.backgroundColor = "white";
    let body = document.querySelector("body");
    body.style.backgroundColor = "#f3f6f8";
    setReciters(fullReciters);
   header.style.opacity = "1";
  }, []);

  useEffect(() => {
    document.querySelector("header").style.visibility = "visible";
    let recitersWrapper = document.getElementById("recitersWrapper");
    recitersWrapper.addEventListener("scroll", (event) => {
      let maxScrollValue = 18203.5;
      let currentScrollvalue = recitersWrapper.scrollTop;
      let scrollValuePercent = (currentScrollvalue / maxScrollValue) * 100;
      let scrollBar = document.getElementById("scrollBar");
      if (scrollValuePercent < 90) {
        scrollBar.style.width = `${scrollValuePercent}%`;
      } else {
        scrollBar.style.width = `${scrollValuePercent + 1.5}%`;
      }
    });
  }, []);

  function handleSearchClose() {
    let search = document.getElementById("search");
    search.style.top = "-100%";
    let searchIcon = document.querySelector(".search-icon");
    searchIcon.style.opacity = "1";
    let searchCloseIcon = document.querySelector(".searchCloseIcon");
    searchCloseIcon.style.top = "-50px";
  }

  const recitersElement = reciters
    .filter((item) => {
      if (searchValue == "") {
        return item;
      } else if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return item;
      }
    })
    .map((reciter) => {
      let MojawwadResult = reciter.Server.includes("Mojawwad")
      let MaulimResult = reciter.Server.includes("lim")
      let QurashiResult = reciter.Server.includes("qurashi")
      return (
        <Link
          onClick={() => {
            ReciterFunction({
              reciterName: reciter.name,
              reciterId: reciter.id,
              reciterServer: reciter.Server,
              reciterRewaya: reciter.rewaya
            });
            localStorage.setItem("reciterName", reciter.name);
            localStorage.setItem("reciterId", reciter.id);
            localStorage.setItem(reciter.id, reciter.Server);
          }}
          to={`/recitations/${reciter.id}`}
        >
          <div
            onClick={() => {
              handleSearchClose();
            }}
            className="reciter"
          >
            <h3>{reciter.name}</h3>
          </div>
            <h5 className="reciters-rewaya" >{`${reciter.rewaya}   (${MojawwadResult == true ? 'al mojawwad' : MaulimResult == true ? 'al molim' : QurashiResult == true ? 'qurashi' : 'normal'})`}</h5>
        </Link>
      );
      
    });


    // TODO Reciter Search Open
  function reciterSearchhandler() {
    setTimeout(()=> {
      let responsiveBar = document.getElementById('responsiveBar');
    responsiveBar.style.visibility='hidden'
    },300)
    let search = document.getElementById("search");
    search.style.top = "0";
    let searchCloseIcon = document.querySelector(".searchCloseIcon");
    searchCloseIcon.style.top = "28px";
    search.focus();
    search.value = "";
  }

  return (
    <div className="reciters display-flex-row">
      <div id="recitersWrapper" className="reciters-wrapper">
        {recitersElement}
        <div className="scrollbar-wrapper">
          <div className="scroll-bar-base">
            <div id="scrollBar" className="scroll-bar"></div>
          </div>
          <h5 onClick={reciterSearchhandler} className="reciter-search-option">
            <i className="fa-solid fa-magnifying-glass"></i> Search reciter
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Reciters;
