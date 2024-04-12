window.addEventListener("scroll", function() {
    const scrollDiv = document.getElementById("bar");
  
    // Cambia el color de fondo cuando se haga scroll
    if (window.scrollY > 200) {
      scrollDiv.style.backgroundColor = "#f5bb1d"; // Cambia el color a tu preferencia
    } else {
      scrollDiv.style.backgroundColor = "#f5df1d"; // Vuelve al color de fondo predeterminado
    }
  });