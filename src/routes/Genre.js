import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../CSS/Genre.module.css";
import GenreMovies from "../component/GenreMovies";
import SideBar from "../component/SideBar";

function Genre() {
  return (
    <div>
      <SideBar />
      <GenreMovies />
    </div>
  );
}

export default Genre;
