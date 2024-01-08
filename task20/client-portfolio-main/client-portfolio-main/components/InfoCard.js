import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedContainer from "./containerAnimated";
import { HeartIcon } from "@heroicons/react/24/solid";
import { LiaHistorySolid } from "react-icons/lia";
import Image from "next/image";

const InfoCard = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AnimatedContainer
      id={props?.id}
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle == undefined && (
        <h1 className="max-w-2xl font-bold text-3xl tracking-wider text-[#912de9] uppercase lg:text-5xl">
          <LiaHistorySolid />
        </h1>
      )}
      {props.pretitle == "image" && (
        <div className="max-w-2xl font-bold text-3xl tracking-wider text-[#912de9] uppercase lg:text-5xl">
          <div className="border-4 border-purple-500 rounded-[150px] p-2">
            <Image src="/img/bg_pic.png" alt="pic" width="200" height="200" />
          </div>
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </AnimatedContainer>
  );
};

export default InfoCard;
