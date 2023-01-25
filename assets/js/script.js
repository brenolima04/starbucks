const menuAbrir = document.querySelector('.menu--abrir');
const menuFechar = document.querySelector('.menu--fechar');
const nav = document.querySelector('nav');



menuAbrir.addEventListener('click', function() {
   nav.style.width = '75%';
   menuFechar.style.right = '62%';

});

menuFechar.addEventListener('click', function() {
   nav.style.width = '0%';
   menuAbrir.style.display = 'block';
   menuFechar.style.right = '-100%'
})

