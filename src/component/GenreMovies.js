import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "../CSS/GenreMovie.module.css";
import PageIndex from "../component/PageIndex";

/* css list
renderIndex
indexItem
link
article
articleBox
articleText
selectedItem
showMore
*/

function GenreMovies() {
  const [loading, setLoading] = useState(1);
  const [info, setInfo] = useState([]);
  const { entity, page } = useParams();
  const [showMore, setShowMore] = useState(140);
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

  function ShowMore({ text }) {
    function handleClickShow(event) {
      event.target.innerText = text;
    } // closure

    return (
      <span className={style.showMore} onClick={handleClickShow}>
        {" "}
        ...Show more
      </span>
    );
  }
  return (
    <div>
      {loading ? (
        <h1>
          <center>Loading...</center>
        </h1>
      ) : (
        <center>
          <PageIndex />
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
                    <summary>
                      {item.description_full.length > showMore ? (
                        <div>
                          {`${item.description_full.slice(0, showMore)}`}
                          <ShowMore
                            text={item.description_full.slice(showMore)}
                          />
                        </div>
                      ) : (
                        item.description_full
                      )}
                    </summary>
                  </div>
                </article>
              );
            })}
          </div>
          <PageIndex />
        </center>
      )}
    </div>
  );
}

export default GenreMovies;
