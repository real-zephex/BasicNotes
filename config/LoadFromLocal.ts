"use client";

interface SavedData {
	text: string;
}

interface SavedFiles {
	files: Number[];
}

export const LoadDateFromLocal = (id: string): string | null => {
	const dataString: string | null = localStorage.getItem(id);
	if (!dataString) {
		return null;
	}

	try {
		const data: SavedData = JSON.parse(dataString);
		return data.text; // Return the whole text
	} catch (error) {
		console.error("Error parsing data from localStorage:", error);
		return null;
	}
};

export const LoadFilesFromLocal = () => {
	const dataString: string | null = localStorage.getItem("openedFiles");

	if (!dataString) {
		return null;
	}

	try {
		const data: SavedFiles = JSON.parse(dataString);
		return data.files;
	} catch (error) {
		console.error("Error parasing data:", error);
		return null;
	}
};
