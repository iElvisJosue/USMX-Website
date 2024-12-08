const DOM = document;
const Bodi = document.body;
const VarCSS = document.querySelector(":root");
const BtnAbrirMenuColores = document.querySelector(".Abrir__MenuColores");
const MenuColores = document.querySelector(".Menu__Colores");
const CerrarMenuColores = document.querySelector(".Menu__Colores--Cerrar");
const Temas = document.querySelectorAll(".Tema");

BtnAbrirMenuColores.addEventListener("click", () => {
  MenuColores.classList.add("MostrarMenuColores");
  Bodi.classList.add("Stop-Scrolling");
});
CerrarMenuColores.addEventListener("click", () => {
  MenuColores.classList.remove("MostrarMenuColores");
  Bodi.classList.remove("Stop-Scrolling");
});
const CrearVariablesEnLocalStorage = (ColorPrincipal, ColorSecundario) => {
  localStorage.setItem("USMX-ColorPrincipal", ColorPrincipal);
  localStorage.setItem("USMX-ColorSecundario", ColorSecundario);
};
const CambiarVariablesCSS = (ColorPrincipal, ColorSecundario) => {
  VarCSS.style.setProperty("--ColorPrincipalSP", ColorPrincipal);
  VarCSS.style.setProperty("--ColorSecundarioSP", ColorSecundario);
  Bodi.classList.remove("Stop-Scrolling");
};
DOM.addEventListener("DOMContentLoaded", () => {
  const ColorPrincipal = localStorage.getItem("USMX-ColorPrincipal");
  const ColorSecundario = localStorage.getItem("USMX-ColorSecundario");
  if (ColorPrincipal && ColorSecundario) {
    CambiarVariablesCSS(ColorPrincipal, ColorSecundario);
  } else {
    CrearVariablesEnLocalStorage("#f43b47", "#453a94");
  }
});
Temas[0].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#667eea", "#764ba2");
  CambiarVariablesCSS("#667eea", "#764ba2");
});
Temas[1].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#b062d2", "#ee609c");
  CambiarVariablesCSS("#b062d2", "#ee609c");
});
Temas[2].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#8baaaa", "#ae8b9c");
  CambiarVariablesCSS("#8baaaa", "#ae8b9c");
});
Temas[3].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#1f6a5a", "#30785e");
  CambiarVariablesCSS("#1f6a5a", "#30785e");
});
Temas[4].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#f83600", "#ec8c69");
  CambiarVariablesCSS("#f83600", "#ec8c69");
});
Temas[5].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#f43b47", "#453a94");
  CambiarVariablesCSS("#f43b47", "#453a94");
});
Temas[6].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#4e36bd", "#2768d5");
  CambiarVariablesCSS("#4e36bd", "#2768d5");
});
Temas[7].addEventListener("click", () => {
  CrearVariablesEnLocalStorage("#23263a", "#27555b");
  CambiarVariablesCSS("#23263a", "#27555b");
});
