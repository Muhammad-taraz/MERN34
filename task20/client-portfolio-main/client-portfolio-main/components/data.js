import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  ChevronDoubleUpIcon,
  BoltIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
// Partner with us and elevate your business to new heights.
const benefitOne = {
  title: "Unlock the Potential of Our Services",
  desc: " With our tailored solutions and innovative technologies, we empower you to turn your visions into reality and gain valuable insights. Join us on a transformative journey of success and innovation, taking your business to new heights. Let's shape the future together.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Unleash Your Potential with US",
  desc: "We seamlessly integrate our development services with your existing systems and workflows. This ensures a smooth transition and minimizes disruptions to your business operations.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reliability",
      desc: "We understand the importance of meeting deadlines. You can rely on us to deliver your project on time without compromising on quality.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Quality you can trust",
      desc: "Technics Lab is a reliable partner for meeting all of your development needs. We have a team of talented developers who work hard to deliver high quality work on time.",
      icon: <HandThumbUpIcon />,
    },
    {
      title: "How we help you succeed",
      desc: "We offer complete solutions for any app you may need - from web apps to blockchain apps, we can do it all. Let us help you get your idea off the ground by developing it into a working app that people love!",
      icon: <ChevronDoubleUpIcon />,
    },
    {
      title: "Fast turnaround time",
      desc: "We know how important deadlines are, which is why we pride ourselves on being able to meet them. Our developers can provide complete solutions with a fast turnaround time. If you need a new app or website built, get in touch with us today!",
      icon: <BoltIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
