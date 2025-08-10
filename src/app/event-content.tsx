"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    name: "Julia",
    des: "About me section - add something here",
    title: "GCAN Genetic Counselour",
    position: "Role",
    location: "Location",
    img: "/image/placeholder.png",
  },
  {
    name: "Ali",
    des: "About me section - add something here",
    title: "GCAN Genetic Counselour",
    position: "Role",
    location: "Location",
    img: "/image/placeholder.png",
  },
  {
    name: "Amber",
    des: "About me section - add something here",
    title: "GCAN Genetic Counselour",
    position: "Role",
    location: "Location",
    img: "/image/placeholder.png",
  },
  {
    name: "Brandy",
    des: "About me section - add something here",
    title: "GCAN Genetic Counselour",
    position: "Role",
    location: "Location",
    img: "/image/placeholder.png",
  },
  {
    name: "Kate",
    des: "About me section - add something here",
    title: "GCAN Genetic Counselour",
    position: "Role",
    location: "Location",
    img: "/image/placeholder.png",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
        </div>
      </Tabs>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
