const srcInput = document.getElementById("srcInput")
const srcArtist = document.getElementById("srcArtist")
const playlistItems = document.getElementById("playlists-items")

function reqDeApi(input){
    const url = `http://localhost:3000/artists?name_like=${input}`
    try{
        fetch(url).then((res) => res.json()).then(data => mostrarResultados(data))
    } catch(e){
        console.log(e)
    }
}      

function mostrarResultados(data){
    srcArtist.innerHTML = ""
    data.map(element => {
        srcArtist.innerHTML +=`
            <a href="" class="text-btn search__artist--item">
                <picture>
                    <img src="${element.urlImg}" alt="artist-logo" id="search__artist--logo">
                </picture>
                <span id="search__artist--name">${element.name}</span>
                <span> Artista </span>
            </a>
        `
    });
}

srcInput.addEventListener("input",function () {
    const input = srcInput.value.toLowerCase()
    if(input != ""){
        playlistItems.classList.add("hidden")
        srcArtist.classList.remove("hidden")
    } else{
        playlistItems.classList.remove("hidden")
        srcArtist.classList.add("hidden")
    }
    reqDeApi(input)
})
