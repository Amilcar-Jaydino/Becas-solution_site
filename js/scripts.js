// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const botoes = document.querySelectorAll('.botao');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('ativo', i === index);
        });
        botoes.forEach((botao, i) => {
            botao.classList.toggle('selecionado', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    botoes.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos
});
