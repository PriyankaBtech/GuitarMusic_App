// Declare variables
let songElement = new Audio('./Music/music.mp3')
let songIndex = 0
let centerPlay = document.getElementById('centerPlay')
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItems'))


let songs = [
    {songName: "Summar-walk",
     filePath: "./Music/music.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Forest-lullbaby",
     filePath: "./Music/music1.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Reflected-light",
     filePath: "./Music/music2.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "The beat of nature",
     filePath: "./Music/music3.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Waterfall",
     filePath: "./Music/music4.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
    {songName: "Electronic-rock",
     filePath: "./Music/music5.mp3",
     coverPath: "./Photos/cover.jpg"   
    },
]

// looping
songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByClassName("songNames")[0].innerText = songs[i].songName
})


//handle play and pause click
centerPlay.addEventListener('click', () => {
    if(songElement.paused || songElement.currentTime <= 0) {
        songElement.play();
        centerPlay.classList.remove('fa-play-circle')
        centerPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    } 
    else {
        songElement.pause();
        centerPlay.classList.remove('fa-pause-circle')
        centerPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

// audioElement.play()

// addEventListener() => Listen to events
songElement.addEventListener("timeupdate", () => {
    console.log("Time Update")

    //connect song to progress bar
    let progress = parseInt((songElement.currentTime/songElement.duration) * 100)
    console.log(progress)
    progressBar.value = progress
})

progressBar.addEventListener('change', () => {
    songElement.currentTime = progressBar.value * songElement.duration / 100

})
