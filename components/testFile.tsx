"use client";

import { useState, useEffect } from "react";

const TestCode = ({ number }: { number: number }) => {
	const [filename, setFileName] = useState<number>();

	useEffect(() => {
		setFileName(number);
		console.log(filename);
	});

	return (
		<div>
			<p>Hello World</p>
		</div>
	);
};

export default TestCode;
