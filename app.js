const getFecha = () => {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  let dia = "";

  switch (fecha.getDay()) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miercoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sabado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "Dia invalido";
  }

  return `Hoy es ${dia} y son las ${hora}:${
    minutos < 10 ? "0" + minutos : minutos
  }`;
};

document.querySelector("#contenedor").innerHTML += getFecha();
