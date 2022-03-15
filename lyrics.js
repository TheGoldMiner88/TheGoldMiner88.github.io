var lyrics = `[00:00.00]Lolcina
[00:01.00]Lolcina 2
[00:03.00]Lolcina 3
[00:05.00]Lolcina 4
[00:07.00]Lolcina 5
[00:12.00]Lolcina 6
[00:22.00]Lolcina 7
[00:32.00]Lolcina 8
[00:53.00]Lolcina 9
[01:02.00]Lolcina 10
[02:02.00]Lolcina 11
[03:02.00]Lolcina 12
[04:02.00]Lolcina 13`;

    var lrc = new Lyricer({"showLines": 0, "clickable": false});
    lrc.setLrc(lyrics);
    window.addEventListener("lyricerclick", function(e){
        // console.log('clicked on ' + e.detail.time);
    });
    
    var timeOffset = 0;
    
    var audio = document.getElementById('audio');
    audio.addEventListener( "timeupdate", function() {
        lrc.move(audio.currentTime + timeOffset);
    });
    
    window.addEventListener('lyricerclick', function(e){
        if (e.detail.time > 0) {
            audio.currentTime = e.detail.time;
        }
});