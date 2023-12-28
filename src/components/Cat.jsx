import { useParams } from "react-router-dom";
import comments from "../api/comments";
import Cat404 from "../assets/not-found.png";
import { useState } from "react";

const Cat = () => {
  const { id } = useParams();
  const [comment, idCat] = id.split("-");
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <h2>I&apos;ve got this cat!</h2>
      <div>
        <img
          src={
            imageError
              ? Cat404
              : `https://cdn2.thecatapi.com/images/${idCat}.jpg`
          }
          alt="Random Cat"
          className="picture"
          onError={handleImageError}
        />
        <p>{comments?.comments[comment]}</p>
      </div>
      <a href="/">
        <button>Get your own cat here!</button>
      </a>
    </>
  );
};

export default Cat;
