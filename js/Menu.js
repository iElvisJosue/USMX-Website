const Body = document.body;
const VerNavbar = document.querySelector(".Navbar__Opciones--Barras");
const Menu = document.querySelector(".Menu");
const CerrarMenu = document.querySelector(".Menu--Cerrar");

VerNavbar.addEventListener("click", () => {
  Menu.classList.add("Menu-Show");
  Body.classList.add("QuitarScroll");
});
CerrarMenu.addEventListener("click", () => {
  Menu.classList.remove("Menu-Show");
  Body.classList.remove("QuitarScroll");
});
function ExitMenu() {
  Menu.classList.remove("Menu-Show");
  Body.classList.remove("QuitarScroll");
}
