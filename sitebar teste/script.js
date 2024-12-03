// Função para abrir o sidebar
function openNav() {
    document.getElementById("mySidebar").style.transition = "width 0.5s ease"; // Transição suave
    document.getElementById("mySidebar").style.width = "250px"; // Largura do sidebar
    document.getElementById("main").style.transition = "margin-left 0.5s ease"; // Transição suave
    document.getElementById("main").style.marginLeft = "250px"; // Ajuste do conteúdo principal
}

// Função para fechar o sidebar
function closeNav() {
    document.getElementById("mySidebar").style.transition = "width 0.5s ease"; // Transição suave
    document.getElementById("mySidebar").style.width = "0"; // Largura do sidebar
    document.getElementById("main").style.transition = "margin-left 0.5s ease"; // Transição suave
    document.getElementById("main").style.marginLeft = "0"; // Ajuste do conteúdo principal
}

