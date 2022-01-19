import React, { useState, useEffect } from "react";
import { default as NumberFormat } from 'react-number-format';
import Moment from 'moment';

import api from '../../services/api.js';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Tabela from "../Tabela/index";
import Cabecalho from "../Cabecalho/Index";
import Paises from "../Paises/Index";
import Sobre from "../Sobre/Index";

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

  document.title = 'Covidfy'
  return (
    <div className="main">
      <Cabecalho></Cabecalho>
      
      <h2>Brasil</h2>
      <div className="row Level">
        <div className="level-item is-cherry col-lg-6 col-md-6 col-sm-1">
          <h5>Casos Confirmados</h5>
          <h1><NumberFormat value={brasil.confirmed} displayType={'text'} format="##.###.###"/></h1>
        </div>
        <div className="level-item is-gray col-lg-6 col-md-6 col-sm-1">
          <h5 className="heading">Mortes Confirmadas</h5>
          <h1 className="title has-text-grey"><NumberFormat value={brasil.deaths} displayType={'text'} format="###.###"/></h1>
        </div>
      </div>
      <div className="data-atualizacao">
        <p>Atualizado as {Moment(brasil.updated_at).format('DD/MM/YYYY LT')}</p>
      </div>

      <Paises/>
      <Tabela/>
      <Sobre/>
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