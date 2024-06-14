"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { voiceDetails } from "@/constants";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import GeneratePodcast from "@/components/GeneratePodcast";
import GenerateThumbnail from "@/components/generateThumbnail";

const CreatePodcastPage = () => {
	const [voiceType, setVoiceType] = useState<
		string | null
	>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const formSchema = z.object({
		username: z.string().min(2, {
			message:
				"Username must be at least 2 characters.",
		}),
	});
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<section className='mt-10 flex flex-col'>
			<h1 className='text-20 font-bold text-white-1'>
				Create Podcast
			</h1>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='mt-12 flex w-full flex-col'>
					<div className='flex flex-col border-black-5 pb-10 gap-8'>
						<FormField
							control={form.control}
							name='podcastTitle'
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2.5'>
									<FormLabel className='text-16 font-bold text-white-1'>
										Title
									</FormLabel>
									<FormControl>
										<Input
											className='input_class focus-visible:ring-orange-1'
											placeholder='podcast title'
											{...field}
										/>
									</FormControl>

									<FormMessage className='text-white-1' />
								</FormItem>
							)}
						/>
						<div className='flex flex-col gap-2.5 '>
							<Label className='text-16 font-bold text-white-1'>
								Select AI Voice
							</Label>

							<Select
								onValueChange={(value) => {
									console.log(
										value,
										"VALUEEEEE",
									);
									setVoiceType(value);
								}}>
								<SelectTrigger
									className={cn(
										"text-16 w-full border-none bg-black-1 text-gray-1 ",
									)}>
									<SelectValue placeholder='Select Ai Voice' />
								</SelectTrigger>
								<SelectContent className='text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1'>
									{voiceDetails.map(
										(voice) => (
											<SelectItem
												key={
													voice.id
												}
												className='capitalize focus:bg-orange-1'
												value={
													voice.name
												}>
												{voice.name}
											</SelectItem>
										),
									)}
								</SelectContent>
								{voiceType && (
									<audio
										src={`/${voiceType}.mp3`}
										autoPlay
										className='hidden'
									/>
								)}
							</Select>
						</div>

						<FormField
							control={form.control}
							name='podcastDescription'
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2.5'>
									<FormLabel className='text-16 font-bold text-white-1'>
										Title
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Write a short podcast description'
											className='input_class focus-visible:ring-orange-1'
											{...field}
										/>
									</FormControl>

									<FormMessage className='text-white-1' />
								</FormItem>
							)}
						/>
					</div>
					<div className='flex flex-col pt-10'>
						<GeneratePodcast />
						<GenerateThumbnail />
					</div>
					<div className='mt-10 w-full '>
						<Button
							type='submit'
							className='text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1'>
							{isSubmitting ? (
								<> Submitting...</>
							) : (
								"Submitt & publish Podcast"
							)}
						</Button>
					</div>{" "}
				</form>
			</Form>
		</section>
	);
};

export default CreatePodcastPage;
