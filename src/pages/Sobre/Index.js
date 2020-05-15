import React, { useState, useEffect } from "react";
import "./styles.css";

import Foto from "../../assets/foto.jpeg";

export default function Sobre() {
  return (
      <div id="sobre" >
          <div className="row">
          <div className="col-md-3 col-sm-12 foto">
            <div className="container">
              <div className="row">
                <img src={Foto}/>
              </div>
              <div className="row">
                  <br/><br/>
                  <div className="col-md-12 icones">
                    <a href="https://github.com/antoniogomes94" target="_blank" className="btn-social btn-github"><i className="fa fa-github-alt"></i></a>
                    <a href="https://www.linkedin.com/in/antoniogomes313/" target="_blank" className="btn-social btn-linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href="mailto:antoniogomes313@gmail.com" target="_blank" className="btn-social btn-email"><i className="fa fa-envelope"></i></a>
                    <a href="https://www.facebook.com/antonio.gomes313p/" target="_blank" className="btn-social btn-facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/antoniogomes313/" target="_blank" className="btn-social btn-instagram"><i className="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/antoniogomes313" target="_blank" className="btn-social btn-twitter"><i className="fa fa-twitter"></i></a>
                  </div>
              </div>
            </div>
          </div>

          <div className="col-md col-sm-12 texto-sobre">
                <h3>Sobre</h3>
                <p>Olá! Meu nome é Antonio Gomes. Eu tenho 26 anos, sou pós graduado em Gestão Estrategica da Tecnologia da Informação e Graduado em Análise e desenvolvimento de Sistemas.
                Trabalho com desenvolvimento de software com a plataforma .NET a 4 anos, mas resolvi me aventurar por novas tecnolocias</p>
                <p>Participei Semana Omnistack da Rocketseat, que consiste em desenvolver uma aplicação completa utilizando a stack node.js, ReactJS e React Native em cinco dias de forma gratuita. Gostei bastante da proposta da tecnologias abordadas e resolvi botar um pouco de conhecimento em pratica</p>
                <p>Fiz esse site com intuito de fornecer informações sobre o avanço da pandemia do Corona Virus e ao mesmo tempo me aperfeiçoar nessas novas tecnologias.
                Surgiu dai a Covidfy, um aplicação que informa os dados atualizados do Brasil e dos paises mais relevantes sobre a pandemia do Corona Virus, alem de um detalhamento por estados do Brasileiros.</p>
          </div>
          
          </div>
          <div className="row">
            <div className="creditos">
              <hr className="hr1"></hr>
              <h3>Créditos</h3>
                  <p className="credito">O dados são atualizados com base na API do pessoal da <a href="https://covid19-brazil-api-docs.now.sh">Covid19 Brazil API</a></p> 
                  <p className="credito"><a href="https://br.freepik.com/fotos-vetores-gratis/logotipo">Adaptaçao de logotipo vetor criado por freepik - br.freepik.com</a></p>
              </div>
          </div>
      </div>
  );
}



