import React, { useState, useEffect } from "react";

import api from '../../services/api.js';
import "./styles.css";

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
      <Cabecalho></Cabecalho>
      <h2>Brasil</h2>
      <div className="Level">
        <div className="level-item is-cherry fadeInUp">
          <h5>Confirmados</h5>
          <h1>{brasil.confirmed}</h1>
        </div>

        <div
          className="level-item is-blue fadeInUp"
          style={{animationDelay: '1.1s'}}
        >
          <h5 className="heading">Ativos</h5>
          <h1 className="title has-text-info">{brasil.cases}</h1>
        </div>

        <div
          className="level-item is-green fadeInUp"
          style={{animationDelay: '1.2s'}}
        >
          <h5 className="heading">Recuperados</h5>
          <h1 className="title has-text-success">
          {brasil.recovered}
          </h1>
        </div>

        <div
          className="level-item is-gray fadeInUp"
          style={{animationDelay: '1.3s'}}
        >
          <h5 className="heading">Mortes</h5>
          <h1 className="title has-text-grey">{brasil.deaths}</h1>
        </div>
      </div>

      <Paises/>
      <Tabela></Tabela>
    </div>
  );
}
