 // Seleciona o botão e o menu
 const hamburguer = document.querySelector('.hamburguer');
 const menu = document.querySelector('.menu ul');

 // Alterna a classe "ativo" ao clicar no botão
 hamburguer.addEventListener('click', () => {
     menu.classList.toggle('ativo');
 });