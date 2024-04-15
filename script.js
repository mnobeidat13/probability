const dice = document.querySelector('#dice1');
const rollBtn = document.querySelector('#roll1');

var min = 1;
var max = 8; // Adjusted max value for slower rotation

rollBtn.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);

  dice.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
  dice.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 180; // Adjusted step size for slower rotation
}

function print(){
    console.log("printed");
}

const dice2 = document.querySelectorAll('.dice2');
const rollBtn2 = document.querySelector('#roll2');

rollBtn2.onclick = function() {
    dice2.forEach(die => {
      const xRand = getRandom(max, min);
      const yRand = getRandom(max, min);

      die.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
      die.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    });
  }

  function getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }


var coin = document.getElementById('coin');
var flip = document.getElementById('flip')
flip.addEventListener('click', () => {
    var flipResult = Math.random();
    coin.classList.remove('heads', 'tails');
    setTimeout(function(){
    if (flipResult <= 0.5) {
        coin.classList.add('heads');
        console.log('It is heads');
    } else {
        coin.classList.add('tails');
        console.log('It is tails');
    }
    }, 50);
})

var coin1 = document.getElementById('coin1');
var coin2 = document.getElementById('coin2');
var flip2 = document.getElementById('flip2');

flip2.addEventListener('click', () => {
    var flipResult1 = Math.random();
    var flipResult2 = Math.random();

    coin1.classList.remove('heads', 'tails');
    coin2.classList.remove('heads', 'tails');

    setTimeout(function(){
        if (flipResult1 <= 0.5) {
            coin1.classList.add('heads');
            console.log('Coin 1 is heads');
        } else {
            coin1.classList.add('tails');
            console.log('Coin 1 is tails');
        }

        if (flipResult2 <= 0.5) {
            coin2.classList.add('heads');
            console.log('Coin 2 is heads');
        } else {
            coin2.classList.add('tails');
            console.log('Coin 2 is tails');
        }
    }, 50);
});
