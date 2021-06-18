let song1 = document.getElementById("song");
let icon = document.getElementById("change");
let change = document.getElementById("forward");


icon.onclick = function ()
{
if(song1.paused)
{
    song1.play();
    icon.src = "pause.png";
}
else
{
    song1.play();
    icon.src = "play.png";
    song1.pause();
}
}