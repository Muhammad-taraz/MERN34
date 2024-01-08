import Aos from "aos";
import React, { useEffect } from "react";

const AnimatedContainer = (props) => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			id={props?.id}
			className={`container p-8 mx-auto xl:px-0 ${
				props.className ? props.className : ""
			}`}
		>
			{props.children}
		</div>
	);
};

export default AnimatedContainer;
