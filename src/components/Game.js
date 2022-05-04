import React from "react";
//style and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image }) => {
  return (
    <GameStyled>
      <h3>{name}</h3>
      <p>{released}</p>
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
`;
export default Game;
