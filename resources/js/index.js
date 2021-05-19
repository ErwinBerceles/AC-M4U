let play = document.querySelector('#play');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let track_image = document.querySelector('#track_image');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let OST = [
    {
        name: "2 PM - City Folk",
        path: "resources/ost/CityFolk2PM.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "9 PM - New Horizon",
        path: "resources/ost/NewHorizons9PM.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    }
]

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s ;
    var t = setTimeout(startTime,1000);
}
function checkTime(i) {
    if ( i < 10 ) { i = "0" + i}
    return i;
    
}

function load_track(index_no){
    track.src = OST[index_no].path;
    title.innerHTML = OST[index_no].name;
    artist.innerHTML = OST[index_no].artist;
    track_image.src = OST[index_no].img;
    track.load();
 }
load_track(index_no);

function justPlay(){
    if(playing_song == false){
        playSong();
    }else{
         pauseSong();       
        }
    }

function playSong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class = "fa fa-pause"></i>'
}