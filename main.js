/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('manaOrb');
const manaDisplay = document.getElementById('manaDisplay');
let update;
let loop;
let player;
let digits = 3;


function format(x) {
    let power = Math.floor(Math.log10(x))
    let matissa = x / Math.pow(10, power)
    if (power < 6) {
        return x.toFixed(digits);
    } else {
        return matissa.toFixed(digits) + "e" + power;
    }
}

player = {
    manaAmount: 0,
    manaGainPerSec: 0,
    manaPerClick: 1,
};

update = function () {
    manaDisplay.innerHTML = format(player.manaAmount);
    player.manaAmount += (player.manaGainPerSec/30.3030);
};

function draw() {
    var ctx = canvas.getContext('2d')
    var manaOrb_img = new Image()
    manaOrb_img.src = 'img/mana ball.png';
    ctx.drawImage(manaOrb_img,-160,-10,800,400);
}

loop = setInterval(() => {
    update();
    draw();
}, 33);

function begin() {
    draw();
}


function manaClick() {
    player.manaAmount+=player.manaPerClick;
}

function setEventListener() {
    manaOrb.addEventListener('click',manaClick)
}
setEventListener();