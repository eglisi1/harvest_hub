const locationApi = 'https://api.zippopotam.us/CH/';

function fetchLocation() {
    // read input id 'town' afterwards check if plz or string
    // then make a request to an api to get the location

    // get the value of the input
    const zip = document.getElementById('zip').value;
    console.debug(zip);

    const request = `${locationApi}${zip}`;
    console.debug('make request: ', request);
    fetch(request)
        .then(response => response.json())
        .then(data => {
            console.debug('received payload: ', data);
            const city = data.places[0]['place name'];
            console.log(city);
            document.getElementById('city').value = city;
        });
}