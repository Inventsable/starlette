export default function getAppTheme() {
	if (window.__adobe_cep__) {
		const appName = JSON.parse(window.__adobe_cep__.getHostEnvironment())
			.appName;
		if (/AEFT|PPRO|AUDT/i.test(appName)) return "gradient";
		const alpha = JSON.parse(window.__adobe_cep__.getHostEnvironment())
			.appSkinInfo.panelBackgroundColor.color.red;
		if (/FLPR/i.test(appName)) {
			if (window.localStorage.getItem("activeTheme"))
				return window.localStorage.getItem("activeTheme");
			else if (
				alpha > 200 &&
				window
					.getComputedStyle(document.documentElement)
					.getPropertyValue("--color-bg") == "#ffffff"
			)
				return "light";
			else if (alpha > 200) return "lightest";
			else return "darkest";
		} else {
			if (alpha > 220) return "lightest";
			else if (alpha > 150) return "light";
			else if (alpha > 80) return "dark";
			else return "darkest";
		}
	} else {
		return null;
	}
}
