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
    var image = L.imageOverlay('../image/mapa.webp', bounds).addTo(map);
  
    // Ajustar la vista del mapa para que encaje con la imagen
    map.fitBounds(bounds);
  
    // Habilitar el zoom y el desplazamiento
    map.scrollWheelZoom.enable();
    map.dragging.enable();
  
  
  
    // Cambiar la posición inicial del mapa (ajusta las coordenadas y el nivel de zoom según tus necesidades)
    map.setView([500, 1120], -1); 
  });

  function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-overlay").style.display = "block";
}

// Cerrar el popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
}


document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío normal del formulario
  const month1 = document.getElementById("month1").value;

  fetch(`../mostraafi.php?month1=${month1}`)
      .then(response => response.text())
      .then(data => {
          document.getElementById("results").innerHTML = data; // Mostrar resultados
      })
      .catch(error => console.error("Error:", error));
});
