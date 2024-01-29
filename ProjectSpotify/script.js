const srcInput = document.getElementById("srcInput")
const srcArtist = document.getElementById("srcArtist")
const playlistItems = document.getElementById("playlists-items")

srcInput.addEventListener("input",() => {
    const input = srcInput.value.toLowerCase()
    if(input === " "){
        playlistItems.classList.add = "hidden"
        srcArtist.classList.remove = "hidden"
    }
    return;
})
