import styled, { keyframes } from "styled-components";

const floatting = keyframes`
0% {transform: translate(0px)};
50% {transform: translate(10px, 5px)};
100% {transform: translate(0px)};
`;

const ghosting = keyframes`
0% {opacity: 0.9};
50% {opacity: 0.1};
100% {opacity: 0.9};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
`;
export const Image = styled.img`
  position: absolute;
  width: 100%;
  animation: ${floatting} 3s ease-in-out 1s infinite normal none running;
  &:nth-child(1) {
    animation-duration: 2.1s;
  }
  &:nth-child(2) {
    animation: ${ghosting} 5s ease-in-out 0.66s infinite normal none running;
    animation-duration: 2.5s;
  }
  &:nth-child(3) {
    animation: ${ghosting} 5s ease-in-out 0.66s infinite normal none running;
    animation-duration: 1.8s;
  }
  &:nth-child(4) {
    animation: ${ghosting} 5s ease-in-out 0.66s infinite normal none running;
    animation-duration: 3.5s;
  }
  &:nth-child(5) {
    animation-duration: 2.5s;
  }
`;
