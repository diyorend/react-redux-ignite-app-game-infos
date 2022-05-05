import React from "react";
//style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  //Data
  const { screen, game } = useSelector((state) => state.details);

  return (
    <CardShadow>
      <Detail>
        <Stats>
          <Rating>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </Rating>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.parent_platforms.map((platform) => (
                <h3 key={platform.platform.id}>{platform.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt={game.name} />
        </Media>
        <Description dangerouslySetInnerHTML={{ __html: game.description }} />
        <Gallery>
          {screen.results.map((pic) => (
            <img key={pic.id} src={pic.image} alt="screenshot" />
          ))}
        </Gallery>
      </Detail>
    </CardShadow>
  );
};
const Flex = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardShadow = styled(Flex)`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  img {
    width: 100%;
  }
`;
const Detail = styled(motion.div)`
  overflow-y: scroll;
  position: absolute;
  height: 90%;
  width: 80%;
  border-radius: 0.5rem;
  padding: 1.5rem 0rem;
  background: white;
`;
const Stats = styled(Flex)`
  justify-content: space-between;
`;
const Rating = styled(motion.div)`
  h3 {
    padding: 0.5rem 0;
  }
`;
const Info = styled(motion.div)``;
const Platforms = styled(Flex)``;
const Media = styled(motion.div)``;
const Description = styled(motion.div)``;
const Gallery = styled(motion.div)``;

export default GameDetail;
