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

let OST_one = [
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

let OST_two = [
    {
        name: "1 AM",
        path: "resources/ost/CityFolk/AM 1.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "2 AM",
        path: "resources/ost/CityFolk/AM 2.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "3 AM",
        path: "resources/ost/CityFolk/AM 3.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "4 AM",
        path: "resources/ost/CityFolk/AM 4.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "5 AM",
        path: "resources/ost/CityFolk/AM 5.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "6 AM",
        path: "resources/ost/CityFolk/AM 6.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    { 
        name: "7 AM",
        path: "resources/ost/CityFolk/AM 7.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "8 AM",
        path: "resources/ost/CityFolk/AM 8.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "9 AM",
        path: "resources/ost/CityFolk/AM 9.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "10 AM",
        path: "resources/ost/CityFolk/AM 10.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "11 AM",
        path: "resources/ost/CityFolk/AM 11.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {   
        name: "Noon",
        path: "resources/ost/CityFolk/Noon.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "1 PM",
        path: "resources/ost/CityFolk/PM 1.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "2 PM",
        path: "resources/ost/CityFolk/PM 2.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "3 PM",
        path: "resources/ost/CityFolk/PM 3.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "4 PM",
        path: "resources/ost/CityFolk/PM 4.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "5 PM",
        path: "resources/ost/CityFolk/PM 5.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "6 PM",
        path: "resources/ost/CityFolk/PM 6.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "7 PM",
        path: "resources/ost/CityFolk/PM 7.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "8 PM",
        path: "resources/ost/CityFolk/PM 8.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "9 PM",
        path: "resources/ost/CityFolk/PM 9.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "10 PM",
        path: "resources/ost/CityFolk/PM 10.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "11 PM",
        path: "resources/ost/CityFolk/PM 11.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    },
    {
        name: "Midnight",
        path: "resources/ost/CityFolk/Midnight.mp3",
        img: "resources/img/CityFolk.png",
        artist: "Animal Crossing: City Folk"
    }    
]

let OST_three = [
    {
        name: "1 AM",
        path: "resources/ost/NewLeaf/AM 1.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "2 AM",
        path: "resources/ost/NewLeaf/AM 2.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "3 AM",
        path: "resources/ost/NewLeaf/AM 3.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "4 AM",
        path: "resources/ost/NewLeaf/AM 4.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "5 AM",
        path: "resources/ost/NewLeaf/AM 5.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "6 AM",
        path: "resources/ost/NewLeaf/AM 6.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "7 AM",
        path: "resources/ost/NewLeaf/AM 7.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "8 AM",
        path: "resources/ost/NewLeaf/AM 8.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "9 AM",
        path: "resources/ost/NewLeaf/AM 9.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "10 AM",
        path: "resources/ost/NewLeaf/AM 10.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "11 AM",
        path: "resources/ost/NewLeaf/AM 11.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "Noon",
        path: "resources/ost/NewLeaf/Noon.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "1 PM",
        path: "resources/ost/NewLeaf/PM 1.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "2 PM",
        path: "resources/ost/NewLeaf/PM 2.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "3 PM",
        path: "resources/ost/NewLeaf/PM 3.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "4 PM",
        path: "resources/ost/NewLeaf/PM 4.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "5 PM",
        path: "resources/ost/NewLeaf/PM 5.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "6 PM",
        path: "resources/ost/NewLeaf/PM 6.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "7 PM",
        path: "resources/ost/NewLeaf/PM 7.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "8 PM",
        path: "resources/ost/NewLeaf/PM 8.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "9 PM",
        path: "resources/ost/NewLeaf/PM 9.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "10 PM",
        path: "resources/ost/NewLeaf/PM 10.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "11 PM",
        path: "resources/ost/NewLeaf/PM 11.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    },{
        name: "Midnight",
        path: "resources/ost/NewLeaf/Midnight.mp3",
        img: "resources/img/NewLeaf.png",
        artist: "Animal Crossing: New Leaf"
    }
 ]

let OST_four = [
    {
        name: "1 AM",
        path: "resources/ost/NewHorizon/AM 1.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "2 AM",
        path: "resources/ost/NewHorizon/AM 2.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "3 AM",
        path: "resources/ost/NewHorizon/AM 3.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "4 AM",
        path: "resources/ost/NewHorizon/AM 4.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "5 AM",
        path: "resources/ost/NewHorizon/AM 5.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "6 AM",
        path: "resources/ost/NewHorizon/AM 6.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "7 AM",
        path: "resources/ost/NewHorizon/AM 7.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "8 AM",
        path: "resources/ost/NewHorizon/AM 8.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "9 AM",
        path: "resources/ost/NewHorizon/AM 9.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "10 AM",
        path: "resources/ost/NewHorizon/AM 10.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "11 AM",
        path: "resources/ost/NewHorizon/AM 11.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "Noon",
        path: "resources/ost/NewHorizon/Noon.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "1 PM",
        path: "resources/ost/NewHorizon/PM 1.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "2 PM",
        path: "resources/ost/NewHorizon/PM 2.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "3 PM",
        path: "resources/ost/NewHorizon/PM 3.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "4 PM",
        path: "resources/ost/NewHorizon/PM 4.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "5 PM",
        path: "resources/ost/NewHorizon/PM 5.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "6 PM",
        path: "resources/ost/NewHorizon/PM 6.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "7 PM",
        path: "resources/ost/NewHorizon/PM 7.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "8 PM",
        path: "resources/ost/NewHorizon/PM 8.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "9 PM",
        path: "resources/ost/NewHorizon/PM 9.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "10 PM",
        path: "resources/ost/NewHorizon/PM 10.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "11 PM",
        path: "resources/ost/NewHorizon/PM 11.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },{
        name: "Midnight",
        path: "resources/ost/NewHorizon/Midnight.mp3",
        img: "resources/img/NewHorizons.png",
        artist: "Animal Crossing: New Horizons"
    },
];

let choice = OST_one //Pre set to First Animal Crossing
var testNumber = 0;
var ostSelected;

/////////////////////////////////////

function startTime() {              //Code to set up and display the clock
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s ;

    var t = setTimeout(startTime,1000);
}
function checkTime(i) {             // Adds zero at the end
    if ( i < 10 ) { i = "0" + i}
    return i;
}

function onClickChange(clickId){    // Changes which game OST you want to listen you
    var newtime = new Date();
    var choiceHold = clickId;
    testNumber = newtime.getHours();    
    load_track(choiceHold, testNumber-1);
    play.innerHTML = '<i class = "fa fa-play"></i>';
    pauseSong();
    choice = choiceHold;
}

function load_track(x, index_no){   // Loads up the song based on the Game Selection and hour of the day
    var ostSelected = x;
    track.src = ostSelected[index_no].path;
    title.innerHTML = ostSelected[index_no].name;
    artist.innerHTML = ostSelected[index_no].artist;
    track_image.src = ostSelected[index_no].img;
    track.loop = true;
    track.load();
    choice = ostSelected;
 }

function OnInterval(){              // Every second, this code will check if a song is currently playing, check to see if the hour has changed then change the song accordingly
    if (playing_song === true){    
        var ostPlacehold;
        ostPlacehold = choice;
        var newtime = new Date();
        if(currtine.getHours() != newtime.getHours()){
            var testNumber = newtime.getHours();
            load_track(ostPlacehold, testNumber - 1);
            track.play();
            }
        choice = ostPlacehold;
        currtine = newtime;
    }
}
    //- Testing Code -
    // testNumber++;
    // testNumber%=24;
    // console.log(ostPlacehold, testNumber);
    // load_track(ostPlacehold, testNumber);

function clickPlay(){               // On Click function for the play button, Simply Loads the song and either pauses it or plays it
    var today = new Date();
    var h = today.getHours();
    var ostPlacehold = choice;
    if(playing_song === false){       
        load_track(ostPlacehold, h-1);
        playSong();
    }else{
         pauseSong();       
        }
    }

function playSong(){                // Code to play a song and change the symbol in the play button
    track.play();
    playing_song = true;
    play.innerHTML = '<i class = "fa fa-pause"></i>'
}

function pauseSong(){               // Code to pause a song and change the symbol in the play button
    track.pause();
    playing_song= false;
    play.innerHTML = '<i class="fa fa-play"></i>'
    
}

function volumeChange(){            // Code that allows the change of volume
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

function muteSound(){               // An on click function that will mute the volume
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
} 

setInterval(OnInterval,interval);   // Constantly Checks every second