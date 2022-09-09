import React from 'react';
import "./Botao.styles.css";

const Botao = (props) => {
  return <button className={props.className} {...props}>{props.title}</button>;
};

export default Botao;

