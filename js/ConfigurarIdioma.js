import {
  CONTENIDO_NAVBAR,
  CONTENIDO_MENU,
  CONTENIDO_MENU_COLORES,
  CONTENIDO_BIENVENIDA,
  CONTENIDO_BIENVENIDA_BOTON,
  CONTENIDO_SERVICIOS,
  IMAGENES_PARA_EL_SLIDER,
  IMAGEN_SLIDER,
  BOTON_ANTERIOR,
  BOTON_SIGUIENTE,
  CONTENIDOS_SERVICIOS_BOTONES,
  CONTENIDO_NOSOTROS,
  CONTENIDO_ECOSISTEMA,
  CONTENIDO_USMX,
  CONTENIDO_USMX_BOTONES,
  CONTENIDO_CORREO,
  CONTENIDO_CORREO_FORMULARIO,
  CONTENIDO_CORREO_BOTON_ENVIAR,
  CONTENIDO_MISION_VALORES,
  CONTENIDO_CLIENTES,
  CONTENIDO_ESLOGAN,
  CONTENIDO_FOOTER,
} from "./ContenidoDelSitio.js";
import {
  TEXTO_NAVBAR_ES,
  TEXTO_NAVBAR_EN,
  TEXTO_MENU_COLORES_ES,
  TEXTO_MENU_COLORES_EN,
  TEXTO_BIENVENIDA_ES,
  TEXTO_BIENVENIDA_EN,
  TEXTO_BIENVENIDA_BOTONES_ES,
  TEXTO_BIENVENIDA_BOTONES_EN,
  TEXTO_SERVICIOS_ES,
  TEXTO_SERVICIOS_EN,
  TEXTO_SERVICIOS_BOTONES_ES,
  TEXTO_SERVICIOS_BOTONES_EN,
  TEXTO_NOSOTROS_ES,
  TEXTO_NOSOTROS_EN,
  TEXTO_ECOSISTEMA_ES,
  TEXTO_ECOSISTEMA_EN,
  TEXTO_USMX_ES,
  TEXTO_USMX_EN,
  TEXTO_USMX_BOTON_ES,
  TEXTO_USMX_BOTON_EN,
  TEXTO_CORREO_ES,
  TEXTO_CORREO_EN,
  TEXTO_CORREO_FORMULARIO_ES,
  TEXTO_CORREO_FORMULARIO_EN,
  TEXTO_CORREO_BOTON_ES,
  TEXTO_CORREO_BOTON_EN,
  TEXTO_MISION_VALORES_ES,
  TEXTO_MISION_VALORES_EN,
  TEXTO_CLIENTES_ES,
  TEXTO_CLIENTES_EN,
  TEXTO_ESLOGAN_ES,
  TEXTO_ESLOGAN_EN,
  TEXTO_FOOTER_ES,
  TEXTO_FOOTER_EN,
} from "./TextoDelSitio.js";

const Servicios = document.querySelector(".Servicios");

const IdiomaEN = document.querySelector(".Idioma-EN");
const IdiomaES = document.querySelector(".Idioma-ES");

let Contador = 0;
let IntervalID;
let IdiomaDelSitio;

window.onload = () => {
  ObtenerIdiomaDelSitio();
};
const ObtenerIdiomaDelSitio = () => {
  IdiomaDelSitio = localStorage.getItem("USMX-Idioma");
  if (!IdiomaDelSitio) {
    EstablecerIdiomaDelSitio("ES");
  } else {
    EstablecerContenidoDelSitio();
  }
};
IdiomaEN.addEventListener("click", () => {
  EstablecerIdiomaDelSitio("EN");
});

IdiomaES.addEventListener("click", () => {
  EstablecerIdiomaDelSitio("ES");
});
const EstablecerIdiomaDelSitio = (idioma) => {
  localStorage.setItem("USMX-Idioma", idioma);
  location.reload();
};
const EstablecerContenidoDelSitio = () => {
  EstablecerContenidoDelNavbar();
  EstablecerContenidoDelMenu();
  EstablecerContenidoDelMenuColores();
  EstablecerContenidoDelBienvenida();
  EstablecerContenidoDelServicios();
  EstablecerContenidoDelNosotros();
  EstablecerContenidoDelEcosistema();
  EstablecerContenidoDelUSMX();
  EstablecerContenidoDelCorreo();
  EstablecerContenidoDelMisionValores();
  EstablecerContenidoDelClientes();
  EstablecerContenidoDelEslogan();
  EstablecerContenidoDelFooter();
};
const EstablecerContenido = (
  CONTENIDO,
  TEXTO_ES,
  TEXTO_EN,
  PLACEHOLDER = false
) => {
  if (PLACEHOLDER) {
    CONTENIDO.forEach((p, index) => {
      p.placeholder =
        IdiomaDelSitio === "ES" ? TEXTO_ES[index] : TEXTO_EN[index];
    });
  } else {
    CONTENIDO.forEach((p, index) => {
      p.textContent =
        IdiomaDelSitio === "ES" ? TEXTO_ES[index] : TEXTO_EN[index];
    });
  }
};
const EstablecerContenidoDelNavbar = () => {
  EstablecerContenido(CONTENIDO_NAVBAR, TEXTO_NAVBAR_ES, TEXTO_NAVBAR_EN);
};
const EstablecerContenidoDelMenu = () => {
  // SON LAS MISMAS OPCIONES QUE EL NAVBAR, ASI QUE LO RECICLAMOS
  EstablecerContenido(CONTENIDO_MENU, TEXTO_NAVBAR_ES, TEXTO_NAVBAR_EN);
};
const EstablecerContenidoDelMenuColores = () => {
  EstablecerContenido(
    CONTENIDO_MENU_COLORES,
    TEXTO_MENU_COLORES_ES,
    TEXTO_MENU_COLORES_EN
  );
};
const EstablecerContenidoDelBienvenida = () => {
  EstablecerContenido(
    CONTENIDO_BIENVENIDA,
    TEXTO_BIENVENIDA_ES,
    TEXTO_BIENVENIDA_EN
  );
  EstablecerContenido(
    CONTENIDO_BIENVENIDA_BOTON,
    TEXTO_BIENVENIDA_BOTONES_ES,
    TEXTO_BIENVENIDA_BOTONES_EN,
    true
  );
};
const EstablecerContenidoDelServicios = () => {
  // ESTABLECEMOS LA IMAGEN PRINCIPAL DEL SLIDER
  IMAGEN_SLIDER.src = IMAGENES_PARA_EL_SLIDER[0];
  EstablecerContenido(
    CONTENIDO_SERVICIOS,
    TEXTO_SERVICIOS_ES[Contador],
    TEXTO_SERVICIOS_EN[Contador]
  );

  IniciarSlider();

  BOTON_ANTERIOR.addEventListener("click", () => {
    Contador--;
    if (Contador < 0) {
      Contador = IMAGENES_PARA_EL_SLIDER.length - 1;
    }
    EstablecerInformacionDeLosServicios(CONTENIDO_SERVICIOS, Contador);
  });
  BOTON_SIGUIENTE.addEventListener("click", () => {
    Contador++;
    if (Contador > IMAGENES_PARA_EL_SLIDER.length - 1) {
      Contador = 0;
    }
    EstablecerInformacionDeLosServicios(CONTENIDO_SERVICIOS, Contador);
  });

  EstablecerContenido(
    CONTENIDOS_SERVICIOS_BOTONES,
    TEXTO_SERVICIOS_BOTONES_ES,
    TEXTO_SERVICIOS_BOTONES_EN
  );
};
const IniciarSlider = () => {
  IntervalID = setInterval(() => {
    Contador++;
    if (Contador > IMAGENES_PARA_EL_SLIDER.length - 1) {
      Contador = 0;
    }
    EstablecerInformacionDeLosServicios(CONTENIDO_SERVICIOS, Contador);
  }, 5000);
};
const ReiniciarSlider = () => {
  clearInterval(IntervalID);
  IniciarSlider();
};
const EstablecerInformacionDeLosServicios = (CONTENIDO_SERVICIOS, Contador) => {
  IMAGEN_SLIDER.src = IMAGENES_PARA_EL_SLIDER[Contador];

  Servicios.classList.remove("Observado");
  setTimeout(() => {
    Servicios.classList.add("Observado");
  }, 100);

  EstablecerContenido(
    CONTENIDO_SERVICIOS,
    TEXTO_SERVICIOS_ES[Contador],
    TEXTO_SERVICIOS_EN[Contador]
  );
  ReiniciarSlider();
};
const EstablecerContenidoDelNosotros = () => {
  EstablecerContenido(CONTENIDO_NOSOTROS, TEXTO_NOSOTROS_ES, TEXTO_NOSOTROS_EN);
};
const EstablecerContenidoDelEcosistema = () => {
  EstablecerContenido(
    CONTENIDO_ECOSISTEMA,
    TEXTO_ECOSISTEMA_ES,
    TEXTO_ECOSISTEMA_EN
  );
};
const EstablecerContenidoDelUSMX = () => {
  EstablecerContenido(CONTENIDO_USMX, TEXTO_USMX_ES, TEXTO_USMX_EN);
  EstablecerContenido(
    CONTENIDO_USMX_BOTONES,
    TEXTO_USMX_BOTON_ES,
    TEXTO_USMX_BOTON_EN
  );
};
const EstablecerContenidoDelCorreo = () => {
  EstablecerContenido(CONTENIDO_CORREO, TEXTO_CORREO_ES, TEXTO_CORREO_EN);
  EstablecerContenido(
    CONTENIDO_CORREO_FORMULARIO,
    TEXTO_CORREO_FORMULARIO_ES,
    TEXTO_CORREO_FORMULARIO_EN,
    true
  );
  EstablecerContenido(
    CONTENIDO_CORREO_BOTON_ENVIAR,
    TEXTO_CORREO_BOTON_ES,
    TEXTO_CORREO_BOTON_EN
  );
};
const EstablecerContenidoDelMisionValores = () => {
  EstablecerContenido(
    CONTENIDO_MISION_VALORES,
    TEXTO_MISION_VALORES_ES,
    TEXTO_MISION_VALORES_EN
  );
};
const EstablecerContenidoDelClientes = () => {
  EstablecerContenido(CONTENIDO_CLIENTES, TEXTO_CLIENTES_ES, TEXTO_CLIENTES_EN);
};
const EstablecerContenidoDelEslogan = () => {
  EstablecerContenido(CONTENIDO_ESLOGAN, TEXTO_ESLOGAN_ES, TEXTO_ESLOGAN_EN);
};
const EstablecerContenidoDelFooter = () => {
  EstablecerContenido(CONTENIDO_FOOTER, TEXTO_FOOTER_ES, TEXTO_FOOTER_EN);
};
