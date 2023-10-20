window.addEventListener('scroll', function() {
    var header = document.querySelector('#meu-header');
    var scrollPosition = window.scrollY;
    
    scrollPosition > 0 ? header.classList.add('header-scroll'):header.classList.remove('header-scroll');
  })
  




