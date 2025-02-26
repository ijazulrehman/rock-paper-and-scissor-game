import {
  Container,
  ErrorTitle,
  NotExistText,
  NotFoundText,
  GoToHomePage,
} from "./styled";
import { FC } from "react";

export const NotFoundComponent: FC = () => {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <ErrorTitle>404</ErrorTitle>
      <NotExistText>This page does not exist</NotExistText>
      <NotFoundText>
        The page you are looking for could not be found.
      </NotFoundText>
      <GoToHomePage to={"/"}>Go to HomePage!</GoToHomePage>
    </Container>
  );
};
