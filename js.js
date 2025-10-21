const horarioDiv = document.getElementById('horario');

const horarios = {
  matutino: [
    "Lunes: 8:00 - 13:00",
    "Martes: 8:00 - 13:00",
    "Miércoles: 8:00 - 13:00"
  ],
  vespertino: [
    "Lunes: 14:00 - 19:00",
    "Martes: 14:00 - 19:00",
    "Miércoles: 14:00 - 19:00"
  ]
};

function mostrarHorario(turno) {
  horarioDiv.innerHTML = `<h3>Horario ${turno}</h3><ul>` +
    horarios[turno].map(h => `<li>${h}</li>`).join('') +
    "</ul>";
}

// Validación simple del formulario
const form = document.getElementById('form-contacto');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  alert(`Gracias ${nombre}, tu mensaje ha sido enviado.`);
  form.reset();
});
