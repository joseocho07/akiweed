const preguntas = [
  { texto: "¿Tu personaje fuma actualmente?", si: 1, no: 8 },
  { texto: "¿Fuma todos los días?", si: 2, no: 5 },
  { texto: "¿Es muy flaco y duerme como muerto?", si: 3, no: 4 },
  { texto: "🎤 ¡Es Cipe!", si: null, no: null, personaje: "cipe" },
  { texto: "¿Viaja fuerte cuando fuma?", si: 9, no: 10 },
  { texto: "¿Tiene estilo tipo Snoop Dogg?", si: 6, no: 7 },
  { texto: "🧑‍🦱 ¡Es CJ!", si: null, no: null, personaje: "cj" },
  { texto: "🐀 ¡Es Rata!", si: null, no: null, personaje: "rata" },
  { texto: "¿Antes fumaba pero ya no?", si: 11, no: 12 },
  { texto: "🐾 ¡Es Pulga!", si: null, no: null, personaje: "pulga" },
  { texto: "🐀 ¡Es Rata!", si: null, no: null, personaje: "rata" },
  { texto: "¿Parece del narco pero no lo es?", si: 13, no: 14 },
  { texto: "🤷 No lo sé, ¡me ganaste esta vez!", si: null, no: null },
  { texto: "🌴 ¡Es Tulun!", si: null, no: null, personaje: "Tulun" },
  { texto: "🤷 No lo sé, ¡me ganaste esta vez!", si: null, no: null }
];

let preguntaActual = 0;

const preguntaEl = document.getElementById("pregunta");
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const imagenesDiv = document.getElementById("imagenes-personajes");
const btnReiniciar = document.getElementById("btnReiniciar");

function ocultarImagenes() {
  document.getElementById('img-pulga').style.display = 'none';
  document.getElementById('img-cj').style.display = 'none';
  document.getElementById('img-rata').style.display = 'none';
  document.getElementById('img-cipe').style.display = 'none';
  document.getElementById('img-Tulun').style.display = 'none';
}

function mostrarImagen(personaje) {
  imagenesDiv.style.display = 'block';
  ocultarImagenes();
  if (personaje === "pulga") {
    document.getElementById('img-pulga').style.display = 'block';
  } else if (personaje === "cj") {
    document.getElementById('img-cj').style.display = 'block';
  } else if (personaje === "rata") {
    document.getElementById('img-rata').style.display = 'block';
  } else if (personaje === "cipe") {
    document.getElementById('img-cipe').style.display = 'block';
  } else if (personaje === "Tulun") {
    document.getElementById('img-Tulun').style.display = 'block';
  }
}

function mostrarPregunta(index) {
  const pregunta = preguntas[index];
  preguntaEl.textContent = pregunta.texto;
  if (pregunta.si === null && pregunta.no === null) {
    btnSi.style.display = "none";
    btnNo.style.display = "none";
    btnReiniciar.style.display = "inline-block";
    if (pregunta.personaje) {
      mostrarImagen(pregunta.personaje);
    } else {
      imagenesDiv.style.display = 'none';
    }
  } else {
    btnSi.style.display = "inline-block";
    btnNo.style.display = "inline-block";
    btnReiniciar.style.display = "none";
    imagenesDiv.style.display = 'none';
    ocultarImagenes();
  }
}

btnSi.addEventListener("click", () => {
  const siguiente = preguntas[preguntaActual].si;
  if (siguiente !== null) {
    preguntaActual = siguiente;
    mostrarPregunta(preguntaActual);
  } else {
    preguntaActual = preguntas.length - 1;
    mostrarPregunta(preguntaActual);
  }
});

btnNo.addEventListener("click", () => {
  const siguiente = preguntas[preguntaActual].no;
  if (siguiente !== null) {
    preguntaActual = siguiente;
    mostrarPregunta(preguntaActual);
  } else {
    preguntaActual = preguntas.length - 1;
    mostrarPregunta(preguntaActual);
  }
});

btnReiniciar.addEventListener("click", () => {
  preguntaActual = 0;
  mostrarPregunta(preguntaActual);
});

mostrarPregunta(preguntaActual);