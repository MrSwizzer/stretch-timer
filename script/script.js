let timer;
let seconds = 10;
let isStretching = false;
let round = 1;
let isMuted = false;

function playSound1() {
	if (!isMuted) {
		let audio = document.getElementById('sound1');
		audio.play();
	}
}

function playSound2() {
	if (!isMuted) {
		let audio = document.getElementById('sound2');
		audio.play();
	}
}

function startTimer() {
	if (!isStretching) {
		isStretching = true;
		timer = setInterval(function () {
			document.getElementById('countdown').innerText = 'Countdown: ' + seconds + ' Sekunden';

			if (seconds > 0) {
				seconds--;
			} else {
				if (round % 2 !== 0) {
					playSound1();
					seconds = 30;
				} else {
					playSound2();
					seconds = 10;
				}
				round++;
			}
		}, 1000);
	}
}

function stopTimer() {
	clearInterval(timer);
	isStretching = false;
	seconds = 10;
	round = 1;
	document.getElementById('countdown').innerText = 'Stretching beendet!';
	timer = null;
}

function toggleMute() {
	isMuted = !isMuted;
	let muteButton = document.getElementById('muteButton');
	muteButton.innerText = isMuted ? 'Unmute Notifications' : 'Mute Notifications';
}
