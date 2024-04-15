const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

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


function flipCoin() {
    var coin = document.getElementById('coin');
    console.log('clicked')
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
    }, 100);
  }
