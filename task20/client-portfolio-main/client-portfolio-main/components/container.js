import React from "react";

const Container = (props) => {
	return (
		<div
			id={props?.id}
			className={`container p-8 mx-auto md:px-4 xl:px-4 ${
				props.className ? props.className : ""
			}`}
		>
			{props.children}
		</div>
	);
};

export default Container;
