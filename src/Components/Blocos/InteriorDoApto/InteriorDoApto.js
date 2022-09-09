import React from "react";
import "./InteriorDoApto.styles.css";
import Botao from "../../Botao/Botao";
import { SimpleSlider } from "../../Carousel/Carousel";

const InteriorDoApto = (props) => {
  return (
    <div className="bloco bloco-interiorDoApto">
      <SimpleSlider className="carrossel-interior" />
    </div>
  );
};

export default InteriorDoApto;
