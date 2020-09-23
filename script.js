// Unplash API
const count = 10;

// Normally, i will not store API Keys like this, but an exception made here because it is free, and the data is publicly available!
const apiKey = "Wksfi12VtsTGtsGT8I1uGoElI7H4WVey3YP7CEk8PWA";

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}
// On Load
getPhotos();