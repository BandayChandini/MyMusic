console.log("Welcome to MyMusic");
//initialize the variables
let songIndex=0;
let audioElement = new Audio('file:///C:/Users/chandini/Desktop/[iSongs.info] 02 - Kadalalle.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Kadalalle", filePath:"file:///C:/Users/chandini/Desktop/[iSongs.info] 02 - Kadalalle.mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover1.jpg"},
    {songName:"Neela-Nilave", filePath:"file:///c:/Users/chandini/Desktop/Neela-Nilave(PaglaSongs).mp3", coverPath:"file:///c:/Users/chandini/Desktop/cover2.jpeg"},
    {songName:"Kaatuka Kanule", filePath:"file:///c:/Users/chandini/Desktop/[iSongs.info] 04 - Kaatuka Kanule.mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover3.jpeg"},
    {songName:"Vadhantune Nenu Vadhantune", filePath:"file:///c:/Users/chandini/Desktop/[iSongs.info] 05 - Vadhantune Nenu Vadhantune.mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover4.jpeg"},
    {songName:"Adire Hrudayam", filePath:"file:///c:/Users/chandini/Desktop/[iSongs.info] 04 - Adire Hrudayam.mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover5.jpeg"},
    {songName:"Shanthi Om Shanthi", filePath:"file:///c:/Users/chandini/Desktop/[iSongs.info] 04 - Shanthi Om Shanthi.mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover6.jpeg"},
    {songName:"Bujjiamma Bujjiamma", filePath:"file:///c:/Users/chandini/Desktop/[iSongs.info] 01 - Bujjiamma Bujjiamma.mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover7.jpeg"},
    {songName:"Nee Neeli Kannullona", filePath:"file:///c:/Users/chandini/Desktop/[iSongs.info] 01 - Nee Neeli Kannullona.mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover8.jpeg"},
    {songName:"Jo-Tum-Na-Ho", filePath:"file:///c:/Users/chandini/Desktop/Jo-Tum-Na-Ho(PaglaSongs).mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover9.png"},
    {songName:"Love-Me-Like-You-Do", filePath:"file:///c:/Users/chandini/Desktop/Love-Me-Like-You-Do(PaglaSongs).mp3", coverPath:"file:///C:/Users/chandini/Desktop/cover10.jpeg"},
]


songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})



//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
    
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay fa-regular fa-circle-play')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target.id);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause'); 
        audioElement.src=`file:///C:/Users/chandini/Desktop/[iSongs.info] 02 - Kadalalle/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`file:///C:/Users/chandini/Desktop/[iSongs.info] 02 - Kadalalle/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`file:///C:/Users/chandini/Desktop/[iSongs.info] 02 - Kadalalle/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`file:///C:/Users/chandini/Desktop/[iSongs.info] 02 - Kadalalle/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
