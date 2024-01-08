import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { Transition } from "@headlessui/react";
const Faq = () => {
  const faqData = [
    {
      question: "Who is Jaheem and what is his background?",
      answer:
        "Jaheem is a pop singer and certified business & hip hop reporter, inventor, and hip hop artist. He hails from Chicago, located in North Austin, and has a passion for improving lives and helping people reach their full potential.",
    },
    {
      question: "What is Jaheem's mission and goal as an artist?",
      answer:
        "Jaheem's mission is to organize & conduct a detailed presentation of his work and help make a lasting impact on his clients, fans, and sponsors. He aims to create music that resonates with people and contributes positively to their lives.",
    },
    {
      question: "What type of music is Jaheem known for?",
      answer:
        "Jaheem is known for his pop music style, blending his unique hip hop influences into his songs. His music carries a message of empowerment and personal growth.",
    },
    {
      question: "How can fans connect with Jaheem and stay updated?",
      answer:
        "Fans can connect with Jaheem through his official website and social media channels. He frequently shares updates about his music, projects, and endeavors.",
    },
    {
      question: "Has Jaheem received any notable recognition or awards?",
      answer:
        "Jaheem has garnered recognition for his contributions to the music industry. His innovative approach as a certified business & hip hop reporter sets him apart in both the music and business worlds.",
    },
    {
      question: "Can Jaheem's music be streamed or purchased online?",
      answer:
        "Yes, Jaheem's music is available for streaming on various platforms, and fans can also purchase his music to support his artistic endeavors.",
    },
    {
      question:
        "Is Jaheem involved in any philanthropic or community initiatives?",
      answer:
        "Jaheem is committed to giving back to the community. He has been involved in various philanthropic initiatives aimed at improving the lives of those around him.",
    },
  ];

  return (
    <Container className="!p-0" id="FAQs">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData?.map((item, index) => (
          <div key={index} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <span className="ml-auto">
                      {open ? (
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
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
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </span>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition-all duration-500 ease-out"
                    enterFrom="opacity-0 max-h-0"
                    enterTo="opacity-100 max-h-full"
                    leave="transition-all duration-500 ease-out"
                    leaveFrom="opacity-100 max-h-full"
                    leaveTo="opacity-0 max-h-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                      {item.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
