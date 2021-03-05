var x=document.getElementById("result");

function geoLocation() {
    if(window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML="not supported";
    }
};

function showPosition(position) {

    x.innerHTML=`latitude: ${position.coords.latitude} <br>
    longitude: ${position.coords.latitude}`
}