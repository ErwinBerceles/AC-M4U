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

function playMusic(){
 var OST = [
    {
        name: "2 PM - City Folk",
        path: "resources/ost/CityFolk2PM.mp3"
    },
    {
        name: "9 PM - New Horizon",
        path: "resources/ost/NewHorizons9PM.mp3"
    }
]
 }