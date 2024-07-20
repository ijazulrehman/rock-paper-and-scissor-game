import { Line } from "./styled";

interface Props {
  startPosition: number;
  length: number;
  isDashed?: boolean;
}

export const LineComponent: React.FC<Props> = ({
  length,
  startPosition,
  isDashed,
}) => {
  return (
    <Line
      startPosition={startPosition}
      length={length}
      isDashed={isDashed}
    ></Line>
  );
};
