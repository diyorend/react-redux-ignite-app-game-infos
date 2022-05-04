import React, { useEffect } from "react";
//Redux logic
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  //Fetch  games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
