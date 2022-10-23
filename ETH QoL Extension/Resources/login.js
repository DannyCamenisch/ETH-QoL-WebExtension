window.onload = function () {

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function demo() {
		console.log("[ETH QoL] loaded");
		await sleep(500);
		
		// stop execution if there is a quiz, exam or something similar
		if (location.href.includes("quiz") || location.href.includes("feedback") || location.href.includes("test") || location.href.includes("exam") || location.href.includes("prüfung")) return;
		
		// skip login button on myStudies
		if (location.href.includes("https://www.lehrbetrieb.ethz.ch/myStudies/login.view")) {
			console.log('[ETH QoL] skipping login button');
			try { document.querySelectorAll('input[value="Start"]')[0].click(); } catch { }
		}
		
		// skip invalid session
		if (location.href.includes("https://www.lehrbetrieb.ethz.ch/myStudies/studSessionException.view")) {
			console.log("[ETH QoL] skipping invalid session");
			location.href = "https://www.lehrbetrieb.ethz.ch/myStudies/login.view";
		}
		
		// skip login button on Moodle
		if (location.href.includes("https://moodle-app2.let.ethz.ch/auth/shibboleth/login.php")) {
			console.log('[ETH QoL] skipping moodle login button');
			try { document.querySelectorAll('button.btn.btn-primary.btn-block')[0].click(); } catch { }
		}
	}

	demo();
}
