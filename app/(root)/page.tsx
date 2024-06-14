"use client";

import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {
	const tasks = useQuery(api.tasks.get);
	return (
		<div className='mt-9 flex flex-col gap-9'>
			<section className='flex flex-col gap-5'>
				<h1 className='text-20 font-bold text-white-1'>
					Trending podcaster
				</h1>
				{/* {tasks?.map(({ _id, text }) => (
					<div key={_id}>{text}</div>
				))} */}
				<div className='podcast_grid'>
					{podcastData.map(
						({
							id,
							title,
							description,
							imgURL,
						}) => (
							<PodcastCard
								key={id}
								imageUrl={imgURL}
								title={title}
								description={description}
								podcastId={id}
							/>
						),
					)}
				</div>
			</section>
		</div>
	);
}
