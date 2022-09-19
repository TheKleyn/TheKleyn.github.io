let missile = document.getElementById('droplets');

let theMan = document.getElementById('nobanana');

let laugh = new Audio('./Media/laughter.mp3')

const missileMover = function () {
    /*object.target.style.removeProperty('right');
    object.target.style.left = '120px';*/
    missile.style.visibility = 'visible';
    //missile.style.left = '70px';
    //missile.style.transform = 'rotate(-70deg)';
    //missile.style.top = '390px';
    document.getElementById('nobanana').style.display = 'none';
    document.getElementById('yesbanana').style.display = 'inline';
    //document.getElementsByTagName('h2').style.visibility = 'visible';
    missile.className = "animateDroplets";
    laugh.play();


    //document.getElementsByClassName('title')[0].innerHTML = 'fuck you';
}

theMan.onclick = missileMover;

const thumbsup = function () {
    document.getElementById('response').innerHTML = 'Thanks, let me grab you by the pussy...';
    document.getElementById('response').style.visibility = 'visible';
}
const thumbsdown = function () {
     document.getElementById('response').innerHTML = 'Suck my old cock...';
     document.getElementById('response').style.visibility = 'visible';
}

document.getElementById('thumbsup').onclick = thumbsup;
document.getElementById('thumbsdown').onclick = thumbsdown;



//theMan.addEventListener('onclick', )


