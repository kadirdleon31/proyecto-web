const levantar = document.querySelectorAll(".producto-tarjeta");
levantar.forEach(function (tarjeta) {
    tarjeta.addEventListener("mouseenter", function () {
        tarjeta.classList.add("levantar");
    });

    tarjeta.addEventListener("mouseleave", function() {
        tarjeta.classList.remove("levantar");
    })
});