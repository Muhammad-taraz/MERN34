import React from "react";
import Container from "./container";
import { useEffect } from "react";
import Aos from "aos";

import styles from "../css/services.module.css";
import clsx from "clsx";

const Services = () => {
	useEffect(() => {
		Aos.init();
	});
	const services = [
		{
			title: "AI and Blockchain",
			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
					/>
				</svg>
			),
			paragraph: (
				<span>
          Empowering the future with AI and Blockchain. Offering custom Chat
          Bots and apps with<strong>LLMs </strong> and <strong>OpenAI</strong>.
          Dapps, NFTs and Crypto apps with <strong>Ethereum</strong>. &ldquo;,
				</span>
			),
		},
		{
			title: "Web App Development",
			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
					/>
				</svg>
			),
			paragraph: (
				<span>
          Elevate your digital presence with our Web Application Development
          expertise. Engaging <strong>MERN</strong> Stack, <strong>MEAN</strong>{" "}
          Stack, and <strong>JAM</strong> stack solutions that captivate
          users.&ldquo;,
				</span>
			),
		},
		{
			title: "Mobile App Development",
			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
					/>
				</svg>
			),
			paragraph: (
				<span>
          Turn your ideas into reality with our Mobile App Development services
          offering user-friendly and feature-rich apps for Android{" "}
					<strong>(Java & Kotlin)</strong> and iOS{" "}
					<strong>(Swift & React Native)</strong> platforms.
				</span>
			),
		},
		{
			title: "UI/UX and Graphic Design",
			svg: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
					/>
				</svg>
			),

			paragraph: (
				<span>
          Discover our UI/UX Design services, utilizing top tools like{" "}
					<strong>Adobe XD, Sketch, Figma, and InVision</strong>. We&lsquo;ll
          create captivating visuals and seamless user experiences for your
          success.
				</span>
			),
		},
	];

	return (
		<>
			<Container className="flex flex-wrap mb-20  ">
				<div className={clsx("w-full", styles.card__container)}>
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							title={service.title}
							desc={service.paragraph}
							icon={service.svg}
						/>
					))}
				</div>
			</Container>
		</>
	);
};

const ServiceCard = ({ title, desc, icon }) => {
	return (
		<div
			className={clsx(
				styles.card__bx,
				styles.card__1,
				"h-[420px] w-[300px] relative"
			)}
		>
			<div className={styles.card__data}>
				<div className={styles.card__icon}>
					<div className={styles.card__icon_box}>{icon}</div>
				</div>
				<div className={styles.card__content}>
					<h3>{title}</h3>
					<p className="pb-4">{desc}</p>
					{/* <a href="#">Read More</a> */}
				</div>
			</div>
		</div>
	);
};

export default Services;
