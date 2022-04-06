import { useEffect, useState } from "react";
import style from "../CSS/EntitySelector.module.css";
import propTypes from "prop-types";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

function EntitySelector({ text, entity = "", color }) {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getInfo() {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&limit=10&${entity}`
        )
      ).json();
      setInfo(json.data.movies);
      setLoading(false);
    }
    getInfo();
  }, []);

  function next() {
    function nIndexSet(block) {
      if (index < info.length - block) {
        setIndex((current) => current + 1);
      }
    }

    if (window.innerWidth > 1700) {
      nIndexSet(4);
    } else if (1200 < window.innerWidth && window.innerWidth < 1700) {
      nIndexSet(3);
    } else {
      nIndexSet(2);
    }
  }
  function pre() {
    if (index > 0) {
      setIndex((current) => current - 1);
    }
  }

  console.log(info);
  return (
    <div className={style.listBox}>
      <h1 className={style.genreTitle}>
        <center>{text}</center>
      </h1>
      <button onClick={pre} className={style.pre}>
        <div></div>
      </button>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.border}>
          <div
            className={style.slideBox}
            style={{
              width: `${info.length}00vw`,
            }}
          >
            {
              info.map((item) => {
                return (
                  <div
                    className={style.slideItem}
                    style={{
                      transform: `translatex(-${index * 5}00px)`,
                      backgroundColor: color,
                    }}
                  >
                    <img
                      className={style.cover}
                      src={item.medium_cover_image}
                    ></img>
                    <h1 className={style.title}>
                      {item.title.length > 40
                        ? `${item.title.slice(0, 37)}...`
                        : item.title}
                    </h1>
                    <p>{item.year}</p>
                    <p>Rating | {item.rating}</p>
                    <p>
                      Genres |
                      {item.genres.map((genre) => (
                        <span> {genre}</span>
                      ))}
                    </p>
                  </div>
                );
              }) //map end
            }
          </div>
        </div>
      )}
      <button onClick={next} className={style.next}></button>
    </div>
  );
}

EntitySelector.propTypes = {
  text: propTypes.string.isRequired,
  entity: propTypes.string.isRequired,
  color: propTypes.string,
};

export default EntitySelector;
