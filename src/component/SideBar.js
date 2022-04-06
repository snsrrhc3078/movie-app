import { Link } from "react-router-dom";
import style from "../CSS/SideBar.module.css";
function Genres({ text, entity }) {
  return (
    <b>
      <Link className={style.text} to={`/${entity}`}>
        {text}
      </Link>
    </b>
  );
}

function SideBar() {
  return (
    <div className={style.wrap}>
      <div className={style.grid}>
        <h2>
          <Link className={style.text} to="/">
            Home
          </Link>
        </h2>
        <div className={style.flexMenu}>
          <Genres text="Sci-Fi" entity="Sci-fi" />
          <Genres text="Romance" entity="Romance" />
          <Genres text="Thriller" entity="Thriller" />
          <Genres text="Animation" entity="Animation" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
