import React, { useEffect, useContext, useState } from "react";
import { AllChapters } from "./Context";
import gsap from "gsap";
import { ReciterContext } from "../context/AppProvider";
import { Link } from "react-router-dom";
import { RecitersExtraDetails } from "../context/ReciterExtraDetailsContext";
import $ from 'jquery'

function Recitations() {
  const fullChapters = useContext(AllChapters);
  const [chapters, setChapters] = useState([]);
  const [reciterAllDetails, setReciterAllDetails] = useState([]);
  const [reciterAllExtraDetails, setReciterAllExtraDetails] = useState([]);
  const [chapterName, setChapterName] = useState("");
  const [chapterId, setChapterId] = useState();
  const [recitationUrl, setRecitationUrl] = useState("");
  const [chapterTranslatedName, setChapterTranslatedName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const reciterDetails = useContext(ReciterContext);
  const reciterExtraDetails = useContext(RecitersExtraDetails);

  useEffect(() => {
    setChapters(fullChapters.chapters);
    setReciterAllDetails(reciterDetails[0]);
    setReciterAllExtraDetails(reciterExtraDetails);
  }, []);

  useEffect(() => {
    let search = document.getElementById("search");
    search.value = "";
  }, []);

  const reciterDetailsElement = reciterAllExtraDetails
    .filter((item) => {
      return localStorage.getItem("reciterId") == item.id;
    })
    .map((item) => {
      return (
        <div>
          <img src={item.img} />
          <h2>
            {reciterAllDetails.reciterName
              ? reciterAllDetails.reciterName
              : localStorage.getItem("reciterName")}
          </h2>
          <h3>{item.arabicName}</h3>
        </div>
      );
    });
  const playerReciterImgElement = reciterAllExtraDetails
    .filter((item) => {
      return localStorage.getItem("reciterId") == item.id;
    })
    .map((item) => {
      return (
        <div>
          <img className="playerimg" src={item.img} />
        </div>
      );
    });

  const chaptersElement = chapters
    .filter((item) => {
      if (searchValue == "") {
        return item;
      } else if (
        item.name_simple.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return item;
      }
    })
    .map((chapter) => {
      return (
        <div
          id="recitationCard"
          className={
            chapter.id == chapterId
              ? `recitation recitation-active ${chapter.id}`
              : `recitation ${chapter.id}`
          }
          onClick={() => {
            recitationClickHandler(
              chapter.id,
              chapter.name_simple,
              chapter.translated_name.name
            );
          }}
        >
          <div className="reciation-index-wrapper">
            <h3>{chapter.id}</h3>
          </div>
          <h4 className="surah-name">{chapter.name_simple}</h4>
          <h5 className="surah-translation-name">
            {chapter.translated_name.name}
          </h5>
          <h6 className="recitation-duration">{chapter.name_arabic}</h6>
        </div>
      );
    });

  // Recitation Click Handler
  function recitationClickHandler(
    chapterId,
    chapterName,
    chapterTranslatedName
  ) {
    let shufflePlayMainIcon = document.getElementById("shufflePlayMainIcon");
    let playerShuffleIcon = document.getElementById("playerShuffleIcon");
    shufflePlayMainIcon.classList.replace("fa-pause", "fa-play");
    playerShuffleIcon.style.color = "#666";
    let playerRepeatIcon = document.getElementById("playerRepeatIcon");
    playerRepeatIcon.style.color = "#666";
    const loadingBarSpinner = document.getElementById("loading-bar-spinner");
    const audio = document.getElementById("audio");

    const playPauseButton = document.getElementById("playPauseButton");
    const recitationCard = document.getElementById("recitationCard");
    playPauseButton.classList.replace("fa-circle-play", "fa-circle-pause");
    audio.play();
    recitationCard.classList.replace(
      "playing-animation-activ",
      "playing-animation-active"
    );
    loadingBarSpinner.style.visibility = "visible";
    setChapterTranslatedName(chapterTranslatedName);
    setChapterId(chapterId);
    let playerWrapper = document.getElementById("playerWrapper");
    playerWrapper.classList.add("player-wrapper-active");
    setChapterName(chapterName);
    setRecitationUrl(() => {
      if (chapterId >= 100) {
        return (
          (reciterAllDetails.reciterServer
            ? reciterAllDetails.reciterServer
            : localStorage.getItem("reciterServer")) +
          "/" +
          chapterId +
          ".mp3"
        );
      } else if (chapterId >= 10) {
        return (
          (reciterAllDetails.reciterServer
            ? reciterAllDetails.reciterServer
            : localStorage.getItem("reciterServer")) +
          "/" +
          "0" +
          chapterId +
          ".mp3"
        );
      } else {
        return (
          (reciterAllDetails.reciterServer
            ? reciterAllDetails.reciterServer
            : localStorage.getItem("reciterServer")) +
          "/" +
          "00" +
          chapterId +
          ".mp3"
        );
      }
    });
    playPauseButton.style.visibility = "hidden";
    setTimeout(function () {
      playPauseButton.style.visibility = "visible";
      loadingBarSpinner.style.visibility = "hidden";
    }, 900);

    audio.addEventListener("timeupdate", function (event) {
      let audioCurrentTime = event.target.currentTime;
      let audioDuration = event.target.duration;
      let liveTime = (audioCurrentTime / audioDuration) * 100;
      let playerSeekBar = document.getElementById("playerSeekBar");
      playerSeekBar.style.width = `${liveTime}%`;

      let audio = document.getElementById("audio");
      var curmins = Math.floor(audio.currentTime / 60);
      var cursecs = Math.floor(audio.currentTime - curmins * 60);
      var durmins = Math.floor(audio.duration / 60);
      var dursecs = Math.floor(audio.duration - durmins * 60);
      if (cursecs < 10) {
        cursecs = "0" + cursecs;
      }
      if (dursecs < 10) {
        dursecs = "0" + dursecs;
      }
      if (curmins < 10) {
        curmins = "0" + curmins;
      }
      if (durmins < 10) {
        durmins = "0" + durmins;
      }

      let audioDurationElement = document.getElementById(
        "audioDurationElement"
      );

      if (durmins) {
        audioDurationElement.innerText = `${curmins}:${cursecs}/${durmins}:${dursecs}`;
      }
    });

    audio.onended = function () {
      setTimeout(function () {
        playPauseButton.style.visibility = "visible";
        loadingBarSpinner.style.visibility = "hidden";
      }, 400);
      loadingBarSpinner.style.visibility = "visible";
      playPauseButton.style.visibility = "hidden";
      chapters
        .filter((item) => {
          return chapterId + 1 == item.id;
        })
        .map((item) => {
          setChapterName(item.name_simple);
          setChapterTranslatedName(item.translated_name.name);
        });

      setChapterId(chapterId + 1);
      setRecitationUrl(() => {
        if (chapterId + 1 >= 100) {
          return (
            (reciterAllDetails.reciterServer
              ? reciterAllDetails.reciterServer
              : localStorage.getItem("reciterServer")) +
            "/" +
            (chapterId + 1) +
            ".mp3"
          );
        } else if (chapterId + 1 >= 10) {
          return (
            (reciterAllDetails.reciterServer
              ? reciterAllDetails.reciterServer
              : localStorage.getItem("reciterServer")) +
            "/" +
            "0" +
            (chapterId + 1) +
            ".mp3"
          );
        } else {
          return (
            (reciterAllDetails.reciterServer
              ? reciterAllDetails.reciterServer
              : localStorage.getItem("reciterServer")) +
            "/" +
            "00" +
            (chapterId + 1) +
            ".mp3"
          );
        }
      });

      audio.onended = function () {
        const playPauseButton = document.getElementById("playPauseButton");
        playPauseButton.classList.replace("fa-circle-pause", "fa-circle-play");
      };
    };
  }
  // Recitation Click Handler

  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.play();
  });

  // Play Pause Click Handler
  function handlePlayPause() {
    const playPauseButton = document.getElementById("playPauseButton");
    if (playPauseButton.classList[1] == "fa-circle-pause") {
      const audio = document.getElementById("audio");
      const playPauseButton = document.getElementById("playPauseButton");
      playPauseButton.classList.replace("fa-circle-pause", "fa-circle-play");
      audio.pause();
    } else if (playPauseButton.classList[1] == "fa-circle-play") {
      const playPauseButton = document.getElementById("playPauseButton");
      playPauseButton.classList.replace("fa-circle-play", "fa-circle-pause");
      const audio = document.getElementById("audio");
      audio.play();
    }
  }
  // Play Pause Click Handler

  useEffect(() => {
    let seekBarBase = document.getElementById("seekBarBase");
    seekBarBase.addEventListener("click", seekBarHandler);
  }, []);

  // Player Seek Bar Click Handler
  function seekBarHandler(event) {
    let audio = document.getElementById("audio");
    let totalWidth = this.clientWidth;
    let targetWidth = event.clientX;
    let clickWidth = (targetWidth / totalWidth) * audio.duration;
    audio.currentTime = clickWidth;
  }
  // Player Seek Bar Click Handler

  // Repeat Icon Click
  useEffect(() => {
    let audio = document.getElementById("audio");
    let playerRepeatIcon = document.getElementById("playerRepeatIcon");
    playerRepeatIcon.addEventListener("click", function () {
      if (this.style.color == "black") {
        this.style.color = "#666";
      } else {
        this.style.color = "black";
        audio.onended = function () {
          audio.play();
        };
      }
    });
  }, []);
  // Repeat Icon Click

  // Shuffle Icon Click
  useEffect(() => {
    let audio = document.getElementById("audio");
    let playerShuffleIcon = document.getElementById("playerShuffleIcon");
    playerShuffleIcon.addEventListener("click", function () {
      if (this.style.color == "black") {
        let shufflePlayMainIcon = document.getElementById(
          "shufflePlayMainIcon"
        );
        shufflePlayMainIcon.classList.replace("fa-pause", "fa-play");
        this.style.color = "#666";
      } else {
        let shufflePlayMainIcon = document.getElementById(
          "shufflePlayMainIcon"
        );
        shufflePlayMainIcon.classList.replace("fa-play", "fa-pause");
        this.style.color = "black";
        audio.onended = function () {
          const rndChapterId = Math.floor(Math.random() * 114) + 1;

          const playPauseButton = document.getElementById("playPauseButton");
          const loadingBarSpinner = document.getElementById(
            "loading-bar-spinner"
          );

          setTimeout(function () {
            playPauseButton.style.visibility = "visible";
            loadingBarSpinner.style.visibility = "hidden";
          }, 400);
          loadingBarSpinner.style.visibility = "visible";
          playPauseButton.style.visibility = "hidden";

          fullChapters.chapters
            .filter((item) => {
              return rndChapterId == item.id;
            })
            .map((item) => {
              setChapterName(item.name_simple);
              setChapterTranslatedName(item.translated_name.name);
            });

          setChapterId(rndChapterId);
          setRecitationUrl(() => {
            if (rndChapterId >= 100) {
              return (
                (reciterAllDetails.reciterServer
                  ? reciterAllDetails.reciterServer
                  : localStorage.getItem("reciterServer")) +
                "/" +
                rndChapterId +
                ".mp3"
              );
            } else if (rndChapterId >= 10) {
              return (
                (reciterAllDetails.reciterServer
                  ? reciterAllDetails.reciterServer
                  : localStorage.getItem("reciterServer")) +
                "/" +
                "0" +
                rndChapterId +
                ".mp3"
              );
            } else {
              return (
                (reciterAllDetails.reciterServer
                  ? reciterAllDetails.reciterServer
                  : localStorage.getItem("reciterServer")) +
                "/" +
                "00" +
                rndChapterId +
                ".mp3"
              );
            }
          });
        };
      }
    });
  }, []);
  // Shuffle Icon Click

  // Shuffle Button Click
  useEffect(() => {
    let shufflePlayButton = document.getElementById("shufflePlayButton");

    shufflePlayButton.addEventListener("click", function () {
      let playerWrapper = document.getElementById("playerWrapper");
      playerWrapper.classList.add("player-wrapper-active");

      let audio = document.getElementById("audio");

      audio.addEventListener("timeupdate", function (event) {
        let audioCurrentTime = event.target.currentTime;
        let audioDuration = event.target.duration;
        let liveTime = (audioCurrentTime / audioDuration) * 100;
        let playerSeekBar = document.getElementById("playerSeekBar");
        playerSeekBar.style.width = `${liveTime}%`;
        let audio = document.getElementById("audio");
        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);
        if (cursecs < 10) {
          cursecs = "0" + cursecs;
        }
        if (dursecs < 10) {
          dursecs = "0" + dursecs;
        }
        if (curmins < 10) {
          curmins = "0" + curmins;
        }
        if (durmins < 10) {
          durmins = "0" + durmins;
        }

        let audioDurationElement = document.getElementById(
          "audioDurationElement"
        );

        if (durmins) {
          audioDurationElement.innerText = `${curmins}:${cursecs}/${durmins}:${dursecs}`;
        }
      });

      const rndChapterId = Math.floor(Math.random() * 114) + 1;

      const playPauseButton = document.getElementById("playPauseButton");
      const loadingBarSpinner = document.getElementById("loading-bar-spinner");

      setTimeout(function () {
        playPauseButton.style.visibility = "visible";
        loadingBarSpinner.style.visibility = "hidden";
      }, 400);
      loadingBarSpinner.style.visibility = "visible";
      playPauseButton.style.visibility = "hidden";

      fullChapters.chapters
        .filter((item) => {
          return rndChapterId == item.id;
        })
        .map((item) => {
          setChapterName(item.name_simple);
          setChapterTranslatedName(item.translated_name.name);
        });

      setChapterId(rndChapterId);
      setRecitationUrl(() => {
        if (rndChapterId >= 100) {
          return (
            (reciterAllDetails.reciterServer
              ? reciterAllDetails.reciterServer
              : localStorage.getItem("reciterServer")) +
            "/" +
            rndChapterId +
            ".mp3"
          );
        } else if (rndChapterId >= 10) {
          return (
            (reciterAllDetails.reciterServer
              ? reciterAllDetails.reciterServer
              : localStorage.getItem("reciterServer")) +
            "/" +
            "0" +
            rndChapterId +
            ".mp3"
          );
        } else {
          return (
            (reciterAllDetails.reciterServer
              ? reciterAllDetails.reciterServer
              : localStorage.getItem("reciterServer")) +
            "/" +
            "00" +
            rndChapterId +
            ".mp3"
          );
        }
      });

      let shufflePlayMainIcon = document.getElementById("shufflePlayMainIcon");
      let playerShuffleIcon = document.getElementById("playerShuffleIcon");
      if (shufflePlayMainIcon.classList[1] == "fa-play") {
        shufflePlayMainIcon.classList.replace("fa-play", "fa-pause");
        playerShuffleIcon.style.color = "black";
        let audio = document.getElementById("audio");
        this.style.color = "black";
        audio.onended = function () {
          const rndChapterId = Math.floor(Math.random() * 114) + 1;

          const playPauseButton = document.getElementById("playPauseButton");
          const loadingBarSpinner = document.getElementById(
            "loading-bar-spinner"
          );

          setTimeout(function () {
            playPauseButton.style.visibility = "visible";
            loadingBarSpinner.style.visibility = "hidden";
          }, 400);
          loadingBarSpinner.style.visibility = "visible";
          playPauseButton.style.visibility = "hidden";

          fullChapters.chapters
            .filter((item) => {
              return rndChapterId == item.id;
            })
            .map((item) => {
              setChapterName(item.name_simple);
              setChapterTranslatedName(item.translated_name.name);
            });

          setChapterId(rndChapterId);
          setRecitationUrl(() => {
            if (rndChapterId >= 100) {
              return (
                (reciterAllDetails.reciterServer
                  ? reciterAllDetails.reciterServer
                  : localStorage.getItem("reciterServer")) +
                "/" +
                rndChapterId +
                ".mp3"
              );
            } else if (rndChapterId >= 10) {
              return (
                (reciterAllDetails.reciterServer
                  ? reciterAllDetails.reciterServer
                  : localStorage.getItem("reciterServer")) +
                "/" +
                "0" +
                rndChapterId +
                ".mp3"
              );
            } else {
              return (
                (reciterAllDetails.reciterServer
                  ? reciterAllDetails.reciterServer
                  : localStorage.getItem("reciterServer")) +
                "/" +
                "00" +
                rndChapterId +
                ".mp3"
              );
            }
          });
        };
      } else {
        shufflePlayMainIcon.classList.replace("fa-pause", "fa-play");
        playerShuffleIcon.style.color = "#666";
      }
    });
  }, []);
  // Shuffle Button Click

  // Player Arrow Animation
  useEffect(() => {
    let playerWrapperCloseIcon = document.querySelector(
      ".playerWrapperCloseIcon"
    );
    playerWrapperCloseIcon.addEventListener("click", function () {
      if (playerWrapperCloseIcon.style.transform == "rotate(-180deg)") {
        playerWrapperCloseIcon.style.transform = "rotate(0deg)";
        let playerWrapper = document.getElementById("playerWrapper");
        playerWrapper.classList.remove("playerWrapperResponsiveActive");
      } else {
        playerWrapperCloseIcon.style.transform = "rotate(-180deg)";
        let playerWrapper = document.getElementById("playerWrapper");
        playerWrapper.classList.add("playerWrapperResponsiveActive");
      }
    });
  }, []);
  // Player Arrow Animation

  // forward Icon Handler
  function forwardIconClicked () {
      chapters
      .filter((item) => {
        return chapterId + 1 == item.id;
      })
      .map((item) => {
        setChapterName(item.name_simple);
        setChapterTranslatedName(item.translated_name.name);
      });

      setChapterId(chapterId + 1)
      
      setRecitationUrl(() => {
        if (chapterId + 1 >= 100) {
          return (
          (reciterAllDetails.reciterServer
            ? reciterAllDetails.reciterServer
            : localStorage.getItem("reciterServer")) +
            "/" +
            (chapterId + 1) +
            ".mp3"
            );
          } else if (chapterId + 1 >= 10) {
        return (
          (reciterAllDetails.reciterServer
            ? reciterAllDetails.reciterServer
            : localStorage.getItem("reciterServer")) +
          "/" +
          "0" +
          (chapterId + 1) +
          ".mp3"
        );
      } else {
        return (
          (reciterAllDetails.reciterServer
            ? reciterAllDetails.reciterServer
            : localStorage.getItem("reciterServer")) +
            "/" +
            "00" +
            (chapterId + 1) +
            ".mp3"
            );
          }
        });
        
  }
  // forward Icon Handler

  // backward Icon Handler
  function backwardIconClicked () {
    chapters
    .filter((item) => {
      return chapterId - 1 == item.id;
    })
    .map((item) => {
      setChapterName(item.name_simple);
      setChapterTranslatedName(item.translated_name.name);
    });

    setChapterId(chapterId - 1)
    
    setRecitationUrl(() => {
      if (chapterId - 1 >= 100) {
        return (
        (reciterAllDetails.reciterServer
          ? reciterAllDetails.reciterServer
          : localStorage.getItem("reciterServer")) +
          "/" +
          (chapterId - 1) +
          ".mp3"
          );
        } else if (chapterId - 1 >= 10) {
      return (
        (reciterAllDetails.reciterServer
          ? reciterAllDetails.reciterServer
          : localStorage.getItem("reciterServer")) +
        "/" +
        "0" +
        (chapterId - 1) +
        ".mp3"
      );
    } else {
      return (
        (reciterAllDetails.reciterServer
          ? reciterAllDetails.reciterServer
          : localStorage.getItem("reciterServer")) +
          "/" +
          "00" +
          (chapterId - 1) +
          ".mp3"
          );
        }
      });
      
}
// backward Icon Handler
    
    return (
      <div className="recitations">
      <div className="reciter-details-section">
        <div className="reciter-details">
          {reciterDetailsElement}
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            id='recitationSearchInput'
            spellCheck="false"
            className="recitation-search-input"
            type="search"
            placeholder="Search surah"
          />
          <div className="recitation-search-input-icon-wrapper">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div
            id="shufflePlayButton"
            className="reciter-button reciter-button-2"
            >
            <h5>
              <i id="shufflePlayMainIcon" class="fa-solid fa-play"></i>Shuffle
              play
            </h5>
          </div>
          <div id="changeReciterButoon" className="reciter-button">
            <Link to="/reciters">
              <h5>Change reciter</h5>
            </Link>
          </div>
        </div>
      </div>
      <div id="Recitations" className="recitations-details-section">
        <div className="recitations-details">
          {chaptersElement}
          <div id="playerWrapper" className="player-wrapper">
            <i class="fa-solid fa-caret-down playerWrapperCloseIcon"></i>
            {playerReciterImgElement}
            <audio id="audio" src={recitationUrl}></audio>
            <i onClick={backwardIconClicked} class="fa-solid fa-backward backward-icon"></i>
            <i
              id="playPauseButton"
              onClick={handlePlayPause}
              class="fa-solid fa-circle-pause play-pause-button"
            ></i>
            <div id="loading-bar-spinner" class="spinner">
              <div class="spinner-icon"></div>
            </div>
            <i onClick={forwardIconClicked} class="fa-solid fa-backward frontward-icon"></i>
            <h2>
              {reciterAllDetails.reciterName
                ? reciterAllDetails.reciterName
                : localStorage.getItem("reciterName")}
            </h2>
            <p>{`${chapterName} (${chapterTranslatedName})`}</p>
            <h6
              id="audioDurationElement"
              className="player-recitation-duration"
            >
              0:00/0:00
            </h6>
            <div className="repeat-icon-wrapper tooltip-main-content-1">
              <i
                id="playerShuffleIcon"
                class="fa-solid fa-shuffle player-shuffle-icon tooltip-content-1"
              ></i>
              <span className="tooltip-1">Shuffle play</span>
            </div>
            <div className="tooltip-main-content-2">
              <i
                id="playerRepeatIcon"
                class="fa-solid fa-arrow-rotate-right player-repeat-icon tooltip-content-2"
              ></i>
              <span className="tooltip-2">Repeat</span>
            </div>
            <div id="seekBarBase" className="player-seek-bar-base">
              <div id="playerSeekBar" className="player-seek-bar"></div>
            </div>

            <div className="container">
              <a
                onClick={() => {
                  window.open(recitationUrl);
                }}
                class="button white-single"
              >
                <div>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recitations;
