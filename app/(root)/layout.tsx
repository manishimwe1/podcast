export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<main>
				Left
				{children}
				Right
			</main>
		</div>
	);
}
