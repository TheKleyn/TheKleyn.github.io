let missile = document.getElementById('droplets');

let theMan = document.getElementById('nobanana');



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

    //document.getElementsByClassName('title')[0].innerHTML = 'fuck you';
}

theMan.onclick = missileMover;

//theMan.addEventListener('onclick', )


