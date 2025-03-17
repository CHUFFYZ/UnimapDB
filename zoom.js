// Esperar a que el DOM esté completamente cargado antes de inicializar el mapa
document.addEventListener('DOMContentLoaded', function() {
  // Dimensiones de la imagen
  var w = 2048,
      h = 1520;
  // Límites de la imagen
  var bounds = [[0, 0], [h, w]];

    // Inicializar el mapa con la vista inicial centrada en [0, 0]
var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1.5000000000000001,
  maxZoom: 2, // Ajustar el nivel máximo de zoom
  maxBounds: bounds, // Establecer los límites del mapa
  maxBoundsViscosity: 1.0 // Asegurar que no se pueda arrastrar fuera de los límites
});

  // Añadir la imagen al mapa
  var image = L.imageOverlay('image/mapa.webp', bounds).addTo(map);

  // Ajustar la vista del mapa para que encaje con la imagen
  map.fitBounds(bounds);

  // Habilitar el zoom y el desplazamiento
  map.scrollWheelZoom.enable();
  map.dragging.enable();



  // Cambiar la posición inicial del mapa (ajusta las coordenadas y el nivel de zoom según tus necesidades)
  map.setView([500, 1120], -1); 
});
/* pop up para el aboutme */ 
function showPopup(img, name, telefono, correo, carrera, matricula) {
  document.getElementById('popup-img').src = img;
  document.getElementById('popup-name').textContent = name;
  document.getElementById('popup-matricula').textContent = 'Matrícula: ' + matricula;
  document.getElementById('popup-carrera').textContent = 'Carrera: ' + carrera;
  document.getElementById('popup-correo').textContent = 'Correo: ' + correo;
  document.getElementById('popup-telefono').textContent = 'Teléfono: ' + telefono;
  document.getElementById('popup').style.display = 'block';
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

/*modo invitado */

function toggleGuestMode() {
  const checkbox = document.getElementById('guestMode');
  const acceptButton = document.getElementById('acceptButton');
  // Mostrar u ocultar el botón "Aceptar" según el estado del toggle
  if (checkbox.checked) {
      acceptButton.style.display = 'inline-block';
  } else {
      acceptButton.style.display = 'none';
  }
}

function redirectToGuest() {
  // Redirige a la página para invitados
  window.location.href = "../index.html";
}