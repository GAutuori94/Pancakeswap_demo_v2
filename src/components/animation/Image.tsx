import React from "react";
import * as S from "./Image.styles";

interface SvgProps {
  imageUrl: string;
}

const Image: React.FC<SvgProps> = ({ imageUrl }) => {
  return (
    <S.ImageWrapper>
      <S.Image src={imageUrl} />
    </S.ImageWrapper>
  );
};

export default Image;
