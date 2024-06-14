import React from "react";

type ParmasProps = {
	params: {
		podcastId: string;
	};
};

const PodcastDetailsPage = ({
	params,
}: {
	params: { podcastId: string };
}) => {
	return <div>PodcastDetailsPage:{params.podcastId}</div>;
};

export default PodcastDetailsPage;
