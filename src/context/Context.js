import React, { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading";

export const AllReciters = React.createContext();
export const AllChapters = React.createContext();

export function Context(props) {
  const [reciters, setReciters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  async function getReciters() {
    let url = "https://mp3quran.net/api/_english.php";
    let API_URL = url;
    let response = await fetch(API_URL);
    let data = await response.json();
    setReciters(data.reciters)
    setLoading(false);
  }
  async function getChapters() {
    let url = "https://api.quran.com/api/v4/chapters?language=en";
    let API_URL = url;
    let response = await fetch(API_URL);
    let data = await response.json();
    setChapters(data);
  }

  useEffect(() => {
    getReciters();
    getChapters();
  }, []);

  return (
    <AllReciters.Provider value={reciters}>
      <AllChapters.Provider value={chapters}>
        {loading != false ? <Loading /> : props.children}
      </AllChapters.Provider>
    </AllReciters.Provider>
  );
}

export default Context;
