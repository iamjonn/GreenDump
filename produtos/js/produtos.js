//ARRAY QUE SIMULA BANCO DE DADOS


const descartes = [
  {
    produto: 'celular',
    cliente: 'gabriel almeida',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
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
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
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
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
  },
  {
    produto: 'notebook',
    cliente: 'maria cecilia',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
  },
  {
    produto: 'celular',
    cliente: 'kevin anthony',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
  },
  {
    produto: 'mouse',
    cliente: 'thiago alcantra',
    contato: '83 98877-6655',
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
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
  telaPrincipal.innerHTML = '';
  telaPrincipal.insertAdjacentHTML('beforeend', cardsFiltrados, BarraTop());
}






//FUNÇAO QUE LEVA A BARRA DE BUSCA O TOPO

function BarraTop(){
  const Barra = document.querySelector('.barra_pesquisa');
  const Title = document.querySelector('#title');


  Title.classList.add('title');
  Barra.classList.add('barra_pesquisa2');
}




  


