/* eslint-disable no-mixed-spaces-and-tabs */

import React from "react";
import CountUp from "react-countup";
import {
  CurrencyDollarIcon,
  MapIcon,
  RocketLaunchIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case "Happy Clients":
      return <UserPlusIcon />;
    case "Countries":
      return <MapIcon />;
    case "Products Launched":
      return <RocketLaunchIcon />;
    case "Revenue Generated":
      return <CurrencyDollarIcon />;
    default:
      return null;
  }
};

const StatsSection = () => {
  const stats = [
    {
      id: 5,
      attributes: {
        title: "Happy Clients",
        count: 12,
        createdAt: "2023-07-09T17:49:43.708Z",
        updatedAt: "2023-07-09T19:24:53.591Z",
        publishedAt: "2023-07-09T17:49:49.437Z",
        icon: null,
        description: null,
      },
    },
    {
      id: 1,
      attributes: {
        title: "Countries",
        count: 21,
        createdAt: "2023-07-09T17:47:12.476Z",
        updatedAt: "2023-07-09T19:26:20.424Z",
        publishedAt: "2023-07-09T17:47:18.537Z",
        icon: <RocketLaunchIcon />,
        description: null,
      },
    },
    {
      id: 4,
      attributes: {
        title: "Revenue Generated",
        count: 25000,
        createdAt: "2023-07-09T17:49:20.566Z",
        updatedAt: "2023-07-09T19:29:20.688Z",
        publishedAt: "2023-07-09T17:49:30.335Z",
        icon: null,
        description: null,
      },
    },
    {
      id: 3,
      attributes: {
        title: "Products Launched",
        count: 4,
        createdAt: "2023-07-09T17:48:13.341Z",
        updatedAt: "2023-07-09T19:29:53.314Z",
        publishedAt: "2023-07-09T17:48:17.029Z",
        icon: null,
        description: null,
      },
    },
  ];

  return (
    <div
      id="Stats"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats?.map((state, i) => {
          return (
            <div className="text-center" key={i}>
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                {getIconComponent(state.attributes.title)}
              </div>
              <h6 className="text-4xl font-bold text-[#912de9] uppercase lg:text-4xl">
                <CountUp
                  end={state?.attributes?.count}
                  start={0}
                  duration={5}
                ></CountUp>
              </h6>
              <p className="mb-2 font-bold text-md">
                {state?.attributes?.title}
              </p>
              <p className="text-gray-700 dark:text-white">
                {state?.attributes?.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
/* eslint-disable no-mixed-spaces-and-tabs */
export default StatsSection;
