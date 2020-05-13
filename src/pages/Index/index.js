import React, { useState, useEffect } from "react";

import api from '../../services/api.js';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Tabela from "../Tabela/index";
import Cabecalho from "../Cabecalho/Index";
import Paises from "../Paises/Index";

export default function Profile() {

  const [brasil, setBrasil] = useState([])
  const [paises, setPaises] = useState([])

    useEffect(() => {
        async function loadBrasil() {
            const response = await api.get('/brazil')
            setBrasil(response.data.data);
        }

        loadBrasil()
    }, [])

    useEffect(() => {
      async function loadPaises() {
          const response = await api.get('/china');
          setPaises(response.data.data);
      }

      loadPaises()
    }, [])

    useEffect(() => {
      async function loadPaises() {
          const response = await api.get('/us');
          setPaises(response.data.data);
      }

      loadPaises()
    }, [])

    console.log(paises);
  return (
    <div className="main">
      <h2>Brasil</h2>
      <div className="row Level">
        <div className="level-item is-cherry col-md-3 col-sm-1">
          <h5>Confirmados</h5>
          <h1>{brasil.confirmed}</h1>
        </div>

        <div
          className="level-item is-blue col-md-3 col-sm-1"
        >
          <h5 className="heading">Ativos</h5>
          <h1 className="title has-text-info">{brasil.cases}</h1>
        </div>

        <div
          className="level-item is-green col-md-3 col-sm-1"
        >
          <h5 className="heading">Recuperados</h5>
          <h1 className="title has-text-success">
          {brasil.recovered}
          </h1>
        </div>

        <div
          className="level-item is-gray col-md-3 col-sm-1"
        >
          <h5 className="heading">Mortes</h5>
          <h1 className="title has-text-grey">{brasil.deaths}</h1>
        </div>
      </div>

      <Paises/>
      <Tabela></Tabela>
      <div id="footer-bottom" class="clr">
        <div id="footer-bottom-inner" class="container clr">
          <div class="footer-bottom-flex clr">
            <div id="copyright" class="clr"> Desenvolvido por <a href="https://github.com/antoniogomes94" target="_blank">Antônio Gomes</a>.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
