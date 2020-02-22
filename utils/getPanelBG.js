import getAppName from "./getAppName";
import rgbToHex from "./rgbToHex";
import getFLPRTheme from "./getFLPRTheme";

export default function getPanelBG() {
	if (window.__adobe_cep__) {
		let result;
		if (!/FLPR/.test(getAppName())) {
			result = getRGBArray(
				JSON.parse(window.__adobe_cep__.getHostEnvironment())
					.appSkinInfo.panelBackgroundColor.color
			);
		} else {
			// result = getFLPRTheme(true);

			let bg = JSON.parse(window.__adobe_cep__.getHostEnvironment())
				.appSkinInfo.panelBackgroundColor.color.red;
			let lastTheme = window.localStorage.getItem("activeTheme");
			let isDark = bg < 200;
			const data = {
				darkest: [34, 34, 34],
				dark: [54, 54, 54],
				light: [245, 245, 245],
				lightest: [255, 255, 255]
			};
			return data[lastTheme];

			// let currentBG = window
			// 	.getComputedStyle(document.documentElement)
			// 	.getPropertyValue("--color-bg");
			// isActive = isActive ? JSON.parse(isActive) : null;

			// const alpha = JSON.parse(window.__adobe_cep__.getHostEnvironment())
			// 	.appSkinInfo.panelBackgroundColor.color;

			// let target = [alpha.red, alpha.green, alpha.blue].map(col => {
			// 	return col - 35;
			// });

			// let lightTarget = [alpha.red, alpha.green, alpha.blue].map(col => {
			// 	return 255;
			// });
			// const hex = rgbToHex(target);
			// const lightHex = rgbToHex(lightTarget);

			// const isDark = bg.red < 200;

			// if (currentBG == hex && isDark) {
			// 	console.log("Attempt smart switch");
			// 	result = currentBG == "#1e1e1e" ? [54, 54, 54] : [34, 34, 34];
			// 	/*
			// 		UNCOMMENT FOR AUTOSWITCH

			// 	*/
			// 	//  else if (
			// 	// 	hex == "#afafaf" &&
			// 	// 	!isDark &&
			// 	// 	(currentBG == "#ffffff" || currentBG == "#f5f5f5")
			// 	// ) {
			// 	// 	console.log("MATCHING LIGHT", currentBG);
			// 	// 	result =
			// 	// 		currentBG == "#afafaf" ? [245, 245, 245] : [255, 255, 255];
			// 	// 	console.log(currentBG);
			// 	// 	if (currentBG == "#ffffff")
			// 	// 		document.documentElement.style.setProperty(
			// 	// 			`--color-bg`,
			// 	// 			"#f5f5f5"
			// 	// 		);
			// } else {
			// 	if ((lastTheme == "dark" || lastTheme == "light") && !isActive)
			// 		result = bg.red > 200 ? [245, 245, 245] : [54, 54, 54];
			// 	else result = bg.red > 200 ? [255, 255, 255] : [34, 34, 34];
			// }
		}

		return result;
	} else {
		console.log("Panelify has null results");
		return null;
	}
	function getRGBArray(color) {
		if (/AEFT|PPRO|AUDT/i.test(getAppName()))
			return [color.red + 1, color.green + 1, color.blue + 1];
		else return [color.red, color.green, color.blue];
	}
}
