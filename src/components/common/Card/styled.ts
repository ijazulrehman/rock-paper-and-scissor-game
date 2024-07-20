import styled from "styled-components";

interface AngleArrowProps {
  displayDirection: string;
  lastCard?: boolean;
}

interface CardWrpperProps {
  displayDirection: string;
  position: number;
}

interface CardProps {
  lastCard?: boolean;
}

export const CardWrpper = styled.div<CardWrpperProps>`
  width: 130px;
  position: absolute;
  ${(props) =>
    props.displayDirection === "down" ? "top: 65px;" : "bottom: 15px;"};
  left: ${(props) => `${props.position}px`};
  transform: translate(-50%);
`;
export const Card = styled.div<CardProps>`
  width: 130px;
  min-height: 136px;
  padding: 8px;
  border-radius: 5px;
  gap: 16px;
  background-color: ${(props) => (props.lastCard ? "#3C7F90" : "#173f4b")};
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 4px 12px 0px #00000040;
  margin-left: ${(props) => (props.lastCard ? "-35px" : "0px")};
`;

export const Title = styled.div`
  line-height: 18.2px;
`;

export const AngleArrow = styled.span<AngleArrowProps>`
  border: 7.395px solid transparent;
  position: absolute;
  ${(props) =>
    props.displayDirection === "down" ? "top: -13px;" : "bottom: -13px;"}
  left: ${(props) => (props.lastCard ? "100px" : "50%")};
  ${(props) =>
    props.displayDirection === "down"
      ? `border-bottom: 6.48px solid ${
          props.lastCard ? "#3C7F90" : " #173f4b"
        };`
      : `border-top: 6.48px solid ${props.lastCard ? "#3C7F90" : " #173f4b"};`}
  transform: translate(-50%);
`;

export const Line = styled.div`
  width: 16px;
  height: 2px;
  background-color: #3c7f90;
  border-radius: 2px;
  transform: rotate(90deg);
  margin: 20px auto;
`;
