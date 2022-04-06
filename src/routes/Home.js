import SideBar from "../component/SideBar";
import Entity from "../component/EntitySelector";
import style from "../CSS/Home.module.css";
function Home() {
  return (
    <div>
      <SideBar />
      <Entity text="Sci-Fi" entity="genre=Sci-fi" color="white" />
      <Entity text="Romance" entity="genre=romance" color="pink" />
      <Entity text="Thriller" entity="genre=Thriller" color="#4646CD" />
      <Entity
        text="Animation"
        entity="genre=Animation"
        color="mediumspringgreen"
      />
    </div>
  );
}

export default Home;
