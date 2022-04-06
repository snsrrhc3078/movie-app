import SideBar from "../component/SideBar";
import Entity from "../component/EntitySelector";
function Home() {
  return (
    <div>
      <SideBar />
      <Entity text="Sci-fi" entity="genre=Sci-fi" color="white" />
      <Entity text="Romance" entity="genre=romance" color="pink" />
      <Entity text="Thriller" entity="genre=Thriller" color="#4646CD" />
    </div>
  );
}

export default Home;
