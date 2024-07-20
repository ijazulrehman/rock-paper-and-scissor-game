import { Dot } from "./styled";

interface Props {
  position: number;
  isCurrent?: boolean;
}

export const DotComponent: React.FC<Props> = ({ isCurrent, position }) => {
  return <Dot isCurrent={isCurrent} position={position} />;
};
