import React, { useState, useEffect } from "react";
import { FaSkull } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { TiWarning } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";

import api from '../../services/api.js';
import "./styles.css";

export default function Paises() {

    const [eua, setEUA] = useState([])
    const [italia, setItalia] = useState([])
    const [espanha, setEspanha] = useState([])
    const [china, setChina] = useState([])
    const [reinoUnido, setReinoUnido] = useState([])
 
    useEffect(() => {
        async function loadEUA() {
            const response = await api.get('/us')
            setEUA(response.data.data);
        }

        loadEUA()
    }, [])

    useEffect(() => {
      async function loadItalia() {
          const response = await api.get('/italy');
          setItalia(response.data.data);
      }

      loadItalia()
    }, [])

    useEffect(() => {
      async function loadEspanha() {
          const response = await api.get('/spain');
          setEspanha(response.data.data);
      }

      loadEspanha()
    }, [])

    useEffect(() => {
        async function loadChina() {
            const response = await api.get('/china');
            setChina(response.data.data);
        }
  
        loadChina()
    }, [])

    useEffect(() => {
        async function loadReinoUnido() {
            const response = await api.get('/united kingdom');
            setReinoUnido(response.data.data);
        }
  
        loadReinoUnido()
    }, [])

  return (
    <div className="outros">
    <h2>Outros Países</h2>
        <ul>
            <li>
                <div>
                    <div>
                        <h3>EUA</h3>  
                    </div> 
                    <div>
                    <span><FaCheck/></span> 
                        <strong>{eua.confirmed}</strong> Confirmados
                    </div>
                    <div>
                    <span><TiWarning/></span> 
                        <strong>{eua.cases}</strong> Ativos
                    </div>
                    <div>
                    <span><FiRefreshCw/></span> 
                        <strong>{eua.recovered}</strong> Recuperadoss
                    </div>
                    <div>
                    <span><FaSkull/></span> 
                        <strong>{eua.deaths}</strong> Mortes
                    </div>
                    <div>
                    <hr class="hr1"></hr>
                    <span><BsClockFill/> 
                        <strong>Atualizado</strong> 21/04/2020 - 09:33
                    </span>
                    </div> 
                </div>  
            </li>
        </ul>


        <ul>
            <li>
                <div>
                    <div>
                        <h3>Espanha</h3>  
                    </div> 
                    <div>
                    <span><FaCheck/></span> 
                        <strong>{espanha.confirmed}</strong> Confirmados
                    </div>
                    <div>
                    <span><TiWarning/></span> 
                        <strong>{espanha.cases}</strong> Ativos
                    </div>
                    <div>
                    <span><FiRefreshCw/></span> 
                        <strong>{espanha.recovered}</strong> Recuperadoss
                    </div>
                    <div>
                    <span><FaSkull/></span> 
                        <strong>{espanha.deaths}</strong> Mortes
                    </div>
                    <div>
                    <hr class="hr1"></hr>
                    <span><BsClockFill/> 
                        <strong>Atualizado</strong> 21/04/2020 - 09:33
                    </span>
                    </div> 
                </div>  
            </li>
        </ul>





        <ul>
            <li>
                <div>
                    <div>
                        <h3>Italia</h3>  
                    </div> 
                    <div>
                    <span><FaCheck/></span> 
                        <strong>{italia.confirmed}</strong> Confirmados
                    </div>
                    <div>
                    <span><TiWarning/></span> 
                        <strong>{italia.cases}</strong> Ativos
                    </div>
                    <div>
                    <span><FiRefreshCw/></span> 
                        <strong>{italia.recovered}</strong> Recuperadoss
                    </div>
                    <div>
                    <span><FaSkull/></span> 
                        <strong>{italia.deaths}</strong> Mortes
                    </div>
                    <div>
                    <hr class="hr1"></hr>
                    <span><BsClockFill/> 
                        <strong>Atualizado</strong> 21/04/2020 - 09:33
                    </span>
                    </div> 
                </div>  
            </li>
        </ul>



        <ul>
            <li>
                <div>
                    <div>
                        <h3>China</h3>  
                    </div> 
                    <div>
                    <span><FaCheck/></span> 
                        <strong>{china.confirmed}</strong> Confirmados
                    </div>
                    <div>
                    <span><TiWarning/></span> 
                        <strong>{china.cases}</strong> Ativos
                    </div>
                    <div>
                    <span><FiRefreshCw/></span> 
                        <strong>{china.recovered}</strong> Recuperadoss
                    </div>
                    <div>
                    <span><FaSkull/></span> 
                        <strong>{china.deaths}</strong> Mortes
                    </div>
                    <div>
                    <hr class="hr1"></hr>
                    <span><BsClockFill/> 
                        <strong>Atualizado</strong> 21/04/2020 - 09:33
                    </span>
                    </div> 
                </div>  
            </li>
        </ul>

        <ul>
            <li>
                <div>
                    <div>
                        <h3>Reino Unido</h3>  
                    </div> 
                    <div>
                    <span><FaCheck/></span> 
                        <strong>{reinoUnido.confirmed}</strong> Confirmados
                    </div>
                    <div>
                    <span><TiWarning/></span> 
                        <strong>{reinoUnido.cases}</strong> Ativos
                    </div>
                    <div>
                    <span><FiRefreshCw/></span> 
                        <strong>{reinoUnido.recovered}</strong> Recuperadoss
                    </div>
                    <div>
                    <span><FaSkull/></span> 
                        <strong>{reinoUnido.deaths}</strong> Mortes
                    </div>
                    <div>
                    <hr class="hr1"></hr>
                    <span><BsClockFill/> 
                        <strong>Atualizado</strong> 21/04/2020 - 09:33
                    </span>
                    </div> 
                </div>  
            </li>
        </ul>
    </div>
  );
}



