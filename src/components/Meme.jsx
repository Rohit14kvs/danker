import React, { useState } from "react";
import memeData from "../../src/memeData";

const Meme = () => {
  //   const [memeImage, setmemeImage] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "",
  });
  const [allMemeImages, setAllMemeImages] = useState(memeData);

  const getMemeImage = () => {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...meme,
        memeImage: url,
      };
    });
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
          {meme.memeImage === "" ? (
            <div className="silly__text">Click button to get an image</div>
          ) : (
            <img src={meme.memeImage} alt="Meme" className="meme__img" />
          )}
        </div>
        {meme.memeImage && <button className="download">Download</button>}
      </div>
    </section>
  );
};

export default Meme;
