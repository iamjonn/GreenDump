//ARRAY QUE SIMULA BANCO DE DADOS
import { descartes } from "./descartes.js";
//FUNÇAO QUE LEVA A BARRA DE BUSCA O TOPO
import { BarraTop } from "./BarraTop.js";




const Produto = document.querySelector('#produto').value;
const telaPrincipal = document.querySelector('.ue');

const lupa = document.querySelector('#lupa');
lupa.addEventListener('click', Buscar);



//FUNÇAO QUE PEGA O QUE FOI DIGITADO E BUSCA NO BANCO
function Buscar() { 
  let produto = document.querySelector('#produto').value;
  let cardsFiltrados = descartes.filter((flag) => flag.produto.toLowerCase() === produto.toLowerCase()).map((flag)=>{
    return`<div class="card">
    <div class="container">
    <div class="info">
      <h4><b>Produto: ${flag.produto}</b></h4> 
      <p>Cliente: ${flag.cliente}</p> 
      <p>Contato: ${flag.contato}</p>
      </div>
      <img src="${flag.foto}" alt="imagem do produto"> 
    </div>
  </div>`
  ;
  }).join('');
  cardsFiltrados.length === 0?
    alert('O produto digitado não está disponível'): telaPrincipal.innerHTML = '';telaPrincipal.insertAdjacentHTML('beforeend', cardsFiltrados, BarraTop());
}













  


