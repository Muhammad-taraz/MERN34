import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import { useEffect } from "react";
import Aos from "aos";
import React from "react";
const Hero = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div
            className="max-w-2xl mb-8"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              I’am{" "}
              <span className="animate-pulse font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Jaheem
              </span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-400 transition-all duration-500 dark:hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-400">
                Business & Music Newscast
              </span>
              . Big Time Bosses is new casting company that makes life story
              presentation for local business owner and musicians to help them
              get discovered by new clients fans and sponsors.
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://calendly.com/haseeb-se-dev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#912de9] rounded-md hover:bg-indigo-500 focus:bg-indigo-500 ease"
              >
                Let&apos;s Meet
              </a>
              <a
                href="https://github.com/haseebullahabbasi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <span> Video</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="" data-aos="zoom-in" data-aos-duration="2000">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      <Container></Container>
    </>
  );
};

export default Hero;
