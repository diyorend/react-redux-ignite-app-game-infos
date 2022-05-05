import React, { useEffect } from "react";
//style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  //Load Detail
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <GameStyled onClick={loadDetailHandler}>
      <div>
        <h3>{name}</h3>
        <p>{released}</p>
      </div>
      <img src={image} alt={name} />
    </GameStyled>
  );
};
const GameStyled = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1.5rem;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  div {
    min-height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default Game;
