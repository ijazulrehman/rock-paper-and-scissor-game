import styled from "styled-components";

interface DotProps {
  isCurrent?: boolean;
  position: number;
}

export const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.isCurrent ? "transparent" : "#00b897")};
  border-radius: 9px;
  border-color: #00b897;
  left: ${(props) => (props.position ? `${props.position}px` : "0")};
  border-style: solid;
  border-width: ${(props) => (props.isCurrent ? "5px" : "0")};
  position: absolute;
`;
