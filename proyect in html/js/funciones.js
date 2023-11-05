function muestraMenu(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    document.querySelector("#menu-desplegable").classList.toggle("visible");
  }
  
  function ocultaMenu(evento) {
    evento.preventDefault();
    document.querySelector("#menu-desplegable").classList.remove("visible");
  }
  
  function clickFueraDeMenu(evento) {
    if (evento.target.closest("#menu-desplegable")) {
      return;
    }
    document.querySelector("#menu-desplegable").classList.remove("visible");
  }
  
  function teclaEscCierraMenu(evento) {
    if (evento.key === "Escape") {
      document.querySelector("#menu-desplegable").classList.remove("visible");
    }
  }
  
  document.querySelector("#mostrar-menu").addEventListener("click", muestraMenu);
  document.querySelector("#cerrar-menu").addEventListener("click", ocultaMenu);
  document.addEventListener("click", clickFueraDeMenu);
  document.addEventListener("keydown", teclaEscCierraMenu);