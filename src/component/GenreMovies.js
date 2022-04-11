import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "../CSS/GenreMovie.module.css";

/* css list
renderIndex
indexItem
link
article
articleBox
articleText
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
          <div className={style.articleBox}>
            {info.map((item) => {
              return (
                <article className={style.article}>
                  <img src={item.medium_cover_image}></img>
                  <div className={style.articleText}>
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
                  </div>
                </article>
              );
            })}
          </div>
          <RenderIndex />
        </center>
      )}
    </div>
  );
}

export default GenreMovies;
