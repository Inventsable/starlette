// Universal function for color conversion to hexadecimal
export default function rgbToHex(rgbArray) {
	!(rgbArray instanceof Array)
		? [
				rgbArray.r || rgbArray.red,
				rgbArray.g || rgbArray.green,
				rgbArray.b || rgbArray.blue
		  ]
		: rgbArray;
	while (rgbArray.length > 3) rgbArray.pop();
	return (
		"#" +
		rgbArray
			.map(c => {
				c = c <= 255 ? Math.abs(Math.floor(c)).toString(16) : 0;
				return c.length < 2 ? `0${c}` : c;
			})
			.join("")
	);
}
