import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MediaContainer from "./MediaContainer";

function App() {
  const [mediaURL, setMediaURL] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [mediaType, setMediaType] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=fAMua8JCgSmrRJO7mL9UOuJ3xH7fNdQUF4X8evVV&date=${date}`
      )
      .then(res => {
        setMediaURL(res.data.url);
        setTitle(res.data.title);
        setDate(res.data.date);
        setDescription(res.data.explanation);
        setMediaType(res.data.media_type);
      })
      .catch(error => {
        console.log(error);
      });
  }, [mediaURL, date]);

  return (
    <>
      <div className="App container">
        <div className="heading">
          <h2>NASA Photo of the Day</h2>
        </div>

        <MediaContainer
          date={date}
          mediaType={mediaType}
          title={title}
          description={description}
          setDate={setDate}
          mediaURL={mediaURL}
        />
      </div>
    </>
  );
}

export default App;
