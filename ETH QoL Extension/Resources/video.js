window.onload = function () {

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function demo() {
		console.log("[ETH QoL] loaded");
		await sleep(500);
	
		// replace video player
		if (location.href.includes("https://video.ethz.ch/lectures/")) {
			try {
				console.log("[ETH QoL] trying to replace video player")
				
				// get url of highest resolution video
				var video_url = document.querySelectorAll('div>ul>li.video>a')[0].href
				
				// create the video player we want to inject
				var video_player = "<video width='100%' height='400px' controls>"
				video_player += "<source src='" + video_url + "' type='video/mp4'>";
				video_player += "</video>";
				
				// replace the iframe containing the video player by our new video player
				document.querySelectorAll('iframe').forEach(
					function(elem){
						var parent = elem.parentNode;
						parent.removeChild(elem);
						parent.innerHTML = video_player;
				});
			} catch {
				console.log("[ETH QoL] could not replace video player")
			}
		}
	}

	demo();
}
