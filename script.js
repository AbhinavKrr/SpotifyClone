//Initializing all the variables
let songIndex = 0;
let audioElememt = new Audio('Songs/1.mp3'); //Create a  new Audio Element Object
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgessBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById("masterSongName");
let songItems = document.querySelectorAll('.songItem');

//Songs as Object Array
let songs = [
    {songName: "Song 1", filePath: 'Songs/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: "Song 2", filePath: 'Songs/2.mp3', coverPath: 'covers/2.jpg'},
    {songName: "Song 3", filePath: 'Songs/3.mp3', coverPath: 'covers/3.jpg'},
    {songName: "Song 4", filePath: 'Songs/4.mp3', coverPath: 'covers/4.jpg'},
    {songName: "Song 5", filePath: 'Songs/5.mp3', coverPath: 'covers/5.jpg'},
    {songName: "Song 6", filePath: 'Songs/6.mp3', coverPath: 'covers/6.jpg'},
    {songName: "Song 7", filePath: 'Songs/7.mp3', coverPath: 'covers/7.jpg'}

]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//All Events in the programs

//Play Pause Event
masterPlay.addEventListener('click' , function(){
    if(audioElememt.paused || audioElememt.currentTime <= 0){
        audioElememt.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElememt.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Update SeekBar
audioElememt.addEventListener('timeupdate', (event)=>{
    console.log('timeupdate');
    //Seekbar
    let progress = parseInt((audioElememt.currentTime/audioElememt.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', function(){
    audioElememt.currentTime = myProgressBar.value * audioElememt.duration/100;
})

const makeAllPlays = function(){
    document.querySelectorAll('.songItemPlay').forEach(function(element){
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    })
}


document.querySelectorAll('.songItemPlay').forEach(function(element){
    element.addEventListener('click', function(event){
        makeAllPlays();
        songIndex = parseInt(event.target.id)
        event.target.classList.remove('fa-circle-play');
        event.target.classList.add('fa-circle-pause');
        audioElememt.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElememt.currentTime = 0;
        audioElememt.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    })
})

document.getElementById('next').addEventListener('click',function(){
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1;
    }

    audioElememt.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElememt.currentTime = 0;
        audioElememt.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        

})

document.getElementById('previous').addEventListener('click',function(){
    if(songIndex<=0){
        songIndex = 0;
    }

    else{
        songIndex = songIndex - 1;
    }

    audioElememt.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElememt.currentTime = 0;
        audioElememt.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        

})

