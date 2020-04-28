import getAppTheme from "./utils/getAppTheme";
import getAppName from "./utils/getAppName";
import getPanelBG from "./utils/getPanelBG";
import getColorFromDeltaOffset from "./utils/getColorFromDeltaOffset";
import getFLPRTheme from "./utils/getFLPRTheme";

import FLPRdarkest from "./stylesheets/FLPR/darkest.json";
import FLPRdark from "./stylesheets/FLPR/dark.json";
import FLPRlight from "./stylesheets/FLPR/light.json";
import FLPRlightest from "./stylesheets/FLPR/lightest.json";
import ILSTdarkest from "./stylesheets/ILST/darkest.json";
import ILSTdark from "./stylesheets/ILST/dark.json";
import ILSTlight from "./stylesheets/ILST/light.json";
import ILSTlightest from "./stylesheets/ILST/lightest.json";
import PHXSdarkest from "./stylesheets/PHXS/darkest.json";
import PHXSdark from "./stylesheets/PHXS/dark.json";
import PHXSlight from "./stylesheets/PHXS/light.json";
import PHXSlightest from "./stylesheets/PHXS/lightest.json";
import IDSNdarkest from "./stylesheets/IDSN/darkest.json";
import IDSNdark from "./stylesheets/IDSN/dark.json";
import IDSNlight from "./stylesheets/IDSN/light.json";
import IDSNlightest from "./stylesheets/IDSN/lightest.json";
import AEFTgradient from "./stylesheets/AEFT/gradient.json";
import PPROgradient from "./stylesheets/PPRO/gradient.json";
import AUDTgradient from "./stylesheets/AUDT/gradient.json";

let themes = {};
let starlette;
export default starlette = {
	currentTheme: [],
	loadThemes() {
		themes["FLPRdarkest"] = FLPRdarkest;
		themes["FLPRdark"] = FLPRdark;
		themes["FLPRlight"] = FLPRlight;
		themes["FLPRlightest"] = FLPRlightest;
		themes["ILSTdarkest"] = ILSTdarkest;
		themes["ILSTdark"] = ILSTdark;
		themes["ILSTlight"] = ILSTlight;
		themes["ILSTlightest"] = ILSTlightest;
		themes["AEFTgradient"] = AEFTgradient;
		themes["PHXSdarkest"] = PHXSdarkest;
		themes["PHXSdark"] = PHXSdark;
		themes["PHXSlight"] = PHXSlight;
		themes["PHXSlightest"] = PHXSlightest;
		themes["PPROgradient"] = PPROgradient;
		themes["IDSNdarkest"] = IDSNdarkest;
		themes["IDSNdark"] = IDSNdark;
		themes["IDSNlight"] = IDSNlight;
		themes["IDSNlightest"] = IDSNlightest;
		themes["AUDTgradient"] = AUDTgradient;
	},
	getColorAs(name, appName, theme = null, gradientvalue = null) {
		if (!themes["ILSTdarkest"]) this.loadThemes();
		let currentTheme, panelBG;
		if (/ILST|IDSN|PHXS/i.test(appName)) {
			currentTheme = themes[appName + theme];
			if (/darkest/i.test(theme)) panelBG = [50, 50, 50];
			else if (/dark$/i.test(theme)) panelBG = [83, 83, 83];
			else if (/light$/i.test(theme)) panelBG = [184, 184, 184];
			else if (/lightest/i.test(theme)) panelBG = [240, 240, 240];
		} else if (/FLPR/i.test(appName)) {
			currentTheme = themes[appName + theme];
			if (/darkest/i.test(theme)) panelBG = [30, 30, 30];
			else if (/dark$/i.test(theme)) panelBG = [50, 50, 50];
			else if (/light$/i.test(theme)) panelBG = [245, 245, 245];
			else panelBG = [255, 255, 255];
		} else {
			currentTheme = themes[appName + "gradient"];
			if (gradientvalue) {
				gradientvalue = gradientvalue < 0 ? 0 : gradientvalue;
				gradientvalue = gradientvalue > 100 ? 100 : gradientvalue;
			}
			panelBG =
				!gradientvalue || gradientvalue == 0
					? [35, 35, 35]
					: [
						Math.floor((gradientvalue / 100) * 48 + 35),
						Math.floor((gradientvalue / 100) * 48 + 35),
						Math.floor((gradientvalue / 100) * 48 + 35)
					];
		}
		return getValue(
			currentTheme.find(item => {
				return item.title == name;
			}),
			panelBG
		);
	},
	parseTheme(str) {
		str = str.data || str;
		let panelBG, gradientvalue, theme;
		if (/ILST|IDSN|PHXS/i.test(str)) {
			theme = str.replace(/^(ILST|IDSN|PHXS)/, "");
			if (/darkest/i.test(theme)) panelBG = [50, 50, 50];
			else if (/dark/i.test(theme)) panelBG = [83, 83, 83];
			else if (/lightest/i.test(theme)) panelBG = [240, 240, 240];
			else if (/light/i.test(theme)) panelBG = [184, 184, 184];
		} else if (/FLPR/i.test(str)) {
			theme = str.replace(/^(FLPR)/, "");
			if (/darkest/i.test(theme)) panelBG = [34, 34, 34];
			else if (/dark/i.test(theme)) panelBG = [54, 54, 54];
			else if (/lightest/i.test(theme)) panelBG = [255, 255, 255];
			else if (/light/i.test(theme)) panelBG = [245, 245, 245];
		} else {
			try {
				gradientvalue = +str.split(";")[1] || 0;
			} catch (err) {
				gradientvalue = 0;
			}
			panelBG =
				!gradientvalue || gradientvalue == 0
					? [35, 35, 35]
					: [
						Math.floor((gradientvalue / 100) * 48 + 35),
						Math.floor((gradientvalue / 100) * 48 + 35),
						Math.floor((gradientvalue / 100) * 48 + 35)
					];
		}
		let currentTheme;
		if (/ILST|IDSN|PHXS|FLPR/i.test(str)) {
			currentTheme = themes[theme];
		} else {
			if (/;/.test(str))
				currentTheme = themes[str.split(";")[0] + "gradient"];
			else currentTheme = themes["AEFTgradient"];
		}
		currentTheme.forEach(cssVar => {
			setCSS(cssVar.title, getValue(cssVar, panelBG));
		});
	},
	updateFakeTheme(appName, theme, val) {
		val = val ? (val > 100 ? 100 : val < 0 ? 0 : val) : 0;
		let panelBG =
			!val || val == 0
				? [35, 35, 35]
				: [
					Math.floor((val / 100) * 48 + 35),
					Math.floor((val / 100) * 48 + 35),
					Math.floor((val / 100) * 48 + 35)
				];
		let currentTheme = themes[appName + theme];
		currentTheme.forEach(cssVar => {
			setCSS(cssVar.title, getValue(cssVar, panelBG));
		});
	},
	switch() {
		const appName = getAppName();
		if (!/FLPR/.test(appName)) return null;
		if (!window.__adobe_cep__) return null;
		let isDark =
			JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo
				.panelBackgroundColor.color.red < 200;
		let activeTheme = window.localStorage.getItem("activeTheme");
		if (!activeTheme) activeTheme = isDark ? "darkest" : "lightest";

		if (!isDark && /dark/.test(activeTheme)) {
			activeTheme = activeTheme.replace("dark", "light");
		} else if (isDark && /light/.test(activeTheme)) {
			activeTheme = activeTheme.replace("light", "dark");
		}
		let switcheroo = /est/.test(activeTheme)
			? activeTheme.replace("est", "")
			: activeTheme + "est";
		window.localStorage.setItem("activeTheme", switcheroo);
		this.initAs("FLPR", switcheroo);
	},
	initAs(appName, theme, gradientvalue = null) {
		this.loadThemes();
		// window.addEventListener("message", this.parseTheme);
		let panelBG;
		// console.log(`Initializing starlette as ${appName}: ${theme}`);
		if (/ILST|IDSN|PHXS/i.test(appName)) {
			if (/darkest/i.test(theme)) panelBG = [50, 50, 50];
			else if (/dark$/i.test(theme)) panelBG = [83, 83, 83];
			else if (/light$/i.test(theme)) panelBG = [184, 184, 184];
			else if (/lightest/i.test(theme)) panelBG = [240, 240, 240];
		} else if (/FLPR/i.test(appName)) {
			if (/darkest/i.test(theme)) panelBG = [34, 34, 34];
			else if (/dark$/i.test(theme)) panelBG = [54, 54, 54];
			else if (/light$/i.test(theme)) panelBG = [245, 245, 245];
			else if (/lightest/i.test(theme)) panelBG = [255, 255, 255];
		} else {
			panelBG =
				!gradientvalue || gradientvalue == 0
					? [35, 35, 35]
					: [
						Math.floor((gradientvalue / 100) * 48 + 35),
						Math.floor((gradientvalue / 100) * 48 + 35),
						Math.floor((gradientvalue / 100) * 48 + 35)
					];
		}
		let currentTheme = themes[appName + theme];
		//
		// Weird! Lightest refuses to work more than once for Animate unless manually overridden. Something's wrong?
		if (appName == "FLPR" && theme == "lightest") {
			panelBG = [255, 255, 255];
		}
		currentTheme.forEach(cssVar => {
			setCSS(cssVar.title, getValue(cssVar, panelBG));
		});
	},
	init() {
		this.loadThemes();
		if (window.__adobe_cep__) {
			window.__adobe_cep__.addEventListener(
				"com.adobe.csxs.events.ThemeColorChanged",
				this.appThemeChanged
			);
			if (getAppName() !== "FLPR") this.appThemeChanged();
			else if (window.localStorage.getItem("activeTheme")) {
				this.initAs("FLPR", window.localStorage.getItem("activeTheme"));
			} else {
				this.appThemeChanged();
			}
		}
	},
	appThemeChanged() {
		this.currentTheme = [];
		let appName = getAppName();
		let panelBG = getPanelBG();
		let theme = getAppTheme();
		if ("FLPR" == appName) {
			let bg = JSON.parse(window.__adobe_cep__.getHostEnvironment())
				.appSkinInfo.panelBackgroundColor.color.red;
			let isDark = bg < 200;
			theme = isDark ? "darkest" : "lightest";
			let data = {
				darkest: [34, 34, 34],
				dark: [54, 54, 54],
				light: [245, 245, 245],
				lightest: [255, 255, 255]
			};
			panelBG = data[theme];
			window.localStorage.setItem("activeTheme", theme);
		}
		let currentTheme = themes[appName + theme];
		currentTheme.forEach(cssVar => {
			setCSS(cssVar.title, getValue(cssVar, panelBG));
		});
	},
	buildTableForApp(appName) {
		let mirror = [];
		if (/ILST|PHXS|IDSN/.test(appName)) {
			let baseTheme = themes[appName + "darkest"].reverse();
			baseTheme.forEach((item, i) => {
				let darkest = getValue(item, [50, 50, 50]);
				let dark = getValue(
					themes[appName + "dark"].find(entry => {
						return entry.title == item.title;
					}),
					[83, 83, 83]
				);
				let light = getValue(
					themes[appName + "light"].find(entry => {
						return entry.title == item.title;
					}),
					[184, 184, 184]
				);
				let lightest = getValue(
					themes[appName + "lightest"].find(entry => {
						return entry.title == item.title;
					}),
					[240, 240, 240]
				);
				let line;
				if (item.hex || item.delta) {
					line = `| --${
						item.title
						} | ![${darkest}](https://placehold.it/15/${darkest.replace(
							"#",
							""
						)}/ffffff?text=+) \`${darkest}\`  | ![${dark}](https://placehold.it/15/${dark.replace(
							"#",
							""
						)}/ffffff?text=+) \`${dark}\`  | ![${light}](https://placehold.it/15/${light.replace(
							"#",
							""
						)}/ffffff?text=+) \`${light}\`  | ![${lightest}](https://placehold.it/15/${lightest.replace(
							"#",
							""
						)}/ffffff?text=+) \`${lightest}\` |`;
					mirror.push(line);
				}
			});
		} else {
			let baseTheme = themes[appName + "gradient"].reverse();
			baseTheme.forEach((item, i) => {
				let darkest = getValue(item, [
					Math.floor(39.25),
					Math.floor(39.25),
					Math.floor(39.25)
				]);

				let mid = getValue(item, [
					Math.floor(64),
					Math.floor(64),
					Math.floor(64)
				]);
				let lightest = getValue(item, [
					Math.floor(90.25),
					Math.floor(90.25),
					Math.floor(90.25)
				]);
				let line;
				if (item.hex || item.delta) {
					line = `| --${
						item.title
						} | ![${darkest}](https://placehold.it/15/${darkest.replace(
							"#",
							""
						)}/ffffff?text=+) \`${darkest}\`  | ![${mid}](https://placehold.it/15/${mid.replace(
							"#",
							""
						)}/ffffff?text=+) \`${mid}\`  | ![${lightest}](https://placehold.it/15/${lightest.replace(
							"#",
							""
						)}/ffffff?text=+) \`${lightest}\` |`;
					mirror.push(line);
				}
			});
		}
		return mirror;
	}
};

function getValue(item, color) {
	if (item.delta || item.delta <= 0) {
		if (+item.delta + +color[0] >= 255) return "#ffffff";
		else return getColorFromDeltaOffset(color, item.delta);
	} else if (item.hex) {
		return item.hex;
	} else if (item.value) {
		return item.value;
	}
}

function getCSS(prop) {
	return window
		.getComputedStyle(document.documentElement)
		.getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
}
function setCSS(prop, data) {
	document.documentElement.style.setProperty(
		`${/^--/.test(prop) ? prop : "--" + prop}`,
		data
	);
}
