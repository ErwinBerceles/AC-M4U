let play = document.querySelector('#play');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let track_image = document.querySelector('#track_image');
let currtine = new Date();
let interval = 1000;

let timer;
let autoplay = 0;

let index_no;
let playing_song = false;

let track = document.createElement('audio');

let OST = [
    {
        name: "1 AM - City Folk",
        path: "resources/ost/CityFolk/AM 1.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "2 AM - City Folk",
        path: "resources/ost/CityFolk/AM 2.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "3 AM - City Folk",
        path: "resources/ost/CityFolk/AM 3.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "4 AM - City Folk",
        path: "resources/ost/CityFolk/AM 4.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "5 AM - City Folk",
        path: "resources/ost/CityFolk/AM 5.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "6 AM - City Folk",
        path: "resources/ost/CityFolk/AM 6.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "7 AM - City Folk",
        path: "resources/ost/CityFolk/AM 7.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "8 AM - City Folk",
        path: "resources/ost/CityFolk/AM 8.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "9 AM - City Folk",
        path: "resources/ost/CityFolk/AM 9.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "10 AM - City Folk",
        path: "resources/ost/CityFolk/AM 10.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "11 AM - City Folk",
        path: "resources/ost/CityFolk/AM 11.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "Noon - City Folk",
        path: "resources/ost/CityFolk/Noon.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "1 PM - City Folk",
        path: "resources/ost/CityFolk/PM 1.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "2 PM - City Folk",
        path: "resources/ost/CityFolk/PM 2.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "3 PM - City Folk",
        path: "resources/ost/CityFolk/PM 3.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "4 PM - City Folk",
        path: "resources/ost/CityFolk/PM 4.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "5 PM - City Folk",
        path: "resources/ost/CityFolk/PM 5.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "6 PM - City Folk",
        path: "resources/ost/CityFolk/PM 6.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "7 PM - City Folk",
        path: "resources/ost/CityFolk/PM 7.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "8 PM - City Folk",
        path: "resources/ost/CityFolk/PM 8.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "9 PM - City Folk",
        path: "resources/ost/CityFolk/PM 9.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "10 PM - City Folk",
        path: "resources/ost/CityFolk/PM 10.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "11 PM - City Folk",
        path: "resources/ost/CityFolk/PM 11.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
    },
    {
        name: "Midnight- City Folk",
        path: "resources/ost/CityFolk/Midnight.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: New Town"
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
    track.loop = true;
    track.load();
 }

var fish = 0;

function OnInterval(){
    var newtime = new Date();
    if(currtine.getHours() != newtime.getHours()){
        fish = newtime.getHours();
        load_track(fish - 1);
        track.play();
    }
    //fish++;
    //fish%=24;
    //load_track(fish)
    
    currtine = newtime;
}


function clickPlay(){
    var today = new Date();
    var h = today.getHours();
    if(playing_song === false){       
        load_track(h-1);
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

function pauseSong(){
    track.pause();
    playing_song= false;
    play.innerHTML = '<i class="fa fa-play"></i>'
    
}

function volumeChange(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

function muteSound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

setInterval(OnInterval,interval)