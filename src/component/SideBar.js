import { Link } from "react-router-dom";
import style from "../CSS/SideBar.module.css";
function Genres({ text, entity }) {
  return (
    <b>
      <Link className={style.link} to={`/${entity}/1`}>
        {text}
      </Link>
    </b>
  );
}

function SideBar() {
  return (
    <div className={style.wrap}>
      <header className={style.grid}>
        <h2 className={style.h2}>
          <Link className={style.link} to="/movie-app">
            Home
          </Link>
        </h2>
        <div className={style.flexMenu}>
          <Genres text="Sci-Fi" entity="genre=Sci-fi" />
          <Genres text="Romance" entity="genre=Romance" />
          <Genres text="Thriller" entity="genre=Thriller" />
          <Genres text="Animation" entity="genre=Animation" />
        </div>
      </header>
    </div>
  );
}

export default SideBar;
