import React, { useState } from "react";

import "./styles.css";
import Logo from "../../assets/logo.png";

export default function Cabecalho() {
  return (
    <div id="header">
        <img src={Logo}/>
    </div>
  );
}