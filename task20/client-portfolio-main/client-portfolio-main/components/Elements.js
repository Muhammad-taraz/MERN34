import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PopupWidget from "./popupWidget";
const Elements = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
			<PopupWidget />
		</>
	);
};
export default Elements;
