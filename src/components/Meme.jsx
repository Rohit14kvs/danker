import React, { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeImage: url,
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  console.log(allMeme);

  return (
    <section>
      <div className="input__section">
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form__input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form__input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form__button" onClick={getMemeImage}>
            Get a new meme image
          </button>
        </div>
        <div className="img__container">
          {meme.memeImage === "" ? (
            <div className="silly__text">Click button to get an image</div>
          ) : (
            <div className="inside__img">
              <img src={meme.memeImage} alt="Meme" className="meme__img" />
              <div className="meme">
                <h2 className="meme__text top">{meme.topText}</h2>
                <h2 className="meme__text bottom">{meme.bottomText}</h2>
              </div>
            </div>
          )}
        </div>

        {meme.memeImage && <button className="download">Download</button>}
      </div>
    </section>
  );
};

export default Meme;
