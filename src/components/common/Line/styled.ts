import styled from "styled-components";

interface LineProps {
  startPosition: number;
  length: number;
  isDashed?: boolean;
}

export const Line = styled.div<LineProps>`
  position: absolute;
  width: ${(props) => (props.length < 300 ? `${props.length}px` : "300px")};
  border: ${(props) => (props.length > 0 ? `1px` : "0px")}
    ${(props) => (props.isDashed ? "dashed" : "solid")} white;
  left: ${(props) => `${props.startPosition}px`};
  border-radius: 2px;
`;
