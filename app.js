// koppla html till js
const lista = document.querySelector('#lista');
const form = document.querySelector('form');
const searchTerm = document.querySelector('#search');   // vad vi skriver in i rutan
const auth = "f9cd17df77c1e69ea4ff70567e92a950";

// anrop till API
form.addEventListener('submit', e =>{
    e.preventDefault();
    // clear inner html av lista
    lista.innerHTML = '';
    getData(searchTerm.value);
});

async function getData(query){
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${auth}&tags=${query}&text=${query}&format=json&nojsoncallback=1`);
    // detta är data vi får tillbaka
    const data = await response.json();
    showPhotos(data);

}

async function showPhotos(data){
    data.photos.photo.forEach(photo =>{
        const itemlist = document.createElement('li');
        itemlist.innerHTML = `<img src="https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg">`;
        lista.appendChild(itemlist);
    });
};

