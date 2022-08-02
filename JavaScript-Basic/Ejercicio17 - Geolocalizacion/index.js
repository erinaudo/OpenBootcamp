function initMap () {
    const ubud = {
        lat: -8.503286787231223, 
        lng: 115.26282032252551
    }

    const cozumel = {
        lat: 20.433957881611068,
        lng: -86.91889798077761
    }

    const eldurazno = {
        lat: -31.332489101440604, 
        lng: -64.64982838088554
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: eldurazno  
    })

    function mapcreator (ubicacion) {
        const marker = new google.maps.Marker({
            position: ubicacion,
            map,
            title: "Lugar Favorito"
        }) 
        return marker
    }

    const marker1 = mapcreator(ubud)
    const marker2 = mapcreator(cozumel)
    const marker3 = mapcreator(eldurazno)

}
