import styled from "styled-components";

interface TitleProps {
  startPosition: number;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 770px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.div<TitleProps>`
  text-align: center;
  left: ${(props) => `${props.startPosition}px`};
  position: absolute;
  top: 30px;
  width: 96px;
  transform: translate(-50%);
  opacity: 0.6;
`;

export const WorkTimeline = styled.div`
  width: 600px;
  display: flex;
  height: 20px;
  align-items: center;
  position: relative;
`;
export const RestTimeline = styled.div`
  align-items: center;
  width: 174px;
  justify-content: space-around;
  display: flex;
  position: relative;
`;

export const Timeline = styled.div`
  flex: auto;
  height: 3px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1.5L139 1.49999L175 1' fill='none' stroke='white' stroke-width='2' stroke-dasharray='1 7' stroke-linecap='round'/%3e%3c/svg%3e");
`;
export const RightArrow = styled.div`
  height: 20px;
  width: 12px;
  background-image: url("data:image/svg+xml,%3csvg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.48797 1.95312C3.92216 4.32595 9.1251 9.206 10.4634 9.74367C7.53293 11.9538 1.53766 16.7087 1 18.047' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
`;
