function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Realizar validación del usuario y contraseña aquí
    // Por ejemplo, puedes comparar los valores con una base de datos o con datos almacenados en el navegador

    if (username === "alissa" && password === "11-04-23") {
        window.location.href = "todo/principal.html";
        // Redirigir al usuario a otra página o realizar otras acciones
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
