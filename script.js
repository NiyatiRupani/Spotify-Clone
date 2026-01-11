console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Let me love you", filePath: "songs/1.mp3", coverPath:"covers/1.png"},
    {songName:"Blue Eyes", filePath: "songs/2.mp3", coverPath:"covers/2.png"},
    {songName:"Bom diggy diggy", filePath: "songs/3.mp3", coverPath:"covers/3.png"},
    {songName:"Pasoori", filePath: "songs/4.mp3", coverPath:"covers/4.png"},
    {songName:"Mirchi", filePath: "songs/5.mp3", coverPath:"covers/5.png"},
    {songName:"Shape of you", filePath: "songs/6.mp3", coverPath:"covers/6.png"},
    {songName:"Hit the bucket", filePath: "songs/7.mp3", coverPath:"covers/7.png"},
    {songName:"Amplifier", filePath: "songs/8.mp3", coverPath:"covers/8.png"},
    {songName:"Senorita", filePath: "songs/9.mp3", coverPath:"covers/9.png"},
]

songItem.forEach((element,i) =>{
    console.log(element,i);
    element.getElementsByTagName("song.png")[0].src=songs[i].filePath;
});
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const forwardBtn = document.getElementById('forwardBtn');
const backwardBtn = document.getElementById('backwardBtn');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
});

forwardBtn.addEventListener('click', () => {
    audio.currentTime += 10;
  });
  
  backwardBtn.addEventListener('click', () => {
    audio.currentTime -= 10;
  });
