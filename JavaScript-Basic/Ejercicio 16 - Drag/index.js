const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".sec")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", event => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
    })
    seccion.addEventListener("drop", event => {
        const parrafo_id = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(parrafo_id)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelectorAll(".papelera")

papelera.addEventListener("dragover", event => {
        event.preventDefault()
    })

papelera.addEventListener("drop", event => {
    
        const parrafo_id = event.dataTransfer.getData("id")
        document.getElementById(parrafo_id).remove()
    })
