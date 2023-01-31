'use strict'

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Balls = function () {
  function Balls(context, buffer) {
    _classCallCheck(this, Balls);

    this.context = context;
    this.buffer = buffer;
  }

  _createClass(Balls, [{
    key: 'setup',
    value: function setup() {
      this.gainNode = this.context.createGain();
      this.source = this.context.createBufferSource();
      this.source.buffer = this.buffer;
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
    }
  }, {
    key: 'play',
    value: function play() {
      this.setup();
      this.source.start(this.context.currentTime);
    }
  }, {
    key: 'stop',
    value: function stop() {
      var ct = this.context.currentTime + 1;
      this.gainNode.gain.exponentialRampToValueAtTime(.1, ct);
      this.source.stop(ct);
    }
  }]);

  return Balls;
}();




var balls = null,
    preset = 0,
    _loaded = false;



function playBalls() {
  var index = parseInt(this.dataset.note) + preset;
}




var buttons = document.querySelectorAll('.b-ball_bounce');
buttons.forEach(function (button) {
  button.addEventListener('mouseenter', playBalls.bind(button));
});

function ballBounce(e) {
  var i = e;
  if (e.className.indexOf(" bounce") > -1) {
    return;
  }
  toggleBounce(i);
}

function toggleBounce(i) {
  i.classList.add("bounce");
  function n() {
    i.classList.remove("bounce");
    i.classList.add("bounce1");
    function o() {
      i.classList.remove("bounce1");
      i.classList.add("bounce2");
      function p() {
        i.classList.remove("bounce2");
        i.classList.add("bounce3");
        function q() {
          i.classList.remove("bounce3");
        }
        setTimeout(q, 300);
      }
      setTimeout(p, 300);
    }
    setTimeout(o, 300);
  }
  setTimeout(n, 300);
}

var array1 = document.querySelectorAll('.b-ball_bounce');
var array2 = document.querySelectorAll('.b-ball_bounce .b-ball__right');

for (var i = 0; i < array1.length; i++) {
  array1[i].addEventListener('mouseenter', function () {
    ballBounce(this);
  });
}

for (var i = 0; i < array2.length; i++) {
  array2[i].addEventListener('mouseenter', function () {
    ballBounce(this);
  });
}

var l = ["49", "50", "51", "52", "53", "54", "55", "56", "57", "48", "189", "187", "81", "87", "69", "82", "84", "89", "85", "73", "79", "80", "219", "221", "65", "83", "68", "70", "71", "72", "74", "75", "76", "186", "222", "220"];
var k = ["90", "88", "67", "86", "66", "78", "77", "188", "190", "191"];
var a = {};
for (var e = 0, c = l.length; e < c; e++) {
  a[l[e]] = e;
}
for (var _e = 0, _c = k.length; _e < _c; _e++) {
  a[k[_e]] = _e;
}


