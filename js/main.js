var startY = 0;
let textArea = document.getElementById("textArea");
let strechyIncrease = document.getElementById("strechyIncrease");
let startHeight = 0;
let lastMove = 0;
let startUp = 0;
window.onload = function() {
	startHeight = strechyIncrease.offsetHeight;
	document.addEventListener('touchstart', function(e) {
		startY = e.touches[0].screenY;
	});

	document.addEventListener('touchmove', function(e) {
		var amountMovedY = e.touches[0].screenY - startY;
		if (amountMovedY > 0) {
			//console.log(amountMovedY);
			let amountStretch = Math.ceil(amountMovedY / 4);
			if (amountStretch > 150) {
				amountStretch = 150;
			}
			textArea.style.top = amountStretch + "px";
			strechyIncrease.style.height = parseInt(startHeight + Math.ceil(amountStretch)) + "px";
		}
	});

	document.addEventListener('touchend', function(e) {
		let amStretch = parseInt(textArea.style.top.replace("px"));
		let currentSH = parseInt(strechyIncrease.style.height.replace("px"));
		let t = 4;
		let amt = amStretch / t;
		let ams = (currentSH - startHeight) / t;
		//startHeight;
		let inter = setInterval(() => {
			if (currentSH > startHeight) {
				strechyIncrease.style.height = currentSH + "px";
			} else {
				strechyIncrease.style.height = startHeight + "px";
				clearInterval(inter);
			}
			currentSH = Math.ceil(currentSH - ams);
		}, 16); //60fps
		let inter2 = setInterval(() => {
			if (amStretch > 0) {
				textArea.style.top = amStretch + "px";
			} else {
				textArea.style.top = "0px";
				clearInterval(inter2);
			}
			amStretch = Math.ceil(amStretch - amt);
		}, 16); //60fps
	});

}
