"use client";

export const SaveToLocalStorage = (id: string, text: string) => {
	const jsonEntry = localStorage.getItem(id);
	const dataObject = jsonEntry ? JSON.parse(jsonEntry) : {};

	if (!dataObject.text) {
		dataObject.text = [];
	}

	dataObject.text.pop();
	dataObject.text.push(text);
	let updatedData = JSON.stringify(dataObject);
	localStorage.setItem(id, updatedData);
};

export const SaveFilesToLocal = (id: number) => {
	const jsonEntry = localStorage.getItem("openedFiles");
	const dataObject = jsonEntry ? JSON.parse(jsonEntry) : {};

	if (!dataObject.files) {
		dataObject.files = [];
	}

	let found = false;
	for (let item of dataObject.files) {
		if (item === id) {
			found = true;
		}
	}

	if (!found) {
		dataObject.files.push(id);
	}
	let updatedData = JSON.stringify(dataObject);
	localStorage.setItem("openedFiles", updatedData);
};
