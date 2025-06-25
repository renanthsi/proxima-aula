// script.js

let currentImageIndex = 0;

const images = [
    "https://example.com/zenitsu1.jpg", // Primeira imagem
    "https://example.com/zenitsu2.jpg", // Segunda imagem
    "https://example.com/zenitsu3.jpg"  // Terceira imagem
];

const zenitsuImage = document.getElementById("zenitsu-img");

function changeImage() {
    // Atualiza o índice da imagem
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Muda a imagem do Zenitsu
    zenitsuImage.src = images[currentImageIndex];
}