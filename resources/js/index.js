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

var OST_one = [
    {
        name: "1 AM",
        path: "resources/ost/GameCube/AM 1.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "2 AM",
        path: "resources/ost/GameCube/AM 2.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "3 AM",
        path: "resources/ost/GameCube/AM 3.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "4 AM",
        path: "resources/ost/GameCube/AM 4.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "5 AM",
        path: "resources/ost/GameCube/AM 5.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "6 AM",
        path: "resources/ost/GameCube/AM 6.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "7 AM",
        path: "resources/ost/GameCube/AM 7.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "8 AM",
        path: "resources/ost/GameCube/AM 8.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "9 AM",
        path: "resources/ost/GameCube/AM 9.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "10 AM",
        path: "resources/ost/GameCube/AM 10.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "11 AM",
        path: "resources/ost/GameCube/AM 11.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "Noon",
        path: "resources/ost/GameCube/Noon.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "1 PM",
        path: "resources/ost/GameCube/PM 1.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "2 PM",
        path: "resources/ost/GameCube/PM 2.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "3 PM",
        path: "resources/ost/GameCube/PM 3.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "4 PM",
        path: "resources/ost/GameCube/PM 4.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "5 PM",
        path: "resources/ost/GameCube/PM 5.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "6 PM",
        path: "resources/ost/GameCube/PM 6.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "7 PM",
        path: "resources/ost/GameCube/PM 7.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "8 PM",
        path: "resources/ost/GameCube/PM 8.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "9 PM",
        path: "resources/ost/GameCube/PM 9.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "10 PM",
        path: "resources/ost/GameCube/PM 10.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "11 PM",
        path: "resources/ost/GameCube/PM 11.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },{
        name: "Midnight",
        path: "resources/ost/GameCube/Midnight.mp3",
        img: "resources/img/GameCube.png",
        artist: "Animal Crossing"
    },
]

var OST_two = [
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
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "9 AM - City Folk",
        path: "resources/ost/CityFolk/AM 9.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "10 AM - City Folk",
        path: "resources/ost/CityFolk/AM 10.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "11 AM - City Folk",
        path: "resources/ost/CityFolk/AM 11.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {   
        name: "Noon - City Folk",
        path: "resources/ost/CityFolk/Noon.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "1 PM - City Folk",
        path: "resources/ost/CityFolk/PM 1.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "2 PM - City Folk",
        path: "resources/ost/CityFolk/PM 2.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "3 PM - City Folk",
        path: "resources/ost/CityFolk/PM 3.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "4 PM - City Folk",
        path: "resources/ost/CityFolk/PM 4.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "5 PM - City Folk",
        path: "resources/ost/CityFolk/PM 5.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "6 PM - City Folk",
        path: "resources/ost/CityFolk/PM 6.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "7 PM - City Folk",
        path: "resources/ost/CityFolk/PM 7.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "8 PM - City Folk",
        path: "resources/ost/CityFolk/PM 8.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "9 PM - City Folk",
        path: "resources/ost/CityFolk/PM 9.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "10 PM - City Folk",
        path: "resources/ost/CityFolk/PM 10.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "11 PM - City Folk",
        path: "resources/ost/CityFolk/PM 11.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "Midnight - City Folk",
        path: "resources/ost/CityFolk/Midnight.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    }    
]

var OST_three = [
    {
        name: "1 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 1.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "2 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 2.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "3 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 3.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "4 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 4.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "5 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 5.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "6 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 6.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "7 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 7.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "8 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 8.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "9 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 9.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "10 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 10.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "11 AM - New Leaf",
        path: "resources/ost/NewLeaf/AM 11.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "Noon- New Leaf",
        path: "resources/ost/NewLeaf/Noon.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "1 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 1.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "2 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 2.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "3 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 3.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "4 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 4.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "5 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 5.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "6 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 6.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "7 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 7.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "8 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 8.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "9 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 9.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "10 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 10.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "11 PM - New Leaf",
        path: "resources/ost/NewLeaf/PM 11.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "Midnight - New Leaf",
        path: "resources/ost/NewLeaf/Midnight.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    }
 ]

var OST_four = [
    {
        name: "1 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 1.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "2 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 2.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "3 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 3.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "4 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 4.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "5 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 5.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "6 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 6.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "7 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 7.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "8 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 8.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "9 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 9.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "10 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 10.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "11 AM - New Horizons",
        path: "resources/ost/NewHorizon/AM 11.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "Noon - New Horizons",
        path: "resources/ost/NewHorizon/Noon.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "1 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 1.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "2 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 2.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "3 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 3.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "4 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 4.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "5 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 5.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "6 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 6.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "7 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 7.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "8 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 8.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "9 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 9.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "10 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 10.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "11 PM - New Horizons",
        path: "resources/ost/NewHorizon/PM 11.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "Midnight - New Horizons",
        path: "resources/ost/NewHorizon/Midnight.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },
];
var choice = OST_one;
var fish = 0;


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

function onClickChange(clickId){
    var newtime = new Date();
    var choiceHold = clickId;
    fish = newtime.getMinutes();
    fish %=20
    
    load_track(choiceHold, fish-1);
    play.innerHTML = '<i class = "fa fa-play"></i>';
    pauseSong();
    choice = choiceHold;
}

function load_track(choice, index_no){
    var cat;
    cat = choice;
    track.src = cat[index_no].path;
    title.innerHTML = cat[index_no].name;
    artist.innerHTML = cat[index_no].artist;
    track_image.src = cat[index_no].img;
    track.loop = true;
    track.load();
    choice = cat;
 }



function OnInterval(choice){
    var cat;
    cat = choice;
    var newtime = new Date();
    console.log("Function ran");
    if(currtine.getMinutes() != newtime.getMinutes()){
        console.log("Checked");
        var fish = newtime.getMinutes();
         fish %=20;
        load_track(cat, fish - 1);
        track.play();
    }
    console.log("check failed");
    //fish++;
    //fish%=24;
    //load_track(fish)
    choice = cat;
    currtine = newtime;
}


function clickPlay(){
    var today = new Date();
    var h = today.getMinutes();
    var fish = choice;
    h %=20;
    if(playing_song === false){       
        load_track(fish, h-1);
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

setInterval(console.log("you suck"),interval);