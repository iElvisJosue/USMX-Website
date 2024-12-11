const CorreoFormulario = document.getElementById("CorreoFormulario");
const ModalSubiendo = document.querySelector(".ModalSubiendo");
const ModalExitoso = document.querySelector(".ModalExitoso");
const BtnCerrarModalExitoso = document.querySelector(
  ".ModalExitoso__Contenido--Cerrar"
);
const ModalError = document.querySelector(".ModalError");
const BtnCerrarModalError = document.querySelector(
  ".ModalError__Contenido--Cerrar"
);

const SERVIDOR_PETICIONES = "https://www.usmxxpress.online:4000/api";
// "http://localhost:4000/api";

BtnCerrarModalExitoso.addEventListener("click", () => {
  ModalExitoso.classList.remove("Mostrar");
});
BtnCerrarModalError.addEventListener("click", () => {
  ModalError.classList.remove("Mostrar");
});
CorreoFormulario.addEventListener("submit", async function (event) {
  // EVITAMOS QUE SE RECARGUE LA PAGINA
  event.preventDefault();
  // MOSTRAMOS EL MODAL DE SUBIENDO
  ModalSubiendo.classList.add("Mostrar");

  const NOMBRE = document.getElementById("FormularioNombre").value;
  const APELLIDOS = document.getElementById("FormularioApellidos").value;
  const CORREO = document.getElementById("FormularioCorreo").value;
  const TELEFONO = document.getElementById("FormularioTelefono").value;
  const MENSAJE = document.getElementById("FormularioMensaje").value;

  const CONTENIDO_CORREO = {
    NOMBRE,
    APELLIDOS,
    CORREO,
    TELEFONO,
    MENSAJE,
  };

  try {
    const res = await fetch(`${SERVIDOR_PETICIONES}/sistema/EnviarCorreo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CONTENIDO_CORREO),
    });
    if (res.status === 200) {
      ModalExitoso.classList.add("Mostrar");
      CorreoFormulario.reset();
    } else {
      ModalError.classList.add("Mostrar");
    }
  } catch (error) {
    ModalError.classList.add("Mostrar");
  } finally {
    ModalSubiendo.classList.remove("Mostrar");
  }
});
