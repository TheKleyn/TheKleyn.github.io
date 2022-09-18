let missile = document.getElementById('droplets')



let missileMover = function (object) {
    object.target.style.removeProperty('right');
    object.target.style.left = '120px';
    object.target.style.visibility = 'visible';
}

