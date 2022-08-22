// Ouvinte do evento de rolagem do página
window.addEventListener('scroll', () => {
    // Verifica a distância da página até o topo do site
    if (window.pageYOffset > 100) {
        // Adiciona uma classe no elemento de navegação do header
        document.getElementsByClassName('navigation')[0].classList.add('nav-bg');
    } else {
        // Remove uma classe no elemento de navegação do header
        document.getElementsByClassName('navigation')[0].classList.remove('nav-bg');
    }
});
