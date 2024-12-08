const BotonSubir = document.querySelector(".BotonSubir");
const Bienvenida = document.querySelectorAll(".Bienvenida");
const SobreNosotros = document.querySelectorAll(".SobreNosotros");
const Servicios = document.querySelectorAll(".Servicios");
const Ecosistema = document.querySelectorAll(".Ecosistema");
const USMX = document.querySelectorAll(".USMX");
const Correo = document.querySelectorAll(".Correo");
const MisionValores = document.querySelectorAll(".MisionValores");
const Clientes = document.querySelectorAll(".Clientes");
const Eslogan = document.querySelectorAll(".Eslogan");
const Footer = document.querySelectorAll(".Footer");

const ObserverElements = document.querySelectorAll(
  ".Servicios, .SobreNosotros, .Ecosistema, .USMX, .MisionValores, .Correo, .Clientes, .Eslogan, .Footer"
);

const ObserverBienvenida = new IntersectionObserver(
  (EntradasBienvenida) => {
    EntradasBienvenida.forEach((EntradaBienvenida) => {
      if (EntradaBienvenida.isIntersecting) {
        BotonSubir.classList.remove("Mostrar");
      } else {
        BotonSubir.classList.add("Mostrar");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverServicios = new IntersectionObserver(
  (EntradasServicios) => {
    EntradasServicios.forEach((EntradaServicios) => {
      if (EntradaServicios.isIntersecting) {
        ObserverElements[0].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverSobreNosotros = new IntersectionObserver(
  (EntradasSobreNosotros) => {
    EntradasSobreNosotros.forEach((EntradaSobreNosotros) => {
      if (EntradaSobreNosotros.isIntersecting) {
        ObserverElements[1].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverEcosistema = new IntersectionObserver(
  (EntradasEcosistema) => {
    EntradasEcosistema.forEach((EntradaEcosistema) => {
      if (EntradaEcosistema.isIntersecting) {
        ObserverElements[2].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverUSMX = new IntersectionObserver(
  (EntradasUSMX) => {
    EntradasUSMX.forEach((EntradaUSMX) => {
      if (EntradaUSMX.isIntersecting) {
        ObserverElements[3].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverMisionValores = new IntersectionObserver(
  (EntradasMisionValores) => {
    EntradasMisionValores.forEach((EntradaMisionValores) => {
      if (EntradaMisionValores.isIntersecting) {
        ObserverElements[4].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverCorreo = new IntersectionObserver(
  (EntradasCorreo) => {
    EntradasCorreo.forEach((EntradaCorreo) => {
      if (EntradaCorreo.isIntersecting) {
        ObserverElements[5].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverClientes = new IntersectionObserver(
  (EntradasClientes) => {
    EntradasClientes.forEach((EntradaClientes) => {
      if (EntradaClientes.isIntersecting) {
        ObserverElements[6].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverEslogan = new IntersectionObserver(
  (EntradasEslogan) => {
    EntradasEslogan.forEach((EntradaEslogan) => {
      if (EntradaEslogan.isIntersecting) {
        ObserverElements[7].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);
const ObserverFooter = new IntersectionObserver(
  (EntradasFooter) => {
    EntradasFooter.forEach((EntradaFooter) => {
      if (EntradaFooter.isIntersecting) {
        ObserverElements[8].classList.add("Observado");
      }
    });
  },
  {
    threshold: 0.7,
    rootMargin: "0px",
  }
);

Bienvenida.forEach((BienvenidaObservado) => {
  ObserverBienvenida.observe(BienvenidaObservado);
});
Servicios.forEach((ServiciosObservado) => {
  ObserverServicios.observe(ServiciosObservado);
});
SobreNosotros.forEach((SobreNosotrosObservado) => {
  ObserverSobreNosotros.observe(SobreNosotrosObservado);
});
Ecosistema.forEach((EcosistemaObservado) => {
  ObserverEcosistema.observe(EcosistemaObservado);
});
USMX.forEach((USMXObservado) => {
  ObserverUSMX.observe(USMXObservado);
});
Correo.forEach((CorreoObservado) => {
  ObserverCorreo.observe(CorreoObservado);
});
MisionValores.forEach((MisionValoresObservado) => {
  ObserverMisionValores.observe(MisionValoresObservado);
});
Clientes.forEach((ClientesObservado) => {
  ObserverClientes.observe(ClientesObservado);
});
Eslogan.forEach((EsloganObservado) => {
  ObserverEslogan.observe(EsloganObservado);
});
Footer.forEach((FooterObservado) => {
  ObserverFooter.observe(FooterObservado);
});
