import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../CSS/MovieDetail.module.css";
/*
css list
main
gridBox
articleText
trailerBox
summary
*/
function MovieDetail() {
  const [loading, setLoading] = useState(1);
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getInfo() {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setInfo(json.data.movie);
    }
    getInfo();
    setLoading(false);
  }, []);
  console.log(info);
  return (
    <div className={style.wrap}>
      <center>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <main className={style.main}>
            <div className={style.gridBox}>
              <img src={info.medium_cover_image}></img>
              <div className={style.articleText}>
                <h3>{info.title}</h3>
                <p>{info.year}</p>
                <p>Rating| {info.rating}</p>
                {info.hasOwnProperty("genres") ? (
                  <p>
                    Genres |
                    {info.genres.map((genre) => (
                      <span> {genre}</span>
                    ))}
                  </p>
                ) : null}
                <p>
                  More Details| <a href={info.url}>Click here</a>
                </p>
              </div>
              <summary className={style.summary}>
                <h2>Synopsis:</h2>
                <br></br>
                {info.description_full}
              </summary>
              <div className={style.trailerBox}>
                <iframe
                  src={`https://www.youtube.com/embed/${info.yt_trailer_code}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={style.trailer}
                ></iframe>
              </div>
            </div>
          </main>
        )}
      </center>
    </div>
  );
}

export default MovieDetail;
