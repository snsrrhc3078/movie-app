// import { Link } from "react-router-dom";

function Genres({ text, entity }) {
  return <span>{text} </span>;
}

function SideBar() {
  return (
    <div>
      <div>
        <Genres text="Animation" entity="Scifi" />
        <Genres text="Romance" entity="Romance" />
        <Genres text="Thriller" entity="Thriller" />
      </div>
    </div>
  );
}

export default SideBar;
