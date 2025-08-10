"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Student membership",
    description:"Graduate students currently enrolled in a genetic counseling program who reside or plan to work in Nevada ",
    subTitle: "",
  },
  {
    title: "Associate membership",
    description:
      "ABGC certified or board-eligible genetic counselors not residing or working in the state of Nevada, ABMGG certified medical geneticists residing or working in the state of Nevada, Other medical professionals with appropriate certification in genetics (for example, nurse practitioners) residing or working in the state of Nevada ",
    subTitle: "",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
     
      <Typography variant="h3" className="text-center" color="blue-gray">
        Who is GCAN?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-700"
      >
       The Genetic Counselors Association of Nevada (GCAN) was formed to connect and support genetic counselors, medical geneticists, and other genetics professionals across Nevada. We provide continuing education and professional development opportunities, as well as serve as a resource for community engagement and public education related to genetics and genomics. 
      </Typography>
<div className="mt-12">
<Typography variant="h3" className="text-center" color="blue-gray">
Membership Information 
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-700"
      >
     GCAN offers three tiers of membership </Typography></div>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Full membership"
            subTitle=""
            description="ABGC certified or board-eligible genetic counselors residing or working in the state of Nevada "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
