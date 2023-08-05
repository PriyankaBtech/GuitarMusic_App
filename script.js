// Declare variables
let songElement = new Audio('./Music/1.mp3')
let songIndex = 0
let centerPlay = document.getElementById('centerPlay')
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItems'))


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

// looping | apply the song name
songItems.forEach((element, i) => {
    //console.log(element, i)
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


//create function
const songPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}


// song play in list
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log("Clicked element ID:", e.target)
        songPlay()
        songIndex = parseInt(e.target.id)
        //console.log(`Index ${index}`)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        let sourcePath = `Music/${songIndex}.mp3`;
        songElement.src = sourcePath
        songElement.currentTime = 0
        songElement.play()
        centerPlay.classList.remove('fa-play-circle')
        centerPlay.classList.add('fa-pause-circle')        
    })
})




