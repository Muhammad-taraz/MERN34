import React from "react";
import Link from "next/link";

export const ServiceCard = ({ id, service }) => {
  const { title, desc, images, date } = service;

  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  };

  const truncatedDesc = truncateDescription(desc, 110);

  return (
    <Link
      href={`/services/${id}`}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {images && images.length > 0 ? (
          <div className="relative">
            <img
              src={images[0]}
              alt={title}
              className="w-full h-48 object-cover transition-opacity hover:opacity-100 duration-300"
              style={{ opacity: "0.9" }}
            />
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 hover:opacity-100">
              <img
                src={images[0]}
                alt={title}
                className="w-full h-full object-cover"
                style={{ opacity: "1" }}
              />
            </div>
          </div>
        ) : (
          <div className="bg-gray-300 h-48"></div>
        )}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{truncatedDesc}</p>
          <div className="flex flex-wrap"></div>
        </div>
        <div className="bg-gray-100 text-gray-500 px-4 py-2 text-xs">
          {date}
        </div>
      </div>
    </Link>
  );
};
const ServiceList = ({ services }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold"> Services</h2>
        {/* <Link href="/services">View All</Link> */}
      </div>

      <div className="flex flex-wrap -mx-4">
        {/* <div className="grid grid-cols-4 sm:grid-cols-6"> */}
        {services.map((service, index) => (
          <ServiceCard key={index} id={index} service={service} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Music Album Release",
      desc: "Release of Jaheem's latest music album, featuring a collection of his popular tracks and new hits.",
      images: ["/img/logo.png"],
      date: "2023-08-15",
    },

    {
      title: "Music Video Premiere",
      desc: "Be the first to watch Jaheem's visually stunning music video, complementing one of his hit singles.",
      images: ["/img/logo.png"],
      date: "2023-08-25",
    },
    {
      title: "Collaboration Project",
      desc: "Experience the magic of collaboration as Jaheem joins forces with another renowned artist for a special musical project.",
      images: ["/img/logo.png"],
      date: "2023-10-05",
    },
    {
      title: "Exclusive Fan Event",
      desc: "Get up close and personal with Jaheem in an exclusive fan event featuring meet-and-greet sessions and behind-the-scenes insights.",
      images: ["/img/logo.png"],
      date: "2023-09-20",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ServiceList services={services} />
    </div>
  );
};

export default ServicesSection;
