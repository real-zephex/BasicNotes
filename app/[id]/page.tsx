"use client";

import React from "react";
import { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import { SaveToLocalStorage } from "@/config/saveToLocal";
import { LoadDateFromLocal } from "@/config/LoadFromLocal";

type Params = {
	id: string;
};

interface RedirectProps {
	params: Params;
}

const EditArea: React.FC<RedirectProps> = ({ params }) => {
	const { id } = params;
	const [text, setText] = useState<string>("");

	const preData = LoadDateFromLocal(id) ? LoadDateFromLocal(id) : null;

	return (
		<div className="flex w-full flex-col mt-1 ml-1 ">
			<Tabs aria-label="Options">
				<Tab key={id} title={id}>
					<Card>
						<CardBody className="h-[94.3dvh]">
							<textarea
								placeholder="Start writing here"
								className="w-full h-full bg-zinc-900 outline-none "
								defaultValue={preData ? preData : ""}
								onChange={(event) =>
									setText(event.target.value.trim())
								}
								onKeyDown={() => {
									SaveToLocalStorage(id, text);
								}}
							/>
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
};

export default EditArea;
