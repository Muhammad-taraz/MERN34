import Image from "next/image";
import React from "react";

const MarketingPartners = () => {
	const partners = [
		{
			icon: "",
			name: "",
		},
	];
	return (
		<marque>
			{partners.map((partner, index) => (
				<Image
					key={index}
					src={partner.icon}
					alt={partner.name}
					height={40}
					width={40}
				/>
			))}
		</marque>
	);
};

export default MarketingPartners;
