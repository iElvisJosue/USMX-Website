const InputRastrearPaquete = document.querySelector(
  ".Bienvenida__Rastrear--Input"
);
const BotonRastrearPaquete = document.querySelector(
  ".Bienvenida__Rastrear--Boton"
);

let PeticionCreada = false;

const URL_RASTREO = "https://www.usmxxpress.net/NumeroDeGuia/";
//   "http://localhost:5173/NumeroDeGuia/";

const RastrearNumeroDeGuia = () => {
  const NumeroDeGuia = InputRastrearPaquete.value.trim();

  if (!NumeroDeGuia) return InputRastrearPaquete.focus();

  window.location.href = `${URL_RASTREO}${NumeroDeGuia}`;
};
InputRastrearPaquete.addEventListener("keydown", (e) => {
  if (e.key === "Enter") return RastrearNumeroDeGuia();
});
BotonRastrearPaquete.addEventListener("click", RastrearNumeroDeGuia);
