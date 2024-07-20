import { FC } from "react";
import { CardComponent, DotComponent, LineComponent } from "components";
import {
  Container,
  RestTimeline,
  RightArrow,
  Timeline,
  Title,
  WorkTimeline,
} from "./styled";
import family from "assets/svg/family.svg";
import emFund from "assets/svg/em-fund.svg";
import debt from "assets/svg/debt.svg";
import holiday from "assets/svg/going-holiday.svg";
import home from "assets/svg/home.svg";
import vision from "assets/svg/vision.svg";
import retire from "assets/svg/retire.svg";

export const DashboardComponent: FC = () => {
  return (
    <Container>
      <WorkTimeline>
        <DotComponent isCurrent={true} position={0} />
        <Title startPosition={0}>
          You are <br /> here
        </Title>
        <LineComponent startPosition={21} length={65} />

        <CardComponent
          image={home}
          title="New home"
          displayDirection="down"
          position={94}
        />
        <DotComponent position={91} />
        <Title startPosition={91}>In 1 year and 9 months</Title>
        <LineComponent startPosition={102} length={125} />
        <CardComponent
          image={family}
          title="Baby’s birth"
          displayDirection="up"
          position={94}
        />

        <CardComponent
          image={holiday}
          title="Holiday"
          displayDirection="up"
          position={236}
        />
        <DotComponent position={232} />
        <Title startPosition={232}>In 3 years and 2 months</Title>
        <LineComponent startPosition={243} length={130.5} />

        <DotComponent position={378.5} />
        <Title startPosition={378.5}>In 4 years and 9 months</Title>
        <LineComponent startPosition={389.5} length={188.5} />
        <CardComponent
          image={emFund}
          title="Emergency fund"
          displayDirection="down"
          position={382.5}
        />

        <DotComponent position={583} />
        <Title startPosition={583}>In 8 years and 11 months</Title>
        <CardComponent
          image={debt}
          title="Debt free"
          displayDirection="down"
          position={587}
        />
      </WorkTimeline>
      <RestTimeline>
        <Timeline />
        <RightArrow />
        <Title startPosition={162}>Ultimately</Title>
        <CardComponent
          image={retire}
          title="Retire"
          displayDirection="up"
          position={81}
        />
        <CardComponent
          image={vision}
          title="Make a contribution to my community through philantrophy"
          displayDirection="down"
          position={162}
          lastCard={true}
        />
      </RestTimeline>
    </Container>
  );
};
