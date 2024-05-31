"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { Card, CardBody, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";

import { SaveFilesToLocal } from "@/config/saveToLocal";
import { LoadFilesFromLocal } from "@/config/LoadFromLocal";

const NewFilesButton = () => {
	const [count, setCount] = useState<number>(1);
	const [newFiles, setNewFiles] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const files = LoadFilesFromLocal();
		if (files && files.length > 0) {
			setCount(files.length + 1);
		}

		setNewFiles([...newFiles, loadFiles()]);
	}, []);

	const router = useRouter();
	function loadFiles() {
		const files = LoadFilesFromLocal();

		const data = (
			<div>
				{files &&
					files.map((item, index) => (
						<Textarea
							defaultValue={item.toString()}
							disableAutosize
							isDisabled={false}
							variant="bordered"
							className="w-full h-10 text-center mt-1"
							key={index}
							startContent={
								<FaEdit
									size={20}
									color="green"
									className="cursor-pointer"
									onClick={() => {
										router.push(`/${item}`);
									}}
								/>
							}
						></Textarea>
					))}
			</div>
		);
		return data;
	}
	function createNewFile() {
		const newFile = (
			<Textarea
				defaultValue={count.toString()} // Use the newKey as the default value
				disableAutosize
				isDisabled={false}
				variant="bordered"
				className="w-full h-10 text-center mt-1"
				key={count}
				startContent={
					<FaEdit
						size={20}
						color="green"
						className="cursor-pointer"
						onClick={() => {
							router.push(`/${count}`);
						}}
					/>
				}
			></Textarea>
		);
		setNewFiles([...newFiles, newFile]);
		SaveFilesToLocal(count);
		setCount(count + 1);
	}

	function deleteEntry(id: number) {
		setNewFiles((prevFiles) =>
			prevFiles.filter((item) => item.key !== id.toString()),
		);
	}

	return (
		<div className="pt-2 h-full overflow-auto">
			<Button
				color="default"
				size="sm"
				className="w-full"
				onClick={() => createNewFile()}
			>
				+
			</Button>
			<Card className="w-full mt-1">
				<CardBody>{newFiles}</CardBody>
			</Card>
		</div>
	);
};

export default NewFilesButton;
