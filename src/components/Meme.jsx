import React, { useState } from "react";
import memeData from "../../src/memeData";

const Meme = () => {
  const memeArray = memeData.data.memes;
  const randomNumber = Math.floor(Math.random() * memeArray.length);
  const [memeImage, setmemeImage] = useState("");

  const getMemeImage = () => {
    setmemeImage(memeArray[randomNumber].url);
    console.log(memeArray[randomNumber].url);
  };
  return (
    <section>
      <div className="input__section">
        <div className="form">
          <input type="text" placeholder="Top text" className="form__input" />
          <input
            type="text"
            placeholder="Bottom text"
            className="form__input"
          />
          <button className="form__button" onClick={getMemeImage}>
            Get a new meme image
          </button>
        </div>
        <div className="img__container">
          {memeImage === "" ? (
            <div className="silly__text">Click button to get an image</div>
          ) : (
            <img src={memeImage} alt="Meme" className="meme__img" />
          )}
        </div>
        {memeImage && <button className="download">Download</button>}
      </div>
    </section>
  );
};

export default Meme;
