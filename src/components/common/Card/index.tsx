import React from "react";
import { AngleArrow, Card, CardWrpper, Line, Title } from "./styled";

interface Props {
  image: string;
  title: string;
  displayDirection: string;
  lastCard?: boolean;
  position: number;
}

export const CardComponent: React.FC<Props> = ({
  image,
  displayDirection,
  title,
  lastCard,
  position,
}) => {
  return (
    <CardWrpper displayDirection={displayDirection} position={position}>
      {displayDirection === "down" && <Line />}
      <Card lastCard={lastCard}>
        <img src={image} />
        <Title>{title}</Title>
        <AngleArrow
          lastCard={lastCard}
          displayDirection={displayDirection}
        ></AngleArrow>
      </Card>
      {displayDirection === "up" && <Line />}
    </CardWrpper>
  );
};
