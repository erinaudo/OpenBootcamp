const btnAlert = document.querySelector(".btn")

btnAlert.addEventListener("click", () => {
    alert("click en el botón")
})

$(() => {
    $(".btn").click (() => {
        console.log("Hola, estoy utilizando jQuery");
    })
})