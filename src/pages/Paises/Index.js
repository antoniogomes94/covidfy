import React, { useState, useEffect } from "react";
import { default as NumberFormat } from 'react-number-format';
import { FaSkull } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import Moment from 'moment';

import api from '../../services/api.js';
import "./styles.css";

export default function Paises() {
    Moment.locale('PT-BR');

    const [pais1, setPais1] = useState([])
    const [pais2, setPais2] = useState([])
    const [pais3, setPais3] = useState([])
    const [pais4, setPais4] = useState([])
 
    useEffect(() => {
        async function loadPais1() {
            const response = await api.get('/us')
            setPais1(response.data.data);
        }

        loadPais1()
    }, [])

    useEffect(() => {
      async function loadPais2() {
          const response = await api.get('/united kingdom');
          setPais2(response.data.data);
      }

      loadPais2()
    }, [])

    useEffect(() => {
      async function loadPais3() {
          const response = await api.get('/india');
          setPais3(response.data.data);
      }

      loadPais3()
    }, [])

    useEffect(() => {
        async function loadPais4() {
            const response = await api.get('/russia');
            setPais4(response.data.data);
        }
  
        loadPais4()
    }, [])

  return (
    <div className="outros">
        <h2>Outros Países</h2>
        <div className="row">
            <div className="col-md col-sm-1 pais">
                        <div>
                            <h3>EUA</h3>  
                        </div> 
                        <div>
                        <span><FaCheck/></span> 
                            <strong><NumberFormat value={pais1.confirmed} displayType={'text'} format="##.###.###"/></strong> Confirmados
                        </div>
                        <div>
                        <span><FaSkull/></span> 
                            <strong><NumberFormat value={pais1.deaths} displayType={'text'} format="###.###"/></strong> Mortes
                        </div>
                    </div>  

            <div className="col-md col-sm-1 pais">
                        <div>
                            <h3>Reino Unido</h3>  
                        </div> 
                        <div>
                            <span><FaCheck/></span> 
                            <strong><NumberFormat value={pais2.confirmed} displayType={'text'} format="##.###.###"/></strong> Confirmados
                        </div>
                        <div>
                            <span><FaSkull/></span> 
                            <strong><NumberFormat value={pais2.deaths} displayType={'text'} format="###.###"/></strong> Mortes
                        </div>
                    </div>  

            <div className="col-md col-sm-1 pais">
                        <div>
                            <h3>Índia</h3>  
                        </div> 
                        <div>
                            <span><FaCheck/></span> 
                            <strong><NumberFormat value={pais3.confirmed} displayType={'text'} format="##.###.###"/></strong> Confirmados
                        </div>
                        <div>
                            <span><FaSkull/></span> 
                            <strong><NumberFormat value={pais3.deaths} displayType={'text'} format="###.###"/></strong> Mortes
                        </div>
                    </div>  

            <div className="col-md col-sm-1 pais">
                    <div>
                        <h3>Rússia</h3>  
                    </div> 
                    <div>
                        <span><FaCheck/></span> 
                        <strong><NumberFormat value={pais4.confirmed} displayType={'text'} format="##.###.###"/></strong> Confirmados
                    </div>
                    <div>
                        <span><FaSkull/></span> 
                        <strong><NumberFormat value={pais4.deaths} displayType={'text'} format="###.###"/></strong> Mortes
                    </div>
                </div>
        </div>
    </div>
  );
}



