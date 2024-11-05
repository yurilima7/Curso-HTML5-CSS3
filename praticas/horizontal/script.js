const scrollContainer = document.getElementById('scrollContainer');
let currentSection = 0; // Índice da seção inicial
let isThrottled = false; // Controle de tempo para rolagem

// Função para rolar para uma seção específica
function scrollToSection(sectionIndex) {
    const sectionWidth = window.innerWidth;
    scrollContainer.style.transform = `translateX(-${sectionIndex * sectionWidth}px)`;
}

// Evento de rolagem do mouse
window.addEventListener("wheel", (event) => {
    event.preventDefault(); // Impede a rolagem padrão
    if (!isThrottled) {
        isThrottled = true; // Ativa o controle de tempo

        // Determina a direção da rolagem
        if (event.deltaY > 0) {
            // Rolagem para baixo (próxima seção)
            if (currentSection < scrollContainer.children.length - 1) {
                currentSection++;
                scrollToSection(currentSection);
            }
        } else if (event.deltaY < 0) {
            // Rolagem para cima (seção anterior)
            if (currentSection > 0) {
                currentSection--;
                scrollToSection(currentSection);
            }
        }

        // Define o tempo de espera antes de liberar para nova rolagem
        setTimeout(() => {
            isThrottled = false;
        }, 600); // Ajuste o tempo para controlar a frequência (em milissegundos)
    }
});

// Ajusta o índice da seção ao redimensionar a janela
window.addEventListener('resize', () => {
    scrollToSection(currentSection);
});
