//ARRAY QUE SIMULA BANCO DE DADOS


const descartes = [
  {
    produto: 'celular',
    cliente: 'gabriel almeida',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.Sp3mt8zkHxj9jYSmfp3TqAHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    produto: 'computador',
    cliente: 'wesley augusto',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.lDubXm1eOaOSvyp5PYWvWQHaFz?w=269&h=211&c=7&r=0&o=5&pid=1.7'
  },
  {
    produto: 'celular',
    cliente: 'clara santino',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.Sp3mt8zkHxj9jYSmfp3TqAHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    produto: 'computador',
    cliente: 'pedro augusto',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.lDubXm1eOaOSvyp5PYWvWQHaFz?w=269&h=211&c=7&r=0&o=5&pid=1.7'
  },
  {
    produto: 'notebook',
    cliente: 'francisco carlos',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.BbluIiqSsZXO_hy0W_pahwHaGc?w=189&h=183&c=7&r=0&o=5&pid=1.7'
  },
  {
    produto: 'notebook',
    cliente: 'maria cecilia',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.BbluIiqSsZXO_hy0W_pahwHaGc?w=189&h=183&c=7&r=0&o=5&pid=1.7'
  },
  {
    produto: 'celular',
    cliente: 'kevin anthony',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.Sp3mt8zkHxj9jYSmfp3TqAHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    produto: 'mouse',
    cliente: 'thiago alcantra',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIP.73Fwb9wm-vRia-ZCJN1HVQHaGo?w=243&h=217&c=7&r=0&o=5&pid=1.7'
  },
];







//FUNÇAO QUE PEGA O QUE FOI DIGITADO E BUSCA NO BANCO


const Produto = document.querySelector('#produto').value;
const telaPrincipal = document.querySelector('.ue');


const lupa = document.querySelector('#lupa');
lupa.addEventListener('click', Buscar);
/*let cards = descartes.map((flag)=>*/
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






//FUNÇAO QUE LEVA A BARRA DE BUSCA O TOPO

function BarraTop(){
  const Barra = document.querySelector('.barra_pesquisa');
  const Title = document.querySelector('#title');


  Title.classList.add('title');
  Barra.classList.add('barra_pesquisa2');
}




  


