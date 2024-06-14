"use client";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(
	process.env.NEXT_PUBLIC_CONVEX_URL as string,
);

export const ConvexClerkProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<ClerkProvider
		appearance={{
			layout: {
				socialButtonsVariant: "iconButton",
				logoImageUrl: "/icons/auth-logo.svg",
			},
			variables: {
				colorBackground: "#15171c",
				colorPrimary: "",
				colorText: "white",
				colorInputBackground: "#1b1f29",
				colorInputText: "white",
			},
		}}
		publishableKey={
			process.env
				.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string
		}>
		<ConvexProviderWithClerk
			client={convex}
			useAuth={useAuth}>
			{children}
		</ConvexProviderWithClerk>
	</ClerkProvider>
);
