import { useState } from "react";
import Copy from "../assets/copy.svg";
import comments from "../api/comments";
import { fetchRandomCat } from "../api";

const Home = () => {
  const [text, setText] = useState();
  const [idCat, setIdCat] = useState();
  const [catImage, setCatImage] = useState([]);
  const [isLoadig, setIsLoading] = useState();
  const [randomIndex, setRandomIndex] = useState();
  const shareUrl = `${import.meta.env.VITE_APP_BASE_URL}/cat/${randomIndex}-${idCat}`;

  const getRandomComment = (comments) => {
    const randomIndex = Math.floor(Math.random() * comments.length);
    setRandomIndex(randomIndex);
    return comments[randomIndex];
  };

  const handleGenerator = async () => {
    setIsLoading(true);
    const response = await fetchRandomCat();
    if (response.status === "success") {
      setCatImage(response.data?.[0]);
      setIdCat(response.data?.[0].id);
      setText(getRandomComment(comments?.comments));
    } else if (response.status === "failed") {
      console.log(response.message);
    }
    setIsLoading(false);
  };
  const handleCopyCat = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <>
      <h2>Random Cat Image Generator</h2>
      <p>Find your cute cat!</p>
      <button onClick={handleGenerator}>Generate Cat</button>
      {isLoadig === true && (
        <div className="container">
          <div className="spinner"></div>
        </div>
      )}
      {catImage?.url && isLoadig === false && (
        <>
          <img src={catImage?.url} alt="Random Cat" className="picture" />
          <p>{text}</p>
          <button onClick={handleCopyCat}>
            <img src={Copy} alt="Copy" />
          </button>
        </>
      )}
    </>
  );
};

export default Home;
