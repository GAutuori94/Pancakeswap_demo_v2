import React from "react";
import * as S from "./Image.styles";

const bunnyHero1 = "../../../assets/image/png/bunnyHero1.png";
const bunnyHero1Start1 = "../../assets/image/png/bunnyHero1Start1.png";
const bunnyHero1Start2 = "../../assets/image/png/bunnyHero1Start2.png";
const bunnyHero1Start3 = "../../assets/image/png/bunnyHero1Start3.png/";

export default function BoxAnimation() {
  return (
    <S.ImageWrapper>
      <S.Image src={bunnyHero1} />
      <S.Image src={bunnyHero1Start1} />
      <S.Image src={bunnyHero1Start2} />
      <S.Image src={bunnyHero1Start3} />
    </S.ImageWrapper>
  );
}
