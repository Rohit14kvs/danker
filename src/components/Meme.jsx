import React from "react";

const Meme = () => {
  return (
    <section>
      <div className="input__section">
        <form className="form">
          <input type="text" className="form__input" />
          <input type="text" className="form__input" />
          <button className="form__button">Get a new meme</button>
        </form>
      </div>
    </section>
  );
};

export default Meme;
