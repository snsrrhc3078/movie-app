import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "../CSS/GenreMovie.module.css";

/* css list
renderIndex
indexItem
link
*/

function GenreMovies() {
  const [loading, setLoading] = useState(1);
  const [info, setInfo] = useState([]);
  const { entity, page } = useParams();
  useEffect(() => {
    setLoading(1);
    async function getInfo() {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?sort_by=rating&${entity}&page=${page}`
        )
      ).json();
      setInfo(json.data.movies);
      setLoading(false);
    }
    getInfo();
  }, [page, entity]);

  function RenderIndex() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <Link
          to={`/${entity}/${i + 1}`}
          className={
            parseInt(page) === i + 1
              ? `${style.indexItem} ${style.link} ${style.selectedItem}`
              : `${style.indexItem} ${style.link}`
          }
        >
          {i + 1}
        </Link>
      );
    }
    return <div className={style.renderIndex}>{arr}</div>;
  }
  return (
    <div>
      {loading ? (
        <h1>
          <center>Loading...</center>
        </h1>
      ) : (
        <center>
          <RenderIndex />

          {info.map((item) => {
            return (
              <article>
                <img src={item.medium_cover_image}></img>
                <h3>
                  <Link className={style.link} to={`/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <p>{item.year}</p>
                <p>Rating| {item.rating}</p>
                <p>
                  Genres |
                  {item.genres.map((genre, i) => (
                    <span> {genre}</span>
                  ))}
                </p>
                <summary>{item.description_full}</summary>
              </article>
            );
          })}
          {/* map end */}
          <RenderIndex />
        </center>
      )}
    </div>
  );
}

export default GenreMovies;
