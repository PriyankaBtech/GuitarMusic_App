
let songs = [
    {songName: "Summar-walk",
     filePath: "./Music/1.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Forest-lullbaby",
     filePath: "./Music/2.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Reflected-light",
     filePath: "./Music/3.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "The beat of nature",
     filePath: "./Music/4.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Waterfall",
     filePath: "./Music/5.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Electronic-rock",
     filePath: "./Music/6.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
]

// Declare variables
let songElement = new Audio() //  create an HTML5 Audio element
let centerPlay = document.getElementById('centerPlay')
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItems'))

let currentSongIndex = 0 // to keep track of the currently playing song
let isPlaying = false // flag to track if a song is currently playing


// Function to play the selected song
function playSong(filePath) {
    songElement.src = filePath
    songElement.play()
    isPlaying = true // set the flag to indicate that a song is playing
    updatePlayingUI() // update the UI to indicate the playing song   
}

// Loop through songItems and apply the song name
songItems.forEach((element, i) => {
    element.getElementsByClassName("songNames")[0].innerText = songs[i].songName

    // add a click event listener to each song item
    element.addEventListener('click', () => {
        // add the file path of the clicked song
        const filePath = songs[i].filePath
        playSong(filePath)
        currentSongIndex = i // update the current song index
        updatePlayingUI() // update the UI to indicate the playing song
        centerPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
        console.log('Clicked on:', songs[i].songName, 'File Path:', filePath)
    })
})


// Handle clicks on the center play button to toggle playback
document.getElementById('centerPlay').addEventListener('click', () => {
    if (isPlaying) {
        songElement.pause() // pause the currently playing song
        isPlaying = false // set the flag to indicate that no song is playing
        centerPlay.classList.remove('fa-pause-circle')
        centerPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0

    } else {
        playSong(songs[currentSongIndex].filePath);
        centerPlay.classList.remove('fa-play-circle')
        centerPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    }
})


// Set time update in progress bar
songElement.addEventListener("timeupdate", () => {    
    console.log("Time Update")

    //connect song to progress bar
    let progress = parseInt((songElement.currentTime/songElement.duration) * 100)
    progressBar.value = progress
})

progressBar.addEventListener('change', () => {
    songElement.currentTime = progressBar.value * songElement.duration / 100
})


// Function to play the next song
function playNextSong() {
    if (isPlaying) {
        currentSongIndex = (currentSongIndex + 1) % songs.length
        playSong(songs[currentSongIndex].filePath)     
    }
}

// Function to play the previous song
function playPreviousSong() {
    if (isPlaying) {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length
        playSong(songs[currentSongIndex].filePath)               
    }
}

// Handle clicks on the forward and backward buttons
document.getElementById('forwardButton').addEventListener('click', playNextSong)
document.getElementById('backwardButton').addEventListener('click', playPreviousSong)


// Function to update the UI to indicate the currently playing song
function updatePlayingUI() {
    // remove the 'playing' class from all song items
    songItems.forEach(element => {
        element.classList.remove('playing')
    })

    // add the 'playing' class to the currently playing song item
    songItems[currentSongIndex].classList.add('playing')
}










