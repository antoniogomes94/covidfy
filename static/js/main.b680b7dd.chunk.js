(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/logo.3e93eb0e.png"},37:function(e,t,a){e.exports=a(72)},42:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(31),r=a.n(c),s=(a(42),a(34)),u=a(11),m=a(2),o=a.n(m),i=a(6),E=a(8),d=a(32),p=a.n(d).a.create({baseURL:"https://covid19-brazil-api.now.sh/api/report/v1/"});a(61),a(62),a(63);function f(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/");case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),l.a.createElement("div",{className:"tabelaUF"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{class:"table100-head"},l.a.createElement("th",{class:"column1"},"Estado"),l.a.createElement("th",{class:"column2"},"Confirmados"),l.a.createElement("th",{class:"column5"},"Mortos"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",{class:"column1"},e.state),l.a.createElement("td",{class:"column2"},e.cases),l.a.createElement("td",{class:"column5"},e.deaths))})))))}a(64);var v=a(33),h=a.n(v);function b(){return l.a.createElement("div",{id:"header"},l.a.createElement("img",{src:h.a}))}var g=a(9),O=a(16),j=a(15),x=a(17),y=a(13),w=a.n(y);a(66);function N(){w.a.locale("PT-BR");var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(E.a)(r,2),u=s[0],m=s[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),v=f[0],h=f[1],b=Object(n.useState)([]),y=Object(E.a)(b,2),N=y[0],Y=y[1],M=Object(n.useState)([]),k=Object(E.a)(M,2),A=(k[0],k[1]);return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/us");case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/italy");case 2:t=e.sent,m(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/spain");case 2:t=e.sent,h(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/china");case 2:t=e.sent,Y(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/united kingdom");case 2:t=e.sent,A(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l.a.createElement("div",{className:"outros"},l.a.createElement("h2",null,"Outros Pa\xedses"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md col-sm-1 pais"},l.a.createElement("div",null,l.a.createElement("h3",null,"EUA")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.a,null)),l.a.createElement("strong",null,a.confirmed)," Confirmados"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(j.a,null)),l.a.createElement("strong",null,a.cases)," Ativos"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(O.a,null)),l.a.createElement("strong",null,a.recovered)," Recuperadoss"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.b,null)),l.a.createElement("strong",null,a.deaths)," Mortes"),l.a.createElement("div",null,l.a.createElement("hr",{class:"hr1"}),l.a.createElement("span",null,l.a.createElement(x.a,null)),l.a.createElement("strong",null,"Atualizado")," ",w()(a.updated_at).format("DD/MM/YYYY LT"))),l.a.createElement("div",{className:"col-md col-sm-1 pais"},l.a.createElement("div",null,l.a.createElement("h3",null,"Espanha")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.a,null)),l.a.createElement("strong",null,v.confirmed)," Confirmados"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(j.a,null)),l.a.createElement("strong",null,v.cases)," Ativos"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(O.a,null)),l.a.createElement("strong",null,v.recovered)," Recuperadoss"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.b,null)),l.a.createElement("strong",null,v.deaths)," Mortes"),l.a.createElement("div",null,l.a.createElement("hr",{class:"hr1"}),l.a.createElement("span",null,l.a.createElement(x.a,null)),l.a.createElement("strong",null,"Atualizado")," ",w()(v.updated_at).format("DD/MM/YYYY LT"))),l.a.createElement("div",{className:"col-md col-sm-1 pais"},l.a.createElement("div",null,l.a.createElement("h3",null,"Italia")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.a,null)),l.a.createElement("strong",null,u.confirmed)," Confirmados"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(j.a,null)),l.a.createElement("strong",null,u.cases)," Ativos"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(O.a,null)),l.a.createElement("strong",null,u.recovered)," Recuperadoss"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.b,null)),l.a.createElement("strong",null,u.deaths)," Mortes"),l.a.createElement("div",null,l.a.createElement("hr",{class:"hr1"}),l.a.createElement("span",null,l.a.createElement(x.a,null)),l.a.createElement("strong",null,"Atualizado")," ",w()(u.updated_at).format("DD/MM/YYYY LT"))),l.a.createElement("div",{className:"col-md col-sm-1 pais"},l.a.createElement("div",null,l.a.createElement("h3",null,"China")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.a,null)),l.a.createElement("strong",null,N.confirmed)," Confirmados"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(j.a,null)),l.a.createElement("strong",null,N.cases)," Ativos"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(O.a,null)),l.a.createElement("strong",null,N.recovered)," Recuperadoss"),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(g.b,null)),l.a.createElement("strong",null,N.deaths)," Mortes"),l.a.createElement("div",null,l.a.createElement("hr",{class:"hr1"}),l.a.createElement("span",null,l.a.createElement(x.a,null)," "),l.a.createElement("strong",null,"Atualizado")," ",w()(N.updated_at).format("DD/MM/YYYY LT")))))}function Y(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(E.a)(r,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/brazil");case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/china");case 2:t=e.sent,m(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/us");case 2:t=e.sent,m(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(u),l.a.createElement("div",{className:"main"},l.a.createElement(b,null),l.a.createElement("h2",null,"Brasil"),l.a.createElement("div",{className:"row Level"},l.a.createElement("div",{className:"level-item is-cherry col-md-3 col-sm-1"},l.a.createElement("h5",null,"Confirmados"),l.a.createElement("h1",null,a.confirmed)),l.a.createElement("div",{className:"level-item is-blue col-md-3 col-sm-1"},l.a.createElement("h5",{className:"heading"},"Ativos"),l.a.createElement("h1",{className:"title has-text-info"},a.cases)),l.a.createElement("div",{className:"level-item is-green col-md-3 col-sm-1"},l.a.createElement("h5",{className:"heading"},"Recuperados"),l.a.createElement("h1",{className:"title has-text-success"},a.recovered)),l.a.createElement("div",{className:"level-item is-gray col-md-3 col-sm-1"},l.a.createElement("h5",{className:"heading"},"Mortes"),l.a.createElement("h1",{className:"title has-text-grey"},a.deaths))),l.a.createElement(N,null),l.a.createElement(f,null),l.a.createElement("div",{id:"footer-bottom",class:"clr"},l.a.createElement("div",{id:"footer-bottom-inner",class:"container clr"},l.a.createElement("div",{class:"footer-bottom-flex clr"},l.a.createElement("div",{id:"copyright",class:"clr"}," Desenvolvido por ",l.a.createElement("a",{href:"https://github.com/antoniogomes94",target:"_blank"},"Ant\xf4nio Gomes"),".")))))}function M(){return l.a.createElement(s.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",component:Y,exact:!0}),l.a.createElement(u.a,{path:"/Covidfy",component:Y,exact:!0})))}var k=function(){return l.a.createElement(M,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b680b7dd.chunk.js.map