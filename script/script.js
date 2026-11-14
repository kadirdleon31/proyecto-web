const levantar = document.querySelectorAll(".producto-tarjeta");
levantar.forEach(function (tarjeta) {
    tarjeta.addEventListener("mouseenter", function () {
        tarjeta.classList.add("levantar");
    });

    tarjeta.addEventListener("mouseleave", function() {
        tarjeta.classList.remove("levantar");
    })
});

const numeroWhatsapp = "50761234567";

const botonesPedido = document.querySelectorAll(".producto-tarjeta .btn-gold");

botonesPedido.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const tarjeta = boton.closest(".producto-tarjeta");
        const nombre = tarjeta.querySelector("h3").textContent;
        const precio = tarjeta.querySelector(".price").textContent;

        const mensaje = "Hola SuperStar, me interesa: " + nombre + " (" + precio + ")";
        const enlace = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensaje);

        window.location.href = enlace;
    });
});