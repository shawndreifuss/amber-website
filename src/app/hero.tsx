"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/skyline-nev.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
         Genectic Couselours Associatation of Nevada
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Interested in joining GCAN or have questions? Contact us at XXX
        </Typography>
        <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Contact Us 
          </Button>
          <Button variant="gradient" color="blue">
            Donate 
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
