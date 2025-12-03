/* Carrinho simples */
let carrinho = [];

function addToCart(nome, preco) {
  carrinho.push({ nome, preco });
  alert(`${nome} foi adicionado ao carrinho!`);
}

/* Animações suaves ao fazer scroll */
const fadeItems = document.querySelectorAll(".fade-in");

function checkVisibility() {
  const trigger = window.innerHeight * 0.85;

  fadeItems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

/* Formulário */
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! (modo demonstração)");
    form.reset();
  });
}


function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const icon = document.querySelector(".mobile-menu-icon");

  menu.classList.toggle("open");
  overlay.classList.toggle("show");
  icon.classList.toggle("active");
}

