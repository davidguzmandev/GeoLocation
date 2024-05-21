const geolocation = document.getElementById('location');

const showPosition = position => {
    geolocation.innerHTML = 'Your current position is<br>Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude;
}

const getLocation = () => {
    console.log(navigator.geolocation);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        geolocation.innerHTML = 'This browser does not support or does not have the permission'
    }
}