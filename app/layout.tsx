import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import SideBar from "@/components/sideBar";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export const metadata: Metadata = {
	title: "Basic Notes",
	description:
		"A very basic notes taking application built using Next.js and NextUI components.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "dark" }}
				>
					<div className="relative flex h-screen w-screen">
						<SideBar />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
