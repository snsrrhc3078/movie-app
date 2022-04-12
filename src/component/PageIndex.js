import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../CSS/PageIndex.module.css";

/* css list
PageIndex
indexItem
link
selectedItem
*/

function PageIndex() {
  const { entity, page } = useParams();
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
  return (
    <center>
      <div className={style.PageIndex}>{arr}</div>
    </center>
  );
}

export default PageIndex;
