window.onload = function () {

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function demo() {
		console.log("ETH QoL loaded");
		await sleep(500);

		// skip login button on myStudies
		if (location.href.includes("https://www.lehrbetrieb.ethz.ch/myStudies/login.view")) {
			console.log('skipping useless button');
			try { document.querySelectorAll('input[value="Start"]')[0].click(); } catch { }
		}
		
		// skip login button on Moodle
		if (location.href.includes("https://moodle-app2.let.ethz.ch/auth/shibboleth/login.php")) {
			console.log('skipping useless moodle login button');
			try { document.querySelectorAll('button.btn.btn-primary.btn-block')[0].click(); } catch { }
		}
	}

	demo();
}
