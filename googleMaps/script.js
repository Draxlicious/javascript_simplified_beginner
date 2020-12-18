const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZHJheGxpY2lvdXMiLCJhIjoiY2tpdHgwNDRqMmc4aDJ3cDN6ams0czFwZCJ9.WFSJ_KbX8OrPaTDGhspLXg'



navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function setupMap(centerPosistion){
    var map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosistion,
        zoom: 15
        });

        const navigationControls = new mapboxgl.NavigationControl();
        map.addControl(navigationControls)


        const directionControls = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN
        })
        map.addControl(directionControls, "top-left")
            
}

function successLocation(posistion){
    setupMap([posistion.coords.longitude, posistion.coords.latitude])
    console.log(posistion);
}
function errorLocation(){
    setupMap([-2.24, 53.48])
console.log("Error");
}