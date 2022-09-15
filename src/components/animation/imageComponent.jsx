import React from "react";
import * as S from "./Image.styles";

import img_1 from "./img/asset_3.png";
import img_2 from "./img/asset_4.png";
import img_3 from "./img/asset_5.png";
import img_4 from "./img/asset_6.png";

export function ImageComponent() {
  return (
    <S.ImageWrapper>
      <S.Image src={img_1} />
      <S.Image src={img_2} />
      <S.Image src={img_3} />
      <S.Image src={img_4} />
    </S.ImageWrapper>
  );
}
