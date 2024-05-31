import NewFilesButton from "./addNewFiles";

const SideBar = async () => {
	return (
		<main className="flex flex-col p-2 w-full max-w-32 lg:max-w-64 h-screen bg-white dark:bg-zinc-900 rounded-r-lg">
			<section className="text-sm text-center">Your Notes</section>
			<hr className="mt-1" />
			<NewFilesButton />
		</main>
	);
};

export default SideBar;
