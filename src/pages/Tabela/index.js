import React, { useState, useEffect } from "react";
import api from '../../services/api.js';

import "./styles.css";

export default function Profile() {
  const [estados, setEstados] = useState([])
 
  useEffect(() => {
      async function loadEstados() {
          const response = await api.get('/')
          setEstados(response.data.data);
      }

      loadEstados()
  }, [])

  return (
    <div className="tabelaUF row">
        <table>
          <thead>
            <tr class="table100-head">
              <th class="column1">Estado</th>
              <th class="column2">Confirmados</th>
              <th class="column5">Mortos</th>
            </tr>
          </thead>
          <tbody>
            {estados.map(estado => (
              <tr>
                <td class="column1">{estado.state}</td>
                <td class="column2">{estado.cases}</td>
                <td class="column5">{estado.deaths}</td>
              </tr>     
            ))}
            
          </tbody>
        </table>
      </div>
  );
}

