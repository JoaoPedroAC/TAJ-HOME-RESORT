import React from "react";
import Botao from "../../Botao/Botao";
import "./videoIntrodutorio.styles.css";

const VideoIntrodutorio = (props) => {
  return (
    <div className="bloco bloco-videoIntrodutorio">
      <div className="titulo">
        <h2 className="destaque">
          No Taj Home Resort, você se apaixona pela sua vida, dia após dia
        </h2>
      </div>

      <div className="subtitulo">
        <p>
          Esse não é um empreendimento apenas,{" "}
          <span className="destaque">
            é a experiência de vida que você sempre sonhou ter
          </span>{" "}
          nas férias, e agora pode ser o seu dia a dia!
        </p>
      </div>

      <div className="video glow">video</div>

      <div className="CTA-Button">
        <Botao
          title="CONHEÇA O TAJ HOME RESORT"
          className="button_outlined_yellow glow"
        />
      </div>
    </div>
  );
};

export default VideoIntrodutorio;
