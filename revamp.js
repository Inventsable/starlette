#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

async function init() {
	let args = process.argv;
	if (args.length < 3) return null;
	let realpath = path.resolve(
		`./stylesheets/${args[2].replace("/", "\\")}.json`
	);
	let targetFile = fs.readFileSync(realpath, "utf8");
	let data = await parseTemplate(
		fs.readFileSync(`${path.resolve("./")}/template.md`, "utf8")
	);
	let file = await parseTarget(targetFile, data);
	fs.writeFileSync(realpath, JSON.stringify(file));
}

async function parseTemplate(data) {
	data = data.split("\r\n").filter(item => {
		return item !== "--";
	});
	let templater = data.map(item => {
		item = item.split("==");
		let child = {
			label: item[0].trim(),
			target: /color-/.test(item[1]) ? item[1].trim() : null,
			value: !/color-/.test(item[1]) ? item[1].trim() : null
		};
		return child;
	});
	return templater;
}

async function parseTarget(file, data) {
	file = JSON.parse(file);
	file = file.filter(item => {
		return !data.find(datum => {
			return item.title == datum.label;
		});
	});
	data.forEach(child => {
		let clone = {};
		if (child.value) {
			let result = {
				title: child.label
			};
			if (/#\w*/.test(child.value)) result["hex"] = child.value;
			else result["value"] = child.value;
			file.push(result);
		} else {
			let sibling = file.find(item => {
				return item.title == child.target;
			});
			Object.assign(clone, sibling);
			clone.title = child.label;
			file.push(clone);
		}
	});
	return file;
}

init();
