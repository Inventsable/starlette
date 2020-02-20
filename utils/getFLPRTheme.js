import rgbToHex from "./rgbToHex";

export default function getFLPRTheme(asArray = false) {
	let result;
	let bg = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo
		.panelBackgroundColor.color;
	let isActive = window.localStorage.getItem("starletteActive");
	let lastTheme = window.localStorage.getItem("activeTheme");
	let currentBG = window
		.getComputedStyle(document.documentElement)
		.getPropertyValue("--color-bg");
	isActive = isActive ? JSON.parse(isActive) : null;

	const alpha = JSON.parse(window.__adobe_cep__.getHostEnvironment())
		.appSkinInfo.panelBackgroundColor.color;

	let target = [alpha.red, alpha.green, alpha.blue].map(col => {
		return col - 35;
	});
	const hex = rgbToHex(target);
	const isDark = bg.red < 200;

	let palette = {
		darkest: {
			hex: "#1e1e1e",
			value: asArray ? [30, 30, 30] : "darkest"
		},
		dark: {
			hex: "#323232",
			value: asArray ? [50, 50, 50] : "dark"
		},
		light: {
			hex: "#f5f5f5",
			value: asArray ? [245, 245, 245] : "light"
		},
		lightest: {
			hex: "#ffffff",
			value: asArray ? [255, 255, 255] : "lightest"
		}
	};

	let thisTheme = null;
	if (currentBG == hex && isDark) {
		thisTheme =
			currentBG == "#1e1e1e" || currentBG == "#1f1f1f"
				? "darkest"
				: "dark";
		result = palette[thisTheme].value;
	} else if (currentBG == hex && !isDark) {
		thisTheme = currentBG == "#ffffff" ? "lightest" : "light";
		result = palette[thisTheme].value;
	} else {
		if ((lastTheme == "dark" || lastTheme == "light") && !isActive)
			result = bg.red > 200 ? palette.light.value : palette.dark.value;
		else
			result =
				bg.red > 200 ? palette.lightest.value : palette.darkest.value;
		// else result = bg.red > 200 ? 'lightest' : 'darkest';
	}

	return result;
}
