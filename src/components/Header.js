import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import { AllReciters } from "./Context";
export const mainSearchValue = React.createContext();

export function Header(props) {
  const fullReciters = useContext(AllReciters);

  const [searchValue, setSearchValue] = useState("");
  const [whatWantSearchValue, setWhatWantSearchValue] = useState("");
  let [reciters, setReciters] = useState([]);

  useEffect(() => {
    setReciters(fullReciters);
  }, []);

  useEffect(()=> {
    let navItems = document.getElementById("navItems");
  navItems.addEventListener('click', function () {
    navItems.style.left = "-100%";
    let responsiveBar = document.getElementById("responsiveBar");
    responsiveBar.classList.replace("fa-xmark", "fa-bars");
  })
  },[])

  function handleNavBarClick() {
    let navItems = document.getElementById("navItems");
    let responsiveBar = document.getElementById("responsiveBar");
    navItems.style.left = "0";
    responsiveBar.classList.replace("fa-bars", "fa-xmark");
  }

  function handleNavBarClose() {
    let responsiveBar = document.getElementById("responsiveBar");
    let navItems = document.getElementById("navItems");
    navItems.style.left = "-100%";
    responsiveBar.classList.replace("fa-xmark", "fa-bars");
  }

  function userCheckHandler() {
    localStorage.setItem("user", "newUser");
  }

  function handleSearchClick() {
    let whatWantMainWrapper = document.getElementById("whatWantMainWrapper");
    let search = document.getElementById("search");
    let whatWantSearchInput = document.getElementById("whatWantSearchInput");
    whatWantMainWrapper.style.top = "0";
    whatWantSearchInput.focus();
    search.blur();
  }

  function handleSearchClose() {
    let search = document.getElementById("search");
    search.style.top = "-100%";
    let searchIcon = document.querySelector(".search-icon");
    searchIcon.style.opacity = "1";
    let searchCloseIcon = document.querySelector(".searchCloseIcon");
    searchCloseIcon.style.top = "-28px";

  }

  useEffect(() => {
    let whatWantMainWrapper = document.getElementById("whatWantMainWrapper");
    whatWantMainWrapper.addEventListener("click", function (event) {
      if (event.target == whatWantMainWrapper) {
        let whatWantMainWrapper = document.getElementById(
          "whatWantMainWrapper"
        );
        let search = document.getElementById("search");
        whatWantMainWrapper.style.top = "-150%";
        search.blur();
      }
    });
  }, []);

  function handleWhatYouWant() {
    let whatWantMainWrapper = document.getElementById("whatWantMainWrapper");
    let search = document.getElementById("search");
    let whatWantSearchInput = document.getElementById("whatWantSearchInput");
    whatWantMainWrapper.style.top = "0";
    let whatWantWrapper = document.getElementById("whatWantWrapper");
      whatWantWrapper.style.height = "150px";
    whatWantSearchInput.value=''
    let searchResultsWrapper = document.getElementById(
      "searchResultsWrapper"
    );
    searchResultsWrapper.style.height = "0px";
      searchResultsWrapper.style.opacity = "0";
    whatWantSearchInput.focus();
    search.blur();
  }
  function showSearchResults(event) {
    setWhatWantSearchValue(event.target.value);
    let whatWantSearchInput = document.getElementById("whatWantSearchInput");
    if (whatWantSearchInput.value) {
      let whatWantWrapper = document.getElementById("whatWantWrapper");
      whatWantWrapper.style.height = "500px";
      let searchResultsWrapper = document.getElementById(
        "searchResultsWrapper"
      );
      searchResultsWrapper.style.height = "360px";
      searchResultsWrapper.style.opacity = "1";
    } else {
      let whatWantWrapper = document.getElementById("whatWantWrapper");
      whatWantWrapper.style.height = "150px";
      let searchResultsWrapper = document.getElementById(
        "searchResultsWrapper"
      );
      searchResultsWrapper.style.height = "0px";
      searchResultsWrapper.style.opacity = "0";
    }
  }

  const WhatWantrecitersElement = reciters
    .filter((item) => {
      if (whatWantSearchValue == "") {
        return item;
      } else if (
        item.name.toLowerCase().includes(whatWantSearchValue.toLowerCase())
      ) {
        return item;
      }
    })
    .map((reciter) => {
      return (
        <div className="search-result">
          <h4>
            {reciter.name} <i class="fa-solid fa-caret-right"></i>
          </h4>
        </div>
      );
    });

  useEffect(() => {
    let whatWantWrapper = document.getElementById("whatWantWrapper");
    whatWantWrapper.addEventListener("dblclick", function () {
      let whatWantMainWrapper = document.getElementById("whatWantMainWrapper");
      let search = document.getElementById("search");
      whatWantMainWrapper.style.top = "-150%";
      search.blur();
    });

    let moreOptionsDropdown = document.getElementById('moreOptionsDropdown');

    
    let moreOption = document.getElementById('moreOption');
    moreOption.addEventListener('mouseenter', function () {
      let moreOptionsDropdown = document.getElementById('moreOptionsDropdown');
      moreOptionsDropdown.style.marginLeft='370px'
      moreOptionsDropdown.style.opacity='1'
      moreOption.style.color='#1c7ed6'
      moreOption.style.opacity='1'
      let moreOptionsDropdownMain = document.getElementById('moreOptionsDropdownMain');
      moreOptionsDropdownMain.style.visibility='visible'
    })

    moreOptionsDropdown.addEventListener('mouseenter', function (event) {
        let moreOptionsDropdown = document.getElementById('moreOptionsDropdown');
        moreOptionsDropdown.style.marginLeft='370px'
        moreOptionsDropdown.style.opacity='1'
        moreOption.style.color='#1c7ed6'
        moreOption.style.opacity='1'
        console.log(event);
        let moreOptionsDropdownMain = document.getElementById('moreOptionsDropdownMain');
        moreOptionsDropdownMain.style.visibility='visible'
      })

    moreOptionsDropdown.addEventListener('mouseleave', function () {
      let moreOptionsDropdown = document.getElementById('moreOptionsDropdown');
      moreOptionsDropdown.style.marginLeft='450px'
      moreOptionsDropdown.style.opacity='0'
      moreOption.style.color='black'
      moreOption.style.opacity='.7'
      let moreOptionsDropdownMain = document.getElementById('moreOptionsDropdownMain');
      moreOptionsDropdownMain.style.visibility='hidden'
    })
    moreOption.addEventListener('mouseleave', function () {
      let moreOptionsDropdown = document.getElementById('moreOptionsDropdown');
      moreOptionsDropdown.style.marginLeft='450px'
      moreOptionsDropdown.style.opacity='0'
      moreOption.style.color='black'
      moreOption.style.opacity='.7'
      let moreOptionsDropdownMain = document.getElementById('moreOptionsDropdownMain');
      moreOptionsDropdownMain.style.visibility='hidden'
    })

  }, []);

  

  return (
    <div>
      <div id="whatWantMainWrapper" className="what-want-search-main-wrapper">
        <div id="whatWantWrapper" className="what-want-search-wrapper ">
          <i class="fa-solid fa-magnifying-glass wharDoYouSearchIcon"></i>
          <i
            id="voiceIcon"
            class="fa-solid fa-microphone what-do-you-voice-icon"
          ></i>
          <input
          spellcheck="false"
            onChange={showSearchResults}
            type="search"
            placeholder="What do you want to read ?"
            id="whatWantSearchInput"
          />
          <div className="recents-wrapper">
            <span id="test">Abdulrahman Alsudeas</span>
            <span>Al-Baqarah</span>
            <span>Page-1</span>
            <span>Murattal</span>
          </div>
          <div id="searchResultsWrapper" className="search-results-wrapper">
            {WhatWantrecitersElement}
          </div>
        </div>
      </div>

      <header>
        <img
          className="logo"
          src="https://i.postimg.cc/BnZgsL3K/holy-Quran-Logo.webp"
          alt=""
        />
        <Link to="/" onClick={userCheckHandler}>
          <h3>HolyQuran.in</h3>
        </Link>
        <i
          onClick={handleSearchClick}
          class="fa-solid fa-magnifying-glass search-icon"
        ></i>
        <i
          onClick={handleSearchClose}
          class="fa-solid fa-xmark searchCloseIcon"
        ></i>
        <input
        spellcheck="false"
          onClick={handleWhatYouWant}
          autoComplete="off"
          id="search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="search"
          placeholder="Search"
        />
        <ul id="navItems">
          <h4>HolyQuran.in</h4>
          <div className="donate-wrapper">
            <h3>Become A Monthly Donor</h3>
            <p>Monthly donations help us improve HolyQuran.com and sustain operations so we focus less on fundraising and more on creating impact</p>
            <button>Donate</button>
          </div>
          <Link to="/reciters"><li className="li-align"><i class="fa-solid fa-microphone"></i>Reciters</li></Link>
          <Link to='/recitations' ><li className="li-align"><i class="fa-solid fa-compact-disc"></i>Recitations</li></Link>
          <Link to='/' ><li className="li-align contact-us-option"><i class="fa-solid fa-music"></i>Relaxing recitations</li></Link>
          <Link to='/' ><li className="li-align"><i class="fa-solid fa-globe"></i>Translations</li></Link>
          <Link to='/' ><li className="li-align"><i class="fa-solid fa-book"></i>Tafseers</li></Link>
          <Link to='/' ><li className="li-align"><i class="fa-solid fa-location-dot"></i>Quran Index</li></Link>
          <li id="moreOption" className="li-align more-options">More options</li>
          <Link to='/' ><li className="li-align daily-verses-option"><i class="fa-solid fa-calendar-days"></i>Daily verses</li></Link>
          <Link to='/' ><li className="li-align daily-verses-option"><i class="fa-solid fa-book-quran"></i>Enrich your recitation</li></Link>
          <Link to='/' ><li className="li-align option-favourites"><i class="fa-solid fa-heart"></i>Favourites</li></Link>
          <Link to='/' ><li className="li-align daily-verses-option"><i class="fa-solid fa-download"></i>Downloads</li></Link>
          <Link to='/' ><li className="li-align contact-us-option"><i class="fa-solid fa-message"></i>Contact us</li></Link>
          <Link to='/' ><li className="li-align about-us-option"><i class="fa-solid fa-user"></i>About us</li></Link>
          
          
          
          
          
          
          <i
            onClick={handleNavBarClose}
            class="fa-solid fa-xmark responsive-close-icon"
          ></i>
          <div id="moreOptionsDropdownMain" className="more-options-dropdown">
            <ul id="moreOptionsDropdown" >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 47.5 47.5"
                  viewBox="0 0 47.5 47.5"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M 0,38 38,38 38,0 0,0 0,38 Z" />
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path
                      fill="#269"
                      d="m 0,0 c 0,-2.209 -1.791,-4 -4,-4 l -26,0 c -2.209,0 -4,1.791 -4,4 l 0,19.687 c 0,2.209 5.791,6.313 8,6.313 l 20.625,0 C -2.281,26 0,23.687 0,20.625 L 0,0 Z"
                      transform="translate(36 11)"
                    />
                    <path
                      fill="#ccd6dd"
                      d="m 0,0 c 0,-2.209 -1.791,-4 -4,-4 l -22,0 c -2.209,0 -4,1.791 -4,4 l 0,24 c 0,4.119 -0.021,4 5,4 l 21,0 c 2.209,0 4,-1.791 4,-4 L 0,0 Z"
                      transform="translate(34 7)"
                    />
                    <path
                      fill="#e1e8ed"
                      d="m 0,0 c 0,-1.657 -1.343,-3 -3,-3 l -24,0 c -1.657,0 -3,1.343 -3,3 l 0,24 c 0,1.657 1.343,3 3,3 l 24,0 c 1.657,0 3,-1.343 3,-3 L 0,0 Z"
                      transform="translate(32 6)"
                    />
                    <path
                      fill="#3b88c3"
                      d="m 0,0 c 0,-2.209 -1.791,-4 -4,-4 l -21,0 c -2.209,0 -4,1.791 -4,4 l 0,22 c 0,2.209 1.791,4 4,4 l 21,0 c 2.209,0 4,-1.791 4,-4 L 0,0 Z"
                      transform="translate(32 5)"
                    />
                    <path
                      fill="#55acee"
                      d="m 0,0 c 0,-2.209 -1.791,-4 -4,-4 l -19,0 c -2.209,0 -4,1.791 -4,4 l 0,20 c 0,2.209 1.791,4 4,4 l 19.335,0 C -1.456,24 0,22.544 0,20.335 L 0,0 Z"
                      transform="translate(30 5)"
                    />
                    <path
                      fill="#269"
                      d="M 0,0 C -1.687,0 -1.731,1.922 -1,2.75 -0.168,3.691 1.125,4 3.438,4 L 5,4 5,6 2.281,6 C -1.687,6 -5,3.5 -5,0.625 L -5,-26 c 0,-2.209 1.791,-4 4,-4 l 2,0 0,30 -1,0 z"
                      transform="translate(7 31)"
                    />
                  </g>
                </svg>
                Enrich your recitation
              </li>

              <li> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" viewBox="0 0 47.5 47.5"><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M 0,38 38,38 38,0 0,0 0,38 Z"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#5dadec" d="m 0,0 -22.418,-2.587 c -0.985,-0.114 -1.791,-1.017 -1.791,-2.009 l 0,-0.197 0,-4.198 0,-14.387 c -0.91,0.371 -1.925,0.585 -3,0.585 -3.865,0 -7,-2.686 -7,-6 0,-3.315 3.135,-6 7,-6 3.865,0 7,2.685 7,6 l 0,18.461 18,2.077 0,-13.123 c -0.91,0.371 -1.925,0.585 -3,0.585 -3.865,0 -7,-2.686 -7,-6 0,-3.315 3.135,-6 7,-6 3.865,0 7,2.685 7,6 l 0,20.802 0,4.395 C 1.791,-0.604 0.985,0.114 0,0" transform="translate(35.209 36.794)"/></g></svg> Relaxing recitations</li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#b2b1ff"
                    d="M7,5.99976C6.44803,6.00007,6.00031,5.55287,6,5.0009c0-0.00038,0-0.00076,0-0.00114v-2
	c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v2c0.00031,0.55197-0.44689,0.99969-0.99886,1C7.00076,5.99976,7.00038,5.99976,7,5.99976z
	 M17,5.99976c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-2c0-0.55228,0.44772-1,1-1s1,0.44772,1,1
	v2c0.00031,0.55197-0.44689,0.99969-0.99886,1C17.00076,5.99976,17.00038,5.99976,17,5.99976z"
                  />
                  <path
                    fill="#6563ff"
                    d="M19,4.00024h-1v0.99952c0,0.55228-0.44772,1-1,1s-1-0.44772-1-1V4.00024H8v0.99952c0,0.55228-0.44772,1-1,1
	s-1-0.44772-1-1V4.00024H5c-1.65685,0-3,1.34315-3,3v2h20v-2C22,5.34339,20.65685,4.00024,19,4.00024L19,4.00024z"
                  />
                  <circle cx="7" cy="13" r="1" fill="#6563ff" />
                  <circle cx="7" cy="17" r="1" fill="#6563ff" />
                  <circle cx="12" cy="13" r="1" fill="#6563ff" />
                  <circle cx="12" cy="17" r="1" fill="#6563ff" />
                  <circle cx="17" cy="13" r="1" fill="#6563ff" />
                  <circle cx="17" cy="17" r="1" fill="#6563ff" />
                  <path
                    fill="#b2b1ff"
                    d="M2,9.00024v10c0,1.65685,1.34315,3,3,3h14c1.65685,0,3-1.34315,3-3v-10H2z M7,18.00024
	c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1S7.55228,18.00024,7,18.00024z M7,14.00024c-0.55228,0-1-0.44771-1-1
	s0.44772-1,1-1s1,0.44771,1,1S7.55228,14.00024,7,14.00024z M12,18.00024c-0.55229,0-1-0.44772-1-1s0.44771-1,1-1s1,0.44772,1,1
	S12.55229,18.00024,12,18.00024z M12,14.00024c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1s1,0.44771,1,1S12.55229,14.00024,12,14.00024
	z M17,18.00024c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1S17.55228,18.00024,17,18.00024z M17,14.00024
	c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1s1,0.44771,1,1S17.55228,14.00024,17,14.00024z"
                  />
                </svg>
                Daily verces
              </li>

              <li>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" viewBox="0 0 47.5 47.5"><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M 0,38 38,38 38,0 0,0 0,38 Z"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#dd2e44" d="M 0,0 C 0,8.799 12.184,12.06 15.933,1.874 19.682,12.06 31.866,8.799 31.866,0 31.866,-9.56 15.933,-21.681 15.933,-21.681 15.933,-21.681 0,-9.56 0,0" transform="translate(3.067 25.68)"/></g></svg>
                Favourites
              </li>

              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#6563ff"
                    d="M15.707,13.293a.99962.99962,0,0,0-1.41406,0L13,14.58594V3a1,1,0,0,0-2,0V14.58594L9.707,13.293A.99989.99989,0,0,0,8.293,14.707l3,3a.99963.99963,0,0,0,1.41406,0l3-3A.99962.99962,0,0,0,15.707,13.293Z"
                  />
                  <path
                    fill="#b2b1ff"
                    d="M18,9H13v5.58594l1.293-1.293A.99989.99989,0,0,1,15.707,14.707l-3,3a.99963.99963,0,0,1-1.41406,0l-3-3A.99989.99989,0,0,1,9.707,13.293L11,14.58594V9H6a3.00328,3.00328,0,0,0-3,3v7a3.00328,3.00328,0,0,0,3,3H18a3.00328,3.00328,0,0,0,3-3V12A3.00328,3.00328,0,0,0,18,9Z"
                  />
                </svg>
                Downloads
              </li>


              <li><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 32 32"><path fill="none" stroke="#0832ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.25 25a5 5 0 01-4.9-6 5.12 5.12 0 015.08-4H10V25zM23.75 25a5 5 0 004.9-6 5.12 5.12 0 00-5.08-4H22V25z"/><path fill="none" stroke="#0832ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 15V13.82a9.11 9.11 0 016.91-9A9 9 0 0125 13.61V15M10 25h0a3 3 0 003 3"/><circle cx="16" cy="28" r="1" fill="#0832ff"/><line x1="7.5" x2="7.5" y1="15.5" y2="24.5" fill="none" stroke="#0832ff" stroke-linecap="round" stroke-linejoin="round"/><rect width="2" height="10" x="22" y="15" fill="#0832ff"/></svg>Contact us</li>
              <li> <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
    <path fill="#2196F3" d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"/>
    <g fill="#fff">
        <rect x="22" y="20" width="4" height="11"/>
        <circle cx="24" cy="15" r="2"/>
    </g>
</svg>
About us</li>
            </ul>
          </div>
        </ul>

        <div className="settings-icon-wrapper">
          <i class="fa-solid fa-gear settings-icon"></i>
          <span>settings</span>
        </div>
        <div className="header-download-icon-wrapper">
        <svg className="header-download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/></svg>
        <span>install app</span>
        </div>
        <i
          id="responsiveBar"
          onClick={handleNavBarClick}
          class="fa-solid fa-bars responsive-bar"
        ></i>
      </header>
      <mainSearchValue.Provider value={searchValue}>
        {props.children}
      </mainSearchValue.Provider>
    </div>
  );
}
