"use client";

import React from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export default function MissionPage() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">

        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
          GCAN's Mission
        </Typography>

        <Typography className="my-5 font-normal !text-gray-900">
        To connect and support genetic counselors, medical geneticists, and other genetics professionals across Nevada.
        </Typography>
        <Typography className="my-5 font-normal !text-gray-900">
        To provide continuing education and professional development opportunities.  </Typography>
        <Typography className="my-5 font-normal !text-gray-900">
        To serve as a resource for community engagement and public education related to genetics and genomics.  </Typography>
        <Image
          width={1000}
          height={500}
          src="/image/mission.jpeg"
          alt="post"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
       

        <Typography className="my-12 font-normal !text-gray-900">
        Our vision is to be the leading advocate for quality genetics services in the state of Nevada and a thriving community for the genetics profession.   
        </Typography>

       
          </div>
    </section>
  );
}

