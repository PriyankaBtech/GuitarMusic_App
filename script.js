// Declare variables
let songElement = new Audio('./Photos/music.mp3')
let songIndex = 0
let centerPlay = document.getElementById('centerPlay')
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif')


let songs = [
    {songName: "summar-walk",
     filePath: "./Photos/music.mp3",
     coverPath: "./Photos/cover.jpg"
    },
    {songName: "summar-walk",
     filePath: "./Photos/music.mp3",
     coverPath: "./Photos/cover.jpg"
    },
    {songName: "summar-walk",
     filePath: "./Photos/music.mp3",
     coverPath: "./Photos/cover.jpg"
    },
    {songName: "summar-walk",
     filePath: "./Photos/music.mp3",
     coverPath: "./Photos/cover.jpg"
    },
    {songName: "summar-walk",
     filePath: "./Photos/music.mp3",
     coverPath: "./Photos/cover.jpg"
    },
    {songName: "summar-walk",
     filePath: "./Photos/music.mp3",
     coverPath: "./Photos/cover.jpg"
    }
]


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
