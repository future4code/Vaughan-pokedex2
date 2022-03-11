import React from "react";
import ErrorImage from "../../assets/Error.png";
import { ImgStyled, ImgContainer } from "./styled";

const ErrorPage = () => {
  return (
    <div>
      <ImgContainer>
        <ImgStyled src={ErrorImage} />
      </ImgContainer>
    </div>
  );
};

export default ErrorPage;
