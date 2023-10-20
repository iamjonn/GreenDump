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
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
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
    foto: 'https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx'
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

const telaPrincipal = document.querySelector('.ue');


let cards = descartes.map((flag)=>{
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

function BarraTop(){
  const Barra = document.querySelector('.barra_pesquisa');
  const Title = document.querySelector('#title');


  Title.classList.add('title');
  Barra.classList.add('barra_pesquisa2');
}


telaPrincipal.insertAdjacentHTML('beforeend', cards, BarraTop());


console.log('oi jon')
  


